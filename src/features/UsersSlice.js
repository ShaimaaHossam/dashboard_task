import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const APP_ID = "63159e930878d43a32cb3630"
export const fetchUsers  = createAsyncThunk('users/fetchUsers', async()=>{
    let users = []
    for(let page=0; page<10; page++){
        try{
            const res = await axios.get("https://dummyapi.io/data/v1/user?page="+page,{
                method:'get', 
                headers: {
                    'app-id': APP_ID
                }
            })

            users = users.concat(res.data.data)
            
        } catch(error){
            return error.message;
        }
    }

    return users
    
  
})
export const addUser = createAsyncThunk('users/addUser', async(newUser)=>{
    try{
        const res = await axios.post('https://dummyapi.io/data/v1/user/create', newUser, {
            headers: {
                'app-id': APP_ID
            }
        })
        return res.data
    } catch(error){
        return error.message
    }
})
export const removeUser = createAsyncThunk('users/removeUser', async(id)=>{
    try{
        const res = await axios.delete('https://dummyapi.io/data/v1/user/'+id, {
            headers: {
                'app-id': APP_ID
            }
        })
        return res.data
    } catch(error){
        return error.message
    }
})
export const updateUser = createAsyncThunk('users/updateUser', async(row)=>{
    try{
        console.log(row._valuesCache)
        const res = await axios.put('https://dummyapi.io/data/v1/user/'+row.original.id, row._valuesCache, {
            headers: {
                'app-id': APP_ID
            }
        })
        return res.data
    } catch(error){
        return error.message
    }
})
const initialState = {
    users: [],
    loading: 'idle',
    error: null
} 


export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                
            state.users = [...action.payload]
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.error.message
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            .addCase(addUser.rejected, (state, action) => {
                console.log(action)
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload.id)
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                for(let i=0; i<state.users.length; i++){
                    if(state.users[i].id===action.payload.id){
                        state.users[i].firstName = action.payload.firstName
                        state.users[i].lastName = action.payload.lastName
                        state.users[i].title = action.payload.title
                    }
                }
            })
    },

})



//export const {getUsers} = UsersSlice.actions
export default UsersSlice.reducer
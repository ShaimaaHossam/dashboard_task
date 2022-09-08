import {configureStore} from '@reduxjs/toolkit'
import modalReducer from '../features/ModalSlice'
import usersReducer from '../features/UsersSlice'
export default configureStore({
    reducer: {
        modal: modalReducer,
        users: usersReducer
    }
})
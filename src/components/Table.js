import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers, removeUser, updateUser} from '../features/UsersSlice'
import {setAutoFreeze} from 'immer';
import MaterialReactTable  from 'material-react-table';
import {
    Box,
    Typography,
    IconButton,
    Tooltip,
  } from '@mui/material';
  import { Delete, Edit } from '@mui/icons-material';

setAutoFreeze(false)
function Table(){
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const columns = useMemo(
        () => [
          {
            accessorKey: 'firstName', 
            header: 'First Name',
            Cell: ({ cell, row }) => (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <img
                    alt="avatar"
                    height={50}
                    width={50}
                    src={row.original.picture}
                    loading="lazy"
                    style={{ borderRadius: '50%' }}
                  />
                  <Typography>{cell.getValue()}</Typography>
                </Box>
              ),
          },
          {
            accessorKey: "lastName", 
            header: 'Last Name',
          },
          {
            accessorKey: "title", 
            header: 'Title',
          },
        ],
        [],
      );

    useEffect(()=>{
        if(loading === 'idle'){
            dispatch(fetchUsers())
        }
    },[loading, dispatch])
    const handleDeleteRow = (row) => {
        try{
          dispatch(removeUser(row.original.id))
        } catch(error){
            console.log(error)
        }
    }
    const handleSaveRowEdits = async ({row, exitEditingMode}) => {
        try{
            dispatch(updateUser(row))
            exitEditingMode()
          } catch(error){
              console.log(error)
          }
    }
 return users.length > 0 && (
    <MaterialReactTable
    columns={columns}
    data={users}
    enableEditing
    enableGlobalFilter={true} 
    enableColumnActions={false}
    onEditingRowSave={handleSaveRowEdits}
    renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={() => table.setEditingRow(row)}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}
  />
 )  
}
export default Table;
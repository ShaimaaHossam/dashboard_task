import {configureStore} from '@reduxjs/toolkit'
import pageReducer from '../features/PageSlice'
import modalReducer from '../features/ModalSlice'
export default configureStore({
    reducer: {
        page: pageReducer,
        modal: modalReducer,
    }
})
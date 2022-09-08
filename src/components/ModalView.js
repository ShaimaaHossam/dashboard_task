import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../features/ModalSlice'
import { Formik } from 'formik';
import {addUser} from '../features/UsersSlice'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0'
    },
};
Modal.setAppElement('#root');

function ModalView() {

    const modal = useSelector(state => state.modal.value)
    const dispatch = useDispatch()
    const onAddUser = (user) => {
        console.log(user)
        try{
            dispatch(addUser(user)).unwrap()
            dispatch(close())
        } catch(e){
            console.log(e.response)
        } 
    }
    return (
        <Modal
            isOpen={modal}
            onRequestClose={() => dispatch(close())}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Formik
                initialValues={{ firstName: '', lastName:'', title: '', picture:'', email:''}}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        onAddUser(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    handleSubmit,
                    isSubmitting,
                    handleChange
                }) => (
                    <>
                    <div className="flex justify-between mb-8 bg-[#050e2d] text-white px-8 py-2">
                            <h1 className=" ">Add New User</h1>
                            <p className="cursor-pointer" onClick={() => dispatch(close())}>X</p>
                        </div>
                    <form onSubmit={handleSubmit} className="bg-[#f8fafb] px-6">
                        
                        <label className="font-bold text-md" >First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            className="block w-80 border-1 py-1 px-2 mb-2"
                            onChange={handleChange}
                        />
                        <label className="font-bold text-md" >Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            className="block w-80 border-1 py-1 px-2 mb-2"
                            onChange={handleChange}

                        />
                        <label className="font-bold text-md" >Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            className="block w-80 border-1 py-1 px-2 mb-2"
                            onChange={handleChange}

                        />
                        <label className="font-bold text-md" >Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={values.title}
                            className="block w-80 border-1 py-1 px-2 mb-2"
                            onChange={handleChange}

                        />
                        <label className="font-bold text-md" >Picture URL:</label>
                        <input
                            type="text"
                            name="picture"
                            value={values.picture}
                            className="block w-80 border-1 py-1 px-2 mb-2"
                            onChange={handleChange}

                        />
                       
                        <div className="flex justify-end mt-7 mb-4">
                            <button onClick={()=>dispatch(close())} className="border-1 border-gray-300 mr-2 px-2 py-1 rounded-sm">
                                Cancel
                            </button>
                            <button type="submit" className="bg-[#22a565] text-white px-2 py-1 rounded-sm" disabled={isSubmitting}>
                                Add User
                            </button>
                        </div>
                    </form>
                    </>
                )}
            </Formik>
        </Modal>
    );
}
export default ModalView;

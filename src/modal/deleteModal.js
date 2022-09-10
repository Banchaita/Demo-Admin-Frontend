import React ,{useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from 'antd';
import{showDeleteModalAction} from '../actions/modals'
import {DeleteAdminAction,getAdmintData} from '../actions/admin'





const DeleteModal = () => {
    const dispatch = useDispatch()
    const [_id, setAdminId] = useState('')


    let showaDeleteModal = useSelector((state) => state.modals.showaDeleteModal)
    const active_admin = useSelector(state => state.admin.active_admin)
    const adminData = useSelector(state => state.admin.admin_data)

    const Admindelete =()=>{
        let data={
            _id:active_admin
        }
        // console.log('admin_id===',_id)
        dispatch(DeleteAdminAction(data)) 
        dispatch(getAdmintData())
    }

    // useEffect(() => {
    //     if(adminData){
    //         dispatch(getAdmintData())
    //     }
    // },[adminData])

    return (
        <Modal
            title={'Delete  Permission'}
            visible={showaDeleteModal}
            onOk={() => Admindelete(_id)}
            onCancel={() => dispatch(showDeleteModalAction(false))}
        >
            <p>Are you sure want to delete this entry?</p>
        </Modal>
    )

}

export default DeleteModal
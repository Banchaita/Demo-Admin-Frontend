import React, { useEffect, useState } from 'react'
import { Modal, Row,Input } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { showAdminEditModal } from '../actions/modals'
import {getEditAdmin} from '../actions/admin_auth'
import { fileUrl } from '../constants/const';
import toast from "../components/common/toast"


const EditAdmin = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')
    const [admin_pic, setAdmin_pic] = useState('')
    const [admin_id, setAdminId] = useState('')


    let showEditAdminModel = useSelector((state) => state.modals.showEditAdminModel)
    const subadmin_data = useSelector(state => state.adminauth.subadmin_data)

    useEffect(() => {
        if (subadmin_data) {
            setAdmin_pic(subadmin_data.admin_pic)
            setName(subadmin_data.name || name)
            setEmail(subadmin_data.email || email)
            setPhone(subadmin_data.phone || phone)
            setType(subadmin_data.type || type)
            setAdminId(subadmin_data._id)
        }
    }, [])

    const Adminedit = () => {
        alert(admin_id)
        let data = {
            admin_id:subadmin_data._id,
            name: name,
            email: email,
            phone:phone,
            admin_pic:admin_pic
        }
        toast.success('Admin Profile Edit Successful')
        dispatch(getEditAdmin(data))
    }




    return (
        <>
            <Modal
            
                title={'Edit Admin Profile'}
                visible={showEditAdminModel}
                onOk={() => Adminedit()}
                onCancel={() => dispatch(showAdminEditModal(false))}
            >
                <Row>
                    <div className="col-12 pl-0 form-group mt-3 mb-3">
                        <label>Admin Profile Image</label><br/>
                        <img src={`${fileUrl}${admin_pic}`} style={{ width: '20%',marginBottom:'1rem' }}></img><br/>                            
                        <br/>
                        <label hidden>Id</label>
                        <input type={'text'} value={admin_id} onChange={(e) => setAdminId(e.target.value)} className={"form-control"} placeholder="Enter Admin Name" hidden/>
                        <label>Name</label>
                        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} className={"form-control"} placeholder="Enter Admin Name" />
                        <label>Email</label>
                        <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} className={"form-control"} placeholder="Enter Admin Emial" />
                        <label>Phone</label>
                        <input type={'text'} value={phone} onChange={(e) => setEmail(e.target.value)} className={"form-control"} placeholder="Enter Admin Phone" />
                        <label>Type</label>
                        <input type={'text'} value={type} onChange={(e) => setType(e.target.value)} className={"form-control"} placeholder="Enter Admin Type" />
                    </div>
                </Row>
            </Modal>
        </>
    )
}

export default EditAdmin

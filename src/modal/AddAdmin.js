import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Divider,Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import { showAddAdminModalAction } from '../actions/modals'
import toast from "../components/common/toast"
import { AddingAdmin, getAdmintData } from '../actions/admin'
import logoImg from '../assets/images/logo2.png'




const AddAdmin = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [privileged, setPrivileged] = useState('')
    const [password, setPassword] = useState('')
    const [addimage, setAddImage] = useState('')

    let showAddAdminModel = useSelector((state) => state.modals.showAddAdminModel)
    const adminData = useSelector(state => state.admin.admin_data)

    const AddAdmin = async () => {
        let data = {
            name: name,
            email: email,
            phone: phone,
            privileged:privileged,
            password: password,
            addimage: addimage
        }
        console.log(privileged)
        toast.success('Sub Admin Add Successful')
        dispatch(AddingAdmin(data))
    }
    // useEffect(() => {
    //     if(adminData){
    //         dispatch(getAdmintData())
    //     }
    // },[adminData])

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const [file1, setFile1] = React.useState(``)
    useEffect(() => {
        if (typeof addimage !== "string") {
            (async function () {
                let x = await toBase64(addimage)
                setFile1(x)
                console.log(x)
            })()
        }
        setFile1(`${logoImg}`)
    }, [addimage])




    return (
        <>
            <Modal
                width={700}
                centered
                title={'Add New Admin'}
                visible={showAddAdminModel}
                onOk={() => AddAdmin()}
                onCancel={() => dispatch(showAddAdminModalAction(false))}
            >
                <Row>
                    <Col span={24}>
                        <label>
                            <label>Admin Profile Image</label><br></br>
                            <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setAddImage(event.target.files[0])} />
                            <img style={{ width: '150px', height: '150px', border: '1px solid #000000' }}
                                src={file1}
                            />
                        </label>
                    </Col>
                </Row>
                <Divider orientation="left"></Divider>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <div >
                            <label>Admin Name</label>
                            <input type={'text'} className={"form-control"} onChange={(e) => setName(e.target.value)} placeholder="Enter Admin Name" />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div>
                            <label>Admin Email</label>
                            <input type={'email'} className={"form-control"} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Admin Email" /></div>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row mt-4" span={12}>
                        <div >
                            <label>Admin Phone</label>
                            <input type={'text'} className={"form-control"} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Admin Phone" />
                        </div>
                    </Col>
                    <Col className="gutter-row mt-4" span={12}>
                        <div>
                            <label>Admin Password</label>
                            <Input.Password
                              placeholder="input password"
                              onChange={(e) => setPassword(e.target.value)}
                              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row mt-4" span={12}>
                        <div >
                            <label>Select Priviligled :- </label> &nbsp;  &nbsp;
                            <select placeholder='enter Priviligled' className='form-control' onChange={(e) => setPrivileged(e.target.value)} >
                                <option value="">Select Priviligled</option>
                                <option  value= 'Dashboard'>Dashboard</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </Modal>

        </>
    )


}

export default AddAdmin
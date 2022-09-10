import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Modal, Row, Button } from 'antd';
import { fileUrl } from '../constants/const';
import toast from "../components/common/toast"
import { showViewProfileModalAction } from '../actions/modals'
import { getEditAdminitertor } from '../actions/auth'
import logoImg from '../assets/images/logo2.png'

const ViweProfile = () => {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState('')
    const [addimage, setAddImage] = useState('')

    const [adminData, setCurrentAdminData] = useState(null)

    const showaViweProfileModalAdction = useSelector((state) => state.modals.showaViweProfileModal)
    const adminitertor_data = useSelector(state => state.auth.adminitertor_data)


    const setValue = (value, key) => {
        setCurrentAdminData({
            ...adminData,
            [key]: value
        })
    }
    const Administratoredit = () => {
        let data = {
            _id: adminitertor_data._id,
            name: adminData.name,
            email: adminData.email,
            phone: adminData.phone,
            addimage: addimage
        }
        console.log(phone)
        toast.success('Edit Successful')
        dispatch(getEditAdminitertor(data))
    }
    useEffect(() => {
        setCurrentAdminData(adminitertor_data)
        // if(adminitertor_data){
        //     dispatch(getAdminitertorData())
        // }
    }, [adminitertor_data])

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
                title={'Administrator Profile'}
                visible={showaViweProfileModalAdction}
                onCancel={() => dispatch(showViewProfileModalAction(false))}
                footer={[
                    <Button key="back" onClick={() => dispatch(showViewProfileModalAction(false))}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" style={{ background: "#043565" }} onClick={() => Administratoredit()}>
                        Submit
                    </Button>
                ]}
            >
                <Row>
                    
                    <div className="row">
                        <div className="col-12 form-group">
                        <label>
                        <label>Administrator Profile Image</label><br/>
                            <img src={`${fileUrl}${adminData ? adminData.profile_pic : ''}`} style={{  width: '100px', height: '100px', border: '1px solid #000000' , marginRight:'6px'}}></img>

                            <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setAddImage(event.target.files[0])} />
                            <img style={{ width: '100px', height: '100px', border: '1px solid #000000' }}
                                src={file1}
                            />
                        </label>
                        </div>
                        <div className="col-12 form-group">
                            <label>Administrator Name</label>
                            <input value={adminData ? adminData.name : ''} onChange={(e) => setValue(e.target.value, "name")} placeholder="Enter Administrator Name" type="text" className="form-control" />
                        </div>
                        <div className="col-12 form-group">
                            <label>Administrator Email</label>
                            <input value={adminData ? adminData.email : ''} onChange={(e) => setValue(e.target.value, 'email')} placeholder="abc@xyz.com" type="email" className="form-control" />
                        </div>
                        <div className="col-12 form-group">
                            <label>Administrator Phone</label>
                            <input type={'text'} className={"form-control"} value={adminData ? adminData.phone : ''} onChange={(e) => setValue(e.target.value, 'phone')} placeholder="Enter Phone number" />
                        </div>
                    </div>
                </Row>
            </Modal>


        </>
    )
}

export default ViweProfile

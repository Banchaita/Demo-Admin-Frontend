import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "../components/common/toast"
import { fileUrl } from '../constants/const';
import { Modal,Row} from 'antd';
import{showEidtModalAction} from '../actions/modals'
import{EditAdminAction,getAdmintData} from '../actions/admin'
import logoImg from '../assets/images/image-fill.png'



const EditModel = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')
    const [password, setPassword] = useState('')
    const [profile_pic, setProfile_pic] = useState('')
    const [addimage, setAddImage] = useState('')



    let showEditModel = useSelector((state) => state.modals.showEditModel)
    const adminData = useSelector(state => state.admin.admin_data)
    const  active_admin = useSelector(state => state.admin.active_admin)

    useEffect(() => {
        if (adminData) {
            adminData.map((key) => {
                if(key._id == adminData){
                    setName(key.name)
                    setEmail(key.email)
                    setPhone(key.phone)
                    setType(key.type)
                    setPassword(key.password)
                    setProfile_pic(key.profile_pic)

                }
            })
        }
    },[])
    useEffect(() => {
        if (active_admin) {
            adminData.map((key) => {
                if(key._id == active_admin){
                    setName(key.name)
                    setEmail(key.email)
                    setPhone(key.phone)
                    setType(key.type)
                    setPassword(key.password)
                    setProfile_pic(key.profile_pic)
                }
            })
                 }
    },[active_admin])
    
    const editAdmin = () => {
        let data = {
            admin_id:active_admin,
            name:name,
            email:email,
            phone:phone,
            type:type,
            addimage: addimage
        }
        console.log("addimage=====",addimage)
        toast.success('Admin Profile Edit Successful')
        dispatch(EditAdminAction(data)) 
    }
    //  useEffect(() => {
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
        <Modal
            title={'Edit Permission'}
            visible={showEditModel}
            onOk={() => editAdmin()}
            onCancel={() =>  dispatch(showEidtModalAction(false))}
        >
        
            <Row>
                    <div className="col-12 pl-0 form-group mt-3 mb-3">
                        
                        <label>
                            <label>Admin Profile Image</label><br/>
                            <img src={`${fileUrl}${profile_pic}`} style={{  width: '100px', height: '100px', border: '1px solid #000000' , marginRight:'6px'}}></img>
                            <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setAddImage(event.target.files[0])} />
                            <img style={{ width: '100px', height: '100px' }}
                                src={file1}
                            />
                        </label><br/>
                   
                        <label>Admin Name</label>
                        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} className={"form-control"}  placeholder="Enter Admin Name" />
                        <label>Admin Email</label>
                        <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} className={"form-control"} placeholder="Enter Admin Email" />
                        <label>Admin Phone</label>
                        <input type={'text'} value={phone} onChange={(e) => setPhone(e.target.value)} className={"form-control"}  placeholder="Enter Admin Phone" />
                        <label>Admin Type</label>
                        <input type={'text'} value={type} className={"form-control"}  placeholder="Enter Admin Type" />
                        <label hidden>Admin Password</label>
                        <input type={'password'} value={password} className={"form-control"}  placeholder="Enter Admin Password"  hidden/>
                    </div>
                </Row>
        </Modal>
    )

}

export default EditModel
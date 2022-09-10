import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import toast from "../../components/common/toast"
import { forgotPassword,removeEmail, varifyEmail,removeForgotPassword} from '../../actions/auth'
import { showLoaderAction } from '../../actions/loader';
import Loader from '../../components/loader';


import { Button } from "antd"



const Forgot = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    
    const forgotStatus = useSelector(state => state.auth.forgotStatus)
    const email_Check = useSelector(state => state.auth.emailCheck)

    const handleForgot = () => {
        if (email == " " || !email) {
            toast.error("Please enter a valid email address")
            return false;
        }
        dispatch(varifyEmail({'email':email}))
    }

    useEffect(()=>{
        if(email_Check){
            if(email_Check.status == false){
                toast.error('Email not verify')
            }
             else{
                localStorage.setItem('email', email)
                dispatch(forgotPassword({'email':email}))
                dispatch(showLoaderAction(true))
            }
        }
    },[email_Check])

    useEffect (()=>{
        if (forgotStatus) {
            dispatch(showLoaderAction(false))
            toast.success('Email sent success')
            
            history.push('/ressetpassword')
            dispatch(removeForgotPassword(null))
            dispatch(removeEmail(false))
        }
        
    },[forgotStatus])

    

    return (
        <>
        <Loader/>
        <div className="background" style={{ paddingTop: "20vh" }}>
            <div className="col-4 offset-4 bg-white p-5 border rounded" style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                <div>
                    <h2 className={"font-weight-bold text-center"}>Forgot Password</h2>
                    <p style={{ marginBottom: '20px', cursor: 'pointer' }} className={'text-center'} >Forgot Password ?</p>
                    <div className="form-group">
                        <label>Registered Email Address</label>
                        <input  className={"form-control mt-2 mb-2"} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@xyz.com" />
                    </div>
                    <Button onClick={() => handleForgot()} className="btn btn-block" style={{ width: '100%', background: 'linear-gradient(to right, #da4453, #89216b)', color: '#fff' }}>Send Reset Password Instructions</Button>
                    <p className={'text-center mt-3'} onClick={() => history.push('/')} >Back to Login</p>

                </div>
            </div>
        </div>
        </>
    )
}
export default Forgot
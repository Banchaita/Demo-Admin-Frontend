import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Button } from 'antd';
import toast from "../../components/common/toast"
import { ressetPassword, varifyEmail, verifyOtp } from '../../actions/auth'

import './login.css'




const Ressetpassword = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfime_password, setComfimePassword] = useState('')
    const [otp, setOtp] = useState('')

    const ressetpasswordStatus = useSelector(state => state.auth.ressetpasswordStatus)

    const handleResset = () => {
        if (email == " " || !email) {
            toast.error("Please enter a valid email address")
            return false;
        }
        dispatch(varifyEmail({ 'email': email }))

        if (otp == " " || !otp) {
            toast.error("Please enter a valid email address")
            return false;
        }
        dispatch(verifyOtp({ email: email, otp: otp }))

        if (password == " " || !password) {
            toast.error("Please enter password")
            return false;
        }
        if (password !== comfime_password) {
            toast.error("Password & Confirm Password Should Be Same")
            return false
        }
        let data = {
            email: localStorage.getItem('email', email),
            password: password,
            otp: otp
        }
        dispatch(ressetPassword(data))
        toast.success("New password create successful")
        history.push('/')
    }

 



    return (
        <>
            <div className="background" style={{ paddingTop: "20vh" }}>
                <div className="col-4 offset-4 bg-white p-5 border rounded" style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
                    <div>
                        <h2 className={"font-weight-bold text-center"}>Reeset Password</h2>
                        <h6 className='text-center'>Please enter the one time password <br /> to verify your account</h6>
                        <div className='text-center mb-5' > <span>A code has been sent to</span> <small>*******was4@gmail.com</small> </div>
                        <div className="form-group">
                            <label>Registered Email Address</label>
                            <input className={"form-control mt-2 mb-2"} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@xyz.com" />

                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input className={"form-control mt-2 mb-2"} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter New Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className={"form-control mt-2 mb-2"} onChange={(e) => setComfimePassword(e.target.value)} type="password" placeholder="Enter Confirm Password" />
                        </div>
                        <div className="form-group">
                            <label>Enter vaild OTP</label>
                            <input className={"form-control mt-2 mb-2"} onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter Vaild OTP " />
                        </div>
                        <Button onClick={() => handleResset()} className="btn btn-block" style={{ width: '100%', background: '#043565', color: '#fff' }}>Reset Password </Button>
                        <p className={'text-center mt-3'} onClick={() => history.push('/forgot')} >Back to forgotpassword</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Ressetpassword

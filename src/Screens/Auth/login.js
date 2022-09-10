import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import toast from "../../components/common/toast"
import { loginAction, changeLoginFailedStatus } from '../../actions/auth'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input} from 'antd';
import './login.css'

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const token = useSelector(state => state.auth.token)
  const is_authenticated = useSelector(state => state.auth.is_authenticated)
  const loginMessage = useSelector(state => state.auth.loginMessage)

  const handleLogin = async () => {
    if (email == '' || password == '') {
      toast.error("Please enter a valid email address or password to proceed")
      return false;
    }
    dispatch(loginAction({ email, password }))
  }
  useEffect(() => {
    if (is_authenticated) {
      toast.success("Login Success")
      history.push('/dashboard')
    }
    if (loginMessage) {
      console.log(loginMessage)
      toast.error(loginMessage)
      let data = { data: { message: null } }
      dispatch(changeLoginFailedStatus(data))
    }
  }, [is_authenticated, loginMessage])

    useEffect(() => {
      if(token){
          history.push('/dashboard')
      }
  },[token])
  





  return (
    <>

      <div className="background">
        <section class="gradient-form" >
          <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center ">
              <div class="col-xl-10">
                <div class="card rounded-3 text-black" style={{marginTop:'15vh'}}>
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="card-body p-md-5 mx-md-4">

                        <div class="text-center">
                          <img
                            src={logo}
                            alt="logo"
                            style={{ height: '100px', }}
                            className="img-fluid mt-3 mb-3"
                          />
                          <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <form>
                          <p>Please login to your account</p>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example11">Username</label>
                            <input type="email" id="form2Example11" class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Phone number or email address" />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example22">Password</label>
                            <Input.Password
                              placeholder="input password"
                              onChange={(e) => setPassword(e.target.value)}
                              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                          </div>

                          <div class="text-center pt-1 mb-5 pb-1">
                            <label style={{ marginTop: '10px', marginBottom: '10px' }} class="btnForgetPwd" onClick={() => history.push('/forgot')}>Forgot your password?</label><br />

                            <button onClick={() => handleLogin()} class="btnSubmit"  style={{color: '#fff', borderRadius: '4rem' ,background:'red'}} type="button">Log in</button>
                          </div>


                        </form>

                      </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4 text-center text-white">We are more than just a company</h4>
                        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



    </>
  )
}

export default Login

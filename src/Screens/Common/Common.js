import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Sidebar, MyHeader, MyFooter } from "../../components";
import { Layout, Divider, Button } from 'antd';
import HtmlEditor from "../../components/common/HtmlEditor"

const Common = () => {

    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/')
            return false
        }
    }, [])

    return (
        <>
            <Layout>
                <Sidebar />
                <Layout className="site-layout">
                    <MyHeader />
                  
                    <div className="container-fluid mt-3 p-5">
                    <div className="row">
                        <div class="col-12 form-group">
                            <label style={{ fontSize: '1.2rem', fontWeight: "bold" }}>About Us</label>
                            <HtmlEditor/>
                        </div>
                    </div>
                    <Divider />
                    <div className="row">
                        <div class="col-6 form-group">
                            <label style={{ fontSize: '1.2rem', fontWeight: "bold" }}>Privacy Policy</label>
                            <HtmlEditor/>
                        </div>
                        <div class="col-6 form-group">
                            <label style={{ fontSize: '1.2rem', fontWeight: "bold" }}>Terms & Conditions</label>
                            <HtmlEditor/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-right col-12">
                            <Button className='btn btn-sm px-5' style={{ background: "linear-gradient(to left, #da4453, #89216b)", color: "#fff", borderRadius: "50px" }} >Save Content</Button>
                        </div>
                    </div>
                </div>
                <MyFooter />
                </Layout>
            </Layout>
        </>
    )
}

export default Common
import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Sidebar, MyHeader, MyFooter } from "../../components";
import { Layout, Row, Divider, Col,Input } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined,TeamOutlined } from '@ant-design/icons';
import { fileUrl } from '../../constants/const';
import { getAdminDetails } from '../../actions/admin' 


const { Content } = Layout;


const EditAdmin = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    const [admin_pic, setAdmin_pic] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')

    const admin_detalis = useSelector(state => state.admin.admin_detalis)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/')
            return false
        }
        dispatch(getAdminDetails()) 
    }, [])

    useEffect(() => {
        if (admin_detalis) {
            setAdmin_pic(admin_detalis.admin_pic)
            setName(admin_detalis.name)
            setEmail(admin_detalis.email)
            setPhone(admin_detalis.phone)
            setType(admin_detalis.type)
        }
    })


    return (
        <>
          <Layout>
                <Sidebar />
                <Layout className="site-layout">
                    <MyHeader />
                    <Content style={{ overflow: 'hidden', }}>
                        <Divider style={{ margin: 0, padding: '10px', }} ></Divider>

                        <Row>
                            <Col span={6} className="ml-5">
                                <div className="white-box analytics-info dashboard_cards">
                                    <h3 className="box-title" style={{ color: 'white' }}> <a href="#admin" style={{color:'#fff'}}> {name}</a> </h3>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{ background: '#000', padding: '0', margin: '29px' }} />
                        <Row
                            style={{ margin: '2rem' }}
                        >
                            <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                                <Row gutter={[16, 16]} style={{ margin: '5%' }} justify="space-around" className="header bg-gradient-primary pb-8 pt-5">

                                    <Col span={12}>

                                        <label>Name</label>
                                        <Input size="default size" value={name} placeholder="Name"  prefix={<UserOutlined />} />
                                    </Col>
                                    <Col span={12}>

                                        <label>Email</label>
                                        <Input size="default size" value={email} placeholder="Email"  prefix={<MailOutlined />} />
                                    </Col>
                                    <Col span={12}>

                                        <label>Phone</label>
                                        <Input size="default size" value={phone} placeholder="Phone"  prefix={<PhoneOutlined />} />
                                    </Col>
                                    <Col span={12}>

                                        <label>Type</label>
                                        <Input size="default size" value={type} placeholder="Type"  prefix={<TeamOutlined />} />
                                    </Col>

                                    <Col span={10}>
                                        <img src={`${fileUrl}${admin_pic}`} style={{ width: '50%', marginLeft: '25%', marginBottom: '1rem' }}></img>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                    <MyFooter />
                </Layout>
            </Layout>  
        </>
    )
}

export default EditAdmin

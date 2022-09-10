import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, MyHeader, MyFooter } from "../../components";
import { Layout, Row, Divider, Col, Input } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { fileUrl } from '../../constants/const';
import AddAdmin from '../../modal/AddAdmin';
import { getAdminitertorData } from '../../actions/auth'


const { Content } = Layout;

const Adminitorter = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profile_pic, setProfile_pic] = useState('')

    const adminitertor_data = useSelector(state => state.auth.adminitertor_data)
    


    useEffect(() => {
        dispatch(getAdminitertorData())
    }, [])

    useEffect(() => {
        if (adminitertor_data) {
            setProfile_pic(adminitertor_data.profile_pic)
            setName(adminitertor_data.name)
            setEmail(adminitertor_data.email)
        }
    })

    return (
        <>
            <Layout>
                <Sidebar />
                <Layout className="site-layout">
                    <AddAdmin />
                    <MyHeader />
                    <Content style={{ overflow: 'hidden', }}>
                        <Divider style={{ margin: 0, padding: '10px', }} ></Divider>

                        <Row>
                            <Col span={6} className="ml-5">
                                <div className="white-box analytics-info dashboard_cards">
                                    <h3 className="box-title" style={{ color: 'white' }}>Total Adminitorter </h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li>
                                            <div id="sparklinedash">
                                                <img src="plugins/images/bar-chart.png" style={{ width: '50px', marginLeft: '15px' }} />
                                            </div>
                                        </li>
                                        <li className="ml-auto"><span class="counter text-white font-weight-bold">0</span></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{ background: '#000', padding: '0', margin: '29px' }} />
                        <Row
                            style={{ margin: '2rem' }}
                        >
                            <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                                <Row gutter={[16, 16]} style={{ margin: '1rem' }} justify="space-around" className="header bg-gradient-primary pb-8 pt-5">

                                    <Col span={12}>

                                        <label>Name</label>
                                        <Input size="default size" placeholder="Name" value={name} prefix={<UserOutlined />} />
                                    </Col>
                                    <Col span={12}>

                                        <label>Email</label>
                                        <Input size="default size" placeholder="Email" value={email} prefix={<MailOutlined />} />
                                    </Col>
                                    <Col span={10}>
                                        <img src={`${fileUrl}${profile_pic}`} style={{ width: '50%', marginLeft: '25%', marginBottom:'1rem' }}></img>
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

export default Adminitorter

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout,Row, Divider, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar, MyHeader, MyFooter } from "../../components";
import{getDashboardounntData} from '../../actions/dashboard'

const { Content } = Layout;

const Dashboard = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const dashboard_count = useSelector(state => state.dashboard.dashboard_count)

    useEffect(() => {
        dispatch(getDashboardounntData())
    },[])

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/')
            return false
        }
    }, [])


    return (
        <>
            <Layout>
                <Sidebar/>
                <Layout className="site-layout">
                    <MyHeader />
                    <Content style={{ overflow: 'hidden' }}>
                        <Divider style={{ margin: 0, padding: '10px', }} ></Divider>
                        <Row gutter={[16, 16]} style={{ margin: 0 }} justify="space-around" className="header bg-gradient-primary pb-8 pt-5">
                            <Col span={6}>
                                <div className="white-box analytics-info dashboard_cards" >
                                    <h3 class="box-title" style={{ color: 'white' }}>Total Admin</h3>
                                    <ul class="list-inline two-part d-flex align-items-center mb-0">
                                        <li>
                                            <div id="sparklinedash">
                                                <img src="plugins/images/bar-chart.png" style={{ width: '50px', marginLeft: '15px' }} />
                                            </div>
                                        </li>
                                        {/* <li className="ml-auto"><span className="counter text-white font-weight-bold">{dashboard_count.data.total_admin}</span></li> */}
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="white-box analytics-info dashboard_cards" >
                                    <h3 className="box-title" style={{ color: 'white' }}>Total User</h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li>
                                            <div id="sparklinedash">
                                                <img src="plugins/images/bar-chart.png" style={{ width: '50px', marginLeft: '15px' }} />
                                            </div>
                                        </li>
                                        <li className="ml-auto"><span class="counter text-white font-weight-bold">0</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="white-box analytics-info dashboard_cards" >
                                    <h3 className="box-title" style={{ color: 'white' }}>Total Administrator</h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li>
                                            <div id="sparklinedash">
                                                <img src="plugins/images/bar-chart.png" style={{ width: '50px', marginLeft: '15px' }} />
                                            </div>
                                        </li>
                                        {/* <li className="ml-auto"><span className="counter text-white font-weight-bold">{dashboard_count.data.total_adminitartion}</span></li> */}
                                    </ul>
                                </div>
                            </Col>    
                        </Row>
                    </Content>
                    <MyFooter />
                </Layout>
            </Layout>

        </>
    )
}

export default Dashboard

import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink} from 'react-router-dom';
import { Sidebar, MyHeader, MyFooter } from "../../components";
import { Layout, Row, Divider, Col, Table, Button, Space } from 'antd';
import { PlusOutlined, EditOutlined, EyeOutlined, DeleteOutlined, KeyOutlined } from '@ant-design/icons';
import { fileUrl } from '../../constants/const';
import { showAddAdminModalAction, showEidtModalAction, showDeleteModalAction, showPervilegeModalAction, showPervilegelistModalAction } from "../../actions/modals"
import AddAdmin from '../../modal/AddAdmin';
import { getAdmintData, getAdminDetails, setActiveAdminAction, setAdminStatusAction } from '../../actions/admin'
import { getDashboardounntData } from '../../actions/dashboard'
import EditModel from '../../modal/editModel';
import DeleteModal from '../../modal/deleteModal';
import Viewprevilege from '../../modal/Viewprevilege';
import ListModal from '../../modal/ListModal';

const { Content } = Layout;
const { Column } = Table;


const Admin = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const adminData = useSelector(state => state.admin.admin_data)
    const dashboard_count = useSelector(state => state.dashboard.dashboard_count)
    const admin_detalis = useSelector(state => state.admin.admin_detalis)
    // console.log('adminData============>>>>>',adminData)
    // console.log('admin_detalis============>>>>>', admin_detalis)


    const AdmimdataList = () => {
        dispatch(getAdmintData())
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/')
            return false
        }
    }, [admin_detalis])

    useEffect(() => {
        AdmimdataList()
        if (dashboard_count) {
            dispatch(getDashboardounntData())
        }
    }, [])

    const EditAdmin = (admin_id) => {
        dispatch(setActiveAdminAction(admin_id))
        dispatch(showEidtModalAction(true))
    }

    const changeAdminStatus = (admin_id, status) => {
        let data = {
            status: status,
            admin_id: admin_id
        }
        dispatch(setAdminStatusAction(data))
    }

    // useEffect(() => {
    //     if(adminData){
    //         dispatch(getAdmintData())
    //     }
    // },[adminData])

    const DeleteAdmin = (admin_id) => {
        dispatch(setActiveAdminAction(admin_id))
        dispatch(showDeleteModalAction(true))
    }

    const Addperviliege = (admin_id) => {
        alert(admin_id)
        dispatch(setActiveAdminAction(admin_id))
        dispatch(getAdminDetails(admin_id))
        dispatch(showPervilegeModalAction(true))
    }

    const Listperviliege = (admin_id) => {
        dispatch(setActiveAdminAction(admin_id))
        dispatch(getAdminDetails(admin_id))
        dispatch(showPervilegelistModalAction(true))
    }

    return (
        <>
            <Layout>
                <Sidebar />
                <Layout className="site-layout">
                    <AddAdmin />
                    <Viewprevilege />
                    <EditModel />
                    <DeleteModal />
                    <ListModal />
                    <MyHeader />
                    <Content style={{ overflow: 'hidden', }}>
                        <Divider style={{ margin: 0, padding: '10px', }} ></Divider>

                        <Row>
                            <Col span={6} className="ml-5">
                                <div className="white-box analytics-info dashboard_cards">
                                    <h3 className="box-title" style={{ color: 'white' }}>Total Admin</h3>
                                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                                        <li>
                                            <div id="sparklinedash">
                                                <img src="plugins/images/bar-chart.png" style={{ width: '50px', marginLeft: '15px' }} />
                                            </div>
                                        </li>
                                        {/* <li className="ml-auto"><span class="counter text-white font-weight-bold">{dashboard_count.data.total_admin}</span></li> */}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{ background: '#000', padding: '0', margin: '29px' }} />
                        <Row
                            style={{ margin: '2rem' }}
                        >
                            <Col span={24} style={{ background: 'linear-gradient(to right, #abbaab, #ffffff)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                                <Button onClick={() => dispatch(showAddAdminModalAction(true))} class="btn btn-md m-4 " style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)', border: 'none', borderRadius: '25px', height: '3rem', width: '230px', color: 'white', float: 'right', margin: '2.2rem' }}><PlusOutlined /> &nbsp;Add New Admin</Button>
                                <Table
                                    dataSource={adminData}
                                    pagination={false}
                                    className="mt-2"
                                    style={{ borderRadius: '4px', padding: '1rem', marginLeft: '0', marginTop: '2rem' }}
                                >
                                    <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                    <Column
                                        title={"Profile Image"}
                                        className="text-center"
                                        render={(record) => <img
                                            style={{ maxHeight: 50 }}
                                            className="img-fluid img-responsive"
                                            src={`${fileUrl}${record.profile_pic}`}
                                        />
                                        }
                                        key={"name"}
                                    />
                                    <Column className="text-center" title="Admin Name" dataIndex="name" key="name" />
                                    <Column className="text-center" title="Admin Email-id" dataIndex="email" key="email" />
                                    <Column className="text-center" title="Admin Phone Number" dataIndex="phone" key="phone" />
                                    {/* <Column className="text-center" title="Admin privileged" dataIndex="privileged" key="type" /> */}
                                    <Column
                                        title={"Status"}
                                        key={"status"}

                                        render={(record) => {
                                            return <select onChange={(e) => changeAdminStatus(record._id, e.target.value)} className="form-control"
                                                style={{ background: 'linear-gradient(to right, #da4453, #89216b)', color: '#ddd', border: 'none', outline: 'none', textAlign: 'center', borderRadius: '50px' }} >
                                                {record.status == 1 &&
                                                    <>
                                                        <option value={1} selected="selected" >Active</option>
                                                        <option value={0}>Disabled</option>
                                                    </>
                                                }
                                                {record.status == 0 &&
                                                    <>
                                                        <option value={0} selected="selected">Disabled</option>
                                                        <option value={1}>Active</option>
                                                    </>
                                                }
                                            </select>
                                        }}
                                    />
                                    <Column
                                        title="Action"
                                        className="text-center"
                                        key="action"
                                        render={(text, record) => (
                                            <Space size="middle">
                                                <NavLink to={`/adminprofile/${record._id}`}>
                                                    <Button onClick={() => dispatch(getAdminDetails(`${record._id}`))} class="btn btn-sm" style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)', color: '#fff', border: 'none', outline: 'none,', borderRadius: '50px' }}> <EyeOutlined /> View Profile</Button>
                                                </NavLink>
                                                <Button onClick={() => Addperviliege(`${record._id}`)} class="btn btn-sm" style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)', color: '#fff', border: 'none', outline: 'none,', borderRadius: '50px' }}> <KeyOutlined />Access to  Privilliged </Button>
                                                <Button onClick={() => Listperviliege(`${record._id}`)} class="btn btn-sm" style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)', color: '#fff', border: 'none', outline: 'none,', borderRadius: '50px' }}> <KeyOutlined /> </Button>
                                                <Button onClick={() => EditAdmin(`${record._id}`)} class="btn btn-sm" style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)', color: '#fff', border: 'none', outline: 'none,', borderRadius: '50px' }}>  <EditOutlined /></Button>
                                                <Button onClick={() => DeleteAdmin(record._id)} class="btn btn-sm" style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)', color: '#fff', border: 'none', outline: 'none,', borderRadius: '50px' }}>  <DeleteOutlined /></Button>
                                            </Space>
                                        )}
                                    />

                                </Table>

                            </Col>
                        </Row>
                    </Content>
                    <MyFooter />
                </Layout>
            </Layout>
        </>
    )
}

export default Admin
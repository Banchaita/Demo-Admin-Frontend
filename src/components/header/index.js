import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Layout, Menu, Avatar, Dropdown, Divider} from 'antd';
import { UserOutlined, CaretDownOutlined, LogoutOutlined, LockOutlined } from "@ant-design/icons"
import { useHistory,useLocation} from 'react-router-dom'
import { showViewProfileModalAction,showChangePasswordModalAction } from "../../actions/modals"
import { logout } from "../../actions/auth"
import Changepassword from '../../modal/Changepassword';
import ViweProfile from '../../modal/ViewProfile';
import toast from "../../components/common/toast"

const { Header } = Layout;

const MyHeader = () => {
	const history = useHistory();
	const dispatch = useDispatch()
	const location = useLocation();
	const adminitertor_data = useSelector(state => state.auth.adminitertor_data)

	const handleLogout = () => {
		localStorage.removeItem('token')
		dispatch(logout())
		toast.success('Logout success')
		history.push('/')
	}

	// useEffect(() => {
	// 	if(adminitertor_data?.type != "Super"){
	// 		let pathname = location.pathname
	// 		let menuName = ""
	// 		switch(pathname){
	// 			case "/dashboard":
	// 				menuName = "Dashboard";
	// 				break;
	// 			case "/common":
	// 				menuName = "Common";
	// 				break;
	// 			case "/conversations":
	// 				menuName = "Conversations";
	// 				break;
	// 			case "/admin":
	// 				menuName = "Admin";
	// 				break;
	// 			default :
	// 				menuName = null;
	// 		}
	// 		if(menuName){
	// 			if(adminitertor_data?.privileged?.filter((pr) => pr.name == pathname).length == 0) {
	// 				history.push('/common')
	// 			}
	// 		}
	// 	}	
	// }, [{...location}])

	return (
		<>
		
		<Changepassword/>
		<ViweProfile/>
			<Header className="p-0 px-2" style={{
				padding: 0,
				paddingRight: 20,
				background: 'linear-gradient(to left, #da4453, #89216b)',
				// background: '#CCE5F9',
        		color:'#fff',
				boxShadow: '2px 2px 10px #aaa',
			}}>
				<Row justify="end">
					<Col className="text-left" flex="auto">
						<label className='ml-5 mt-1' style={{ color: '#ddd', fontWeight: '500', marginLeft:'10px' }}>Admin Console</label>
					</Col>
					<Col className="text-right text-light font-weight-bold">
						{adminitertor_data && adminitertor_data.name} &nbsp;
						<Dropdown overlay={
							<Menu className="mt-4">
								<p className="p-0 p-2 text-center">{adminitertor_data && adminitertor_data.email}</p>
								<Divider className="m-0 p-0" />
								<Menu.Item >
									<label onClick={() => dispatch(showViewProfileModalAction(true))}><UserOutlined />View Profile</label>
								</Menu.Item>
								<Menu.Item >
									<label onClick={() => dispatch(showChangePasswordModalAction(true))}><LockOutlined /> Change Password</label>
								</Menu.Item>
								<Menu.Item>
									<label  onClick={handleLogout}><LogoutOutlined /> Logout</label>
								</Menu.Item>
							</Menu>
						} trigger={['click']}>
							<a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
								<Avatar style={{ lineHeight: '27px' }} icon={<UserOutlined />} />
								<label className="ml-2"> <CaretDownOutlined /></label>
							</a>
						</Dropdown>
					</Col>
				</Row>
			</Header>
		</>
	);
}
export default MyHeader
import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd'
import { useSelector, useDispatch } from "react-redux"
import NavItems from "../../constants/navitems";
import { useHistory } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import { logout } from '../../actions/auth';

const { Sider } = Layout;

const Sidebar = () => {
  const history = useHistory()
  const location = useHistory()
  const dispatch = useDispatch()
  const [page, setPage] = useState('aboutus')
  const adminitertor_data = useSelector((state) => state.auth.adminitertor_data)
  
  useEffect(() => {
    activeNavigation(location.location.pathname)
  }, [page])


  const activeNavigation = (path) => {
    switch (path) {
      case "/dashboard":
        setPage('Dashboard')
        break;
      case "/admin":
        setPage('Admin')
        break;
      case "/common":
        setPage('Common')
        break;
      case "/conversations":
        setPage('Conversations')
        break;
      default:
        dispatch(logout)
    }
  }

  return (
    <Sider
    style={{
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      background: 'linear-gradient(to right, #da4453, #89216b)',
      height: '150vh',
      left: 0,
      zIndex: 999,
    }}
    breakpoint="md"
    width="250"
    collapsedWidth="75"
    theme='light'>
     <div className="logo text-center mt-2" >
        <div class="navbar-header " data-logobg="skin6">
          <a class="navbar-brand" href="#">
              <img src={logo} alt="homepage" style={{ width: '50%', }} />
          </a>
        </div>
      </div>
      <Menu
        className="mt-3"
        style={{ background: "linear-gradient(to right, #da4453, #89216b)", color:'#fff' }}
        selectedKeys={[page]}
        selectable={true}
        mode="inline">
        {NavItems.map((menuItem) =>
          <>
            {adminitertor_data?.type !== "Super" ?
              adminitertor_data?.privileged?.filter((acc) => acc.name == menuItem.name).length > 0 ?
                <Menu.Item
                  key={menuItem.name}
                  icon={menuItem.icon}
                  style={{
                    listStyleType: 'none',
                    padding: '1rem 2rem',
                  }}
                  onClick={() => {
                    setPage(menuItem.link)
                    history.push(menuItem.link)
                  }}>
                  {menuItem.name}
                </Menu.Item>
                : null
              :
              <Menu.Item
                key={menuItem.name}
                icon={menuItem.icon}
                style={{
                  listStyleType: 'none',
                  padding: '1rem 2rem',
                }}
                onClick={() => {
                  setPage(menuItem.link)
                  history.push(menuItem.link)
                }}>
                {menuItem.name}
              </Menu.Item>
            }
          </>
        )}
      </Menu>
    </Sider>
  )
}
  
export default Sidebar;
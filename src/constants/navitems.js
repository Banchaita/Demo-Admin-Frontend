import React from 'react'
// import { useDispatch, useSelector } from "react-redux"

import {DashboardOutlined, UserOutlined,SwitcherFilled,CommentOutlined,AreaChartOutlined} from '@ant-design/icons'


// const adminitertor_data = useSelector(state => state.auth.adminitertor_data)
// console.log('adminitertor_data---------------------->',adminitertor_data)

const NavItems = [
    {
        name: `Dashboard`,
        link: '/dashboard',
        icon: <DashboardOutlined style={{ fontSize: '16px', color: '#000' }}/>,
        badge: 1,
        subMenu: [],
    }, 
    {
        name: `Admin`,
        link: '/admin',
        icon:<UserOutlined  style={{ fontSize: '16px', color: '#000' }}/>,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Common`,
        link: '/common',
        icon: <SwitcherFilled style={{ fontSize: '16px', color: '#000' }}/>,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Conversations`,
        link: '/conversations',
        icon: <CommentOutlined style={{ fontSize: '16px', color: '#000' }}/>,
        badge: 1,
        subMenu: [],
    },
    
    
]

export default NavItems;
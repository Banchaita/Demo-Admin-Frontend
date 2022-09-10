import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const MyFooter =()=>{
  return (
    <Footer className="p-0 pt-3 pb-1" style={{ background: 'linear-gradient(to left, #da4453, #89216b)' }}>
      <p className="text-center" style={{textAlign:'center',fontWeight:'500',color:'#ddd'}}>DemoAdmin Copyright © 2021</p>
    </Footer>
  );
}
export default MyFooter;

import React, { useState } from 'react'
import { Modal, Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { showAdmingroupModalAction } from '../actions/modals'
import db from '../Screens/Conversations/firebase.config';
import toast from "../components/common/toast"

const GroupAdmin = () => {

    const dispatch = useDispatch()
    const [name, Setname] = useState("");
    let showaAdmingroupModal = useSelector((state) => state.modals.showaAdmingroupModal)


    const sub = (e) => {
        e.preventDefault();
        db.collection("Users").add({
           Name:name
        })
        .then(() => {
            toast.success('New Chat Users Add Successfully')
            console.log("Users Add successfully!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }


    return (
        <Modal
            width={700}
            centered
            title={'Add Admin Name'}
            visible={showaAdmingroupModal}
            onCancel={() => dispatch(showAdmingroupModalAction(false))}
            footer={null}
        >

            <div>
                <form onSubmit={(event) => { sub(event) }}>
                    <input type="text" placeholder="your name"
                        onChange={(e) => { Setname(e.target.value) }} style={{width:'100%',border:'none',borderBottom:'1px solid #000',outline:'none'}} />
                    <br /><br />
                    <button type="submit" className='btn btn-block' style={{background:'linear-gradient(to right, #bc4e9c, #f80759)',color:'#fff'}}>Submit</button>
                </form>
            </div>

        </Modal>
    )
}

export default GroupAdmin

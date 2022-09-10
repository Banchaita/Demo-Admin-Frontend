import React from 'react'
import { Modal, Row, Col } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { showPervilegelistModalAction } from '../actions/modals'

const ListModal = () => {
    const dispatch = useDispatch()
    let showaPervileglisteModal = useSelector((state) => state.modals.showaPervileglisteModal)
    const admin_detalis = useSelector(state => state.admin.admin_detalis)

    return (
        <Modal
            width={700}
            centered
            title={'List  of Pervilege'}
            visible={showaPervileglisteModal}
            onOk={() => dispatch(showPervilegelistModalAction(false))}
            onCancel={() => dispatch(showPervilegelistModalAction(false))}
            footer={null}>
            <Row>
                <Col span={24}>
                    <p className="font-weight-bold">List of Pervileged</p>
                    <ul className="pl-0 list-style-none">
                        {admin_detalis?.privileged?.map((prev) => (
                            <li className="pb-2" style={{ listStyle: 'none' }}>
                                <label><input checked={true} type="checkbox" readOnly /> <span>{prev.name}</span></label>   
                            </li>
                        ))}
                        
                    </ul>
                </Col>
            </Row>
        </Modal>
    )
}
export default ListModal
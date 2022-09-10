import React from 'react'
import { Modal, Row, Col} from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { showPervilegeModalAction } from '../actions/modals'
import { UpdateingPreviliege } from '../actions/admin'
import NavItems from "../constants/navitems";
import toast from "../components/common/toast"







const Viewprevilege = () => {
    const dispatch = useDispatch()

    let showaPervilegeModal = useSelector((state) => state.modals.showaPervilegeModal)
    const admin_detalis = useSelector(state => state.admin.admin_detalis)

    const managePriviledges = (acc) => {
        let adminData = admin_detalis
        let accIndex = adminData?.privileged?.findIndex((prev) => prev.name == acc)
        if(accIndex < 0){
            adminData?.privileged?.push({
                name: acc
            })
        } else {
            adminData?.privileged?.splice(accIndex, 1)
        }
        toast.success('New privileged add successful')
        dispatch(UpdateingPreviliege(adminData))
    }

    return (


        <>
            <Modal
                width={700}
                centered
                title={'Adding Pervilege'}
                visible={showaPervilegeModal}
                onOk={() => dispatch(showPervilegeModalAction(false))}
                onCancel={() => dispatch(showPervilegeModalAction(false))}
            >

                <Row>
                    <Col span={24}>
                        <p className="font-weight-bold">Select the Access from the List</p>
                        <ul className="pl-0 list-style-none">
                            {NavItems?.map((item) => (
                                <>
                                <li className="pb-2" style={{ listStyle: 'none' }}>
                                    <label>
                                        <input 
                                            value={item.name}
                                            onChange={(e) => managePriviledges(e.target.value)}
                                            type='checkbox'
                                            checked={admin_detalis?.privileged?.filter((acc) => acc.name == item.name).length > 0 ? true : false}

                                        />
                                        <span className="ml-2">{item.name}</span>

                                    </label>
                                </li>
                                </>

                            ))}
                        </ul>
                    </Col>
                </Row>

            </Modal>
        </>
    )
}

export default Viewprevilege

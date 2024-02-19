import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
function MailsendUsers() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state?.alluser?.allusers);

    const [selectusers, setSelectusers] = useState([])

    useEffect(() => {
        dispatch(AlluserActionData());
    }, [])

    const handleChange = (id) => {
        if (selectusers?.includes(id)) {
            return setSelectusers(selectusers?.filter((item, index) => item !== id))
        }
        setSelectusers([...selectusers, id])
    }


    const selectAlluses = () => {

        const pushdata = [];
        users?.map((item, index) => {
            pushdata.push(item?.email);
        })
        setSelectusers(pushdata);

    }


    const clearAll = () => {
        setSelectusers([]);

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='w-100 mx-auto container'>
            <div className='d-flex justify-between align-items-center mb-5'>
                <div>
                    <Button onClick={handleShow}>Send Mail</Button>
                </div>
                <div className='mb-4 d-flex gap-4'>
                    <Button onClick={selectAlluses}>Select All Users {selectusers?.length}</Button>
                    <Button onClick={clearAll}>Clear All {selectusers?.length}</Button>

                </div>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((item, index) => {
                        return (
                            <tr key={index} className='mb-5 mt-3'>
                                <td className='mt-4 mb-4'>
                                    <div className='d-flex gap-2' style={{ cursor: "pointer" }} onClick={() => handleChange(item?.email)}>
                                        <input type="checkbox" value={item?.email}
                                            checked={selectusers?.includes(item?.email)}
                                        />
                                        <label>{item?.userName}</label>
                                    </div>
                                </td>

                                <td>{item?.email}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MailsendUsers
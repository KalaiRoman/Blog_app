import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { ToastSuccess } from './../../middleware/Toast_action';
import Form from 'react-bootstrap/Form';
import { mailsendservice } from '../../services/auth_service/auth_service';
function MailsendUsers() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state?.alluser?.allusers);

    const [selectusers, setSelectusers] = useState([])


    const [userss, setUsers] = useState({
        subjectTitle: "",
        description: "",
        mailimage: "",
        senderName: ""
    });

    const {
        subjectTitle,
        description,
        mailimage,
        senderName } = userss;


    const handleChanges = (e) => {
        setUsers({ ...userss, [e.target.name]: e.target.value })
    }

    const listusersdata = [
        {
            id: 1, name: "subjectTitle", values: subjectTitle, label: "Subject",

        }, {
            id: 2, name: "description", values: description, label: "Description",

        },
        {
            id: 3, name: "mailimage", values: mailimage, label: "Mail Image",
        },
        {
            id: 4, name: "senderName", values: senderName, label: "Sender Name"

        }
    ]

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
            pushdata.push(item?._id);
        })
        setSelectusers(pushdata);

    }


    const clearAll = () => {
        setSelectusers([]);

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (selectusers?.length > 0) {
            setShow(true)
        }
        else {
            ToastSuccess("Please Select Users")
        }
    };


    const SendMailusers = async () => {
        try {
            const data = {
                mailusers: selectusers,
                subjectTitle,
                description,
                mailimage,
                senderName
            }
            const response = await mailsendservice(data);
            if (response) {
                ToastSuccess("All user Send Mail Successfully");
                handleClose();
                clearAll();
            }
        } catch (error) {

        }
    }


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
                                    <div className='d-flex gap-2' style={{ cursor: "pointer" }} onClick={() => handleChange(item?._id)}>
                                        <input type="checkbox" value={item?._id}
                                            checked={selectusers?.includes(item?._id)}
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
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Mail Send User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {listusersdata?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Form.Group className="mb-3" controlId={item?.label}>
                                        <Form.Label>{item?.label}</Form.Label>
                                        <Form.Control type={"text"} placeholder={`Enter ${item?.label}`}
                                            value={item?.values}
                                            onChange={handleChanges}
                                            name={item?.name}
                                        />
                                        <Form.Text className="text-muted">

                                        </Form.Text>
                                    </Form.Group>
                                </div>
                            )
                        })}
                    </div>
                    <button className='edit-btn' onClick={SendMailusers}>Send Mail</button>
                    <div>

                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default MailsendUsers
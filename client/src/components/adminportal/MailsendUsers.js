import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import { Button } from 'react-bootstrap';
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
    return (
        <div className='w-100 mx-auto container'>
            <div>
                <div>
                    Select Users {selectusers?.length}
                </div>
            </div>
            <div>
                <Button onClick={selectAlluses}>Select All Users</Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>id</th>
                        <th>user Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div className='d-flex gap-2' style={{ cursor: "pointer" }} onClick={() => handleChange(item?.email)}>
                                        <input type="checkbox" value={item?.email}
                                            checked={selectusers?.includes(item?.email)}
                                        />
                                        <label>{item?.userName}</label>
                                    </div>
                                </td>

                                <td>{index + 1}</td>
                                <td>{item?.userName}</td>
                                <td>{item?.email}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
        </div>
    )
}

export default MailsendUsers
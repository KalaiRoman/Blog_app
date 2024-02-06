import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Workexperience({ handleShow6, show6, handleClose6, worklistForms, handleChangeWorker, SubmitWorkerData, AddNewWorkExperience, alldatas, setworkerDetails }) {


    const filterData = (id) => {
        const filtersData = alldatas?.filter((item) => item?.id !== id);
        setworkerDetails(filtersData);
    }


    console.log(alldatas, 'alldatas')
    return (
        <div>
            <button className='edit-btn' onClick={handleShow6}>WorkExperience</button>
            <Modal
                show={show6}
                onHide={handleClose6}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row gap-1 d-flex'>
                        {worklistForms?.map((item, index) => {
                            return (
                                <div key={index} className='col-lg-6 d-flex row '>
                                    <Form.Group className="mb-3" controlId={`formBasic${item?.formname}`}>
                                        <Form.Label>{item?.formname}</Form.Label>
                                        <Form.Control type={item?.type} placeholder={`Enter ${item?.formname}`}
                                            onChange={handleChangeWorker}
                                            value={item?.listname}
                                            name={item?.targetname}
                                        />
                                        <Form.Text className="text-muted">
                                            {/* {error && item?.listname <= 0 ? <div className='text-danger mt-2 mb-2'>{item?.formname} Field is Required!</div> : null} */}
                                        </Form.Text>
                                    </Form.Group>
                                </div>
                            )
                        })}
                    </div>

                    <div>
                        <button onClick={AddNewWorkExperience} className='delete-btn'>
                            Add +
                        </button>
                    </div>

                    <div className='row d-flex gap-2 mt-4'>
                        {alldatas?.map((item, index) => {
                            return (
                                <div className='cards col-lg-12 mb-3 mt-2' key={index}
                                    style={{
                                        position: "relative"
                                    }}
                                >
                                    <div>
                                        {item?.worktitle}
                                    </div>
                                    <div>
                                        {item?.workcompanyName}
                                    </div>
                                    <div>
                                        {item?.workDescription}
                                    </div>
                                    <div>
                                        {item?.workdate}
                                    </div>

                                    <div>
                                        {item?.worklocation}
                                    </div>

                                    <div style={{
                                        position: "absolute",
                                        color: "white",
                                        width: "25px",
                                        height: "25px",
                                        background: "red",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        top: "-4%",
                                        right: "-2%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: "98989898989898",
                                        padding: "5px"

                                    }}
                                        onClick={() => filterData(item?.id)}
                                    >
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {alldatas?.length > 0 ? <>
                        <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                            <button className='edit-btn' onClick={SubmitWorkerData}>Save</button>
                        </div>
                    </> : null}



                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Workexperience
import React, { useState, useEffect } from 'react'
import './Resume.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createResumeService, getSingleResumeService, updateallResumeService } from '../../services/resume_service/resume_service';
import { ToastSuccess } from './../../middleware/Toast_action';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Workexperience from './Workexperience';
import ResumeDetails from './ResumeDetails';
import { v4 as uuidv4 } from 'uuid';


function CreateResume() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);



    // user personal informations

    const [user, setUsers] = useState({
        name: "",
        role: "",
        description: "",
        location: "",
        email: "",
        phoneno: "",
        location: "",
        profileimage: ""
    })


    // work experience data


    const [workuser, setWorkUsers] = useState({
        worktitle: "",
        workcompanyName: "",
        workDescription: "",
        worklocation: "",
        workdate: "",
    })


    const [workerdetails, setworkerDetails] = useState([]);



    const [alldatas, setAlldatas] = useState(null);

    const [error, setError] = useState(false);

    const { name, role, description, location, email, phoneno, profileimage } = user;

    const listForms = [{ id: 1, listname: name, formname: "Name", targetname: "name" },
    { id: 2, listname: role, formname: "Role", targetname: "role" },
    { id: 3, listname: description, formname: "Description", targetname: "description" },
    { id: 4, listname: email, formname: "Email", targetname: "email" },
    { id: 5, listname: phoneno, formname: "PhoneNo", targetname: "phoneno" },
    { id: 6, listname: profileimage, formname: "ProfileImage", targetname: "profileimage" },
    { id: 7, listname: location, formname: "Location", targetname: "location" }

    ]


    const { worktitle,
        workcompanyName,
        workDescription,
        workdate,
        worklocation } = workuser;

    const worklistForms = [{ id: 1, listname: worktitle, formname: "Title", targetname: "worktitle", type: "text" },
    { id: 2, listname: workcompanyName, formname: "CompanyName", targetname: "workcompanyName", type: "text" },
    { id: 3, listname: workDescription, formname: "Description", targetname: "workDescription", type: "text" },
    { id: 4, listname: workdate, formname: "Date", targetname: "workdate", type: "Date" },
    { id: 5, listname: worklocation, formname: "Location", targetname: "worklocation", type: "text" },
    ]

    const handleChangeUsers = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    }

    const handleChangeWorker = (e) => {
        setWorkUsers({ ...workuser, [e.target.name]: e.target.value });
    }

    const SubmitPersonalData = () => {
        const datas = {
            personDetails: [user],
            Educations: [],
            Skills: [],
            Projects: [],
            Hobbies: [],
            Languages: [],
            WorkExperience: []
        }
        setAlldatas(datas);
        handleClose();
    }

    const AddNewWorkExperience = () => {

        const overallWorks = {
            worktitle,
            workcompanyName,
            workDescription,
            workdate,
            worklocation,
            id: uuidv4()
        }

        setworkerDetails([...workerdetails, overallWorks]);
        setWorkUsers({
            worktitle: "",
            workcompanyName: "",
            workDescription: "",
            worklocation: "",
            workdate: "",
        })
    }
    const SubmitWorkerData = () => {
        const datas = {
            personDetails: [user],
            Educations: [],
            Skills: [],
            Projects: [],
            Hobbies: [],
            Languages: [],
            WorkExperience: workerdetails
        }
        setAlldatas(datas);
        handleClose6();

    }

    const SaveResume = () => {
        const data = alldatas;
        createResumeService(data).then((res) => {
            ToastSuccess("Craeted Resume Successfuly");
            navigate("/resume")
        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {

        if (state?.id) {
            getSingleResumeService(state?.id).then((res) => {
                const datas = {
                    personDetails: [res?.data?.personDetails[0]],
                    Educations: [],
                    Skills: [],
                    Projects: [],
                    Hobbies: [],
                    Languages: [],
                    WorkExperience: res?.data?.WorkExperience
                }
                setAlldatas(datas);
                setUsers(res?.data?.personDetails[0])
                setworkerDetails(res?.data?.WorkExperience)
            }).catch((err) => {
                console.log(err)
            })
        }

    }, [state]);

    const updateResumeData = () => {
        if (state?.id) {
            const data = alldatas;
            updateallResumeService(state?.id, data).then((res) => {
                ToastSuccess(res?.data?.message);
                navigate("/resume");
            }).catch((err) => {
                console.log(err);
            })
        }


    }

    return (
        <div className='main-container'>
            <div className='inside-main-container'>
                <div className='left-container'>
                    <div className='d-flex gap-4 mt-4 p-3'>
                        <button className='edit-btn' onClick={handleShow}>Personal</button>
                        <button className='edit-btn' onClick={handleShow1}>Educationas</button>
                    </div>

                    <div className='d-flex gap-4 mt-4 p-3'>
                        <button className='edit-btn' onClick={handleShow2}>Skills</button>
                        <button className='edit-btn' onClick={handleShow3}>Projects</button>
                    </div>

                    <div className='d-flex gap-4 mt-4 p-3'>
                        <button className='edit-btn' onClick={handleShow4}>Hobbies</button>
                        <button className='edit-btn' onClick={handleShow5}>Languages</button>
                    </div>
                    <div className='d-flex gap-4 mt-4 p-3'>
                        <div>
                            <Workexperience handleShow6={handleShow6} worklistForms={worklistForms}
                                handleClose6={handleClose6}
                                show6={show6}
                                handleChangeWorker={handleChangeWorker}
                                SubmitWorkerData={SubmitWorkerData}
                                AddNewWorkExperience={AddNewWorkExperience}
                                alldatas={workerdetails}
                                setworkerDetails={setworkerDetails}
                            />
                        </div>
                    </div>

                    <div className='ms-3 mt-4 d-flex align-items-center justify-content-center'>
                        {state?.id ? <>
                            <button onClick={updateResumeData} className='bg-success' style={{ color: "white", padding: "10px 40px", border: "none", outline: "none", borderRadius: "20px" }}>
                                Update Resume                         </button>
                        </> : <>
                            <button onClick={SaveResume} className='bg-success' style={{ color: "white", padding: "10px 40px", border: "none", outline: "none", borderRadius: "20px" }}>
                                Create Resume Save
                            </button>
                        </>}

                    </div>
                </div>
                <div className='right-container p-2'>

                    <ResumeDetails alldatas={alldatas} />

                </div>
            </div>


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
                    <div className='row gap-1 d-flex'>
                        {listForms?.map((item, index) => {
                            return (
                                <div key={index} className='col-lg-6 d-flex row '>
                                    <Form.Group className="mb-3" controlId={`formBasic${item?.formname}`}>
                                        <Form.Label>{item?.formname}</Form.Label>
                                        <Form.Control type="text" placeholder={`Enter ${item?.formname}`}
                                            onChange={handleChangeUsers}
                                            value={item?.listname}
                                            name={item?.targetname}
                                        />
                                        <Form.Text className="text-muted">
                                            {error && item?.listname <= 0 ? <div className='text-danger mt-2 mb-2'>{item?.formname} Field is Required!</div> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </div>
                            )
                        })}
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>

                        <button className='edit-btn' onClick={SubmitPersonalData}>Save</button>
                    </div>
                </Modal.Body>

            </Modal>

            {/* second */}

            <Modal
                show={show1}
                onHide={handleClose1}
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
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            {/* third */}


            <Modal
                show={show2}
                onHide={handleClose2}
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
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={show3}
                onHide={handleClose3}
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
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            {/* fourth */}

            <Modal
                show={show4}
                onHide={handleClose4}
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
                    <Button variant="secondary" onClick={handleClose4}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            {/* fifth */}
            <Modal
                show={show5}
                onHide={handleClose5}
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
                    <Button variant="secondary" onClick={handleClose5}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            {/* sixith */}


        </div>
    )
}

export default CreateResume
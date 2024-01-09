import React, { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/en.json';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { CommandCreateActions, CommandDeleteActions, PostLikeActions } from '../../redux/actions/CreateBlogActions';
import { useGlobalContextApi } from '../../contextApi/Context';
import jwt_decode from 'jwt-decode';
import { AlluserActionData } from '../../redux/actions/AllUserActions';

TimeAgo.addDefaultLocale(en);
function Cards({ data }) {


    const token = localStorage.getItem("blog_token") ? localStorage.getItem("blog_token") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const userid = jwt_decode(token);

    const currentid = {
        currentuserid: userid?.id
    }

    // const currentid = useGlobalContextApi();

    const [emojies, setEmojies] = useState("");



    const [postcm, setPostcm] = useState(data?.postcommands);


    const [likepo, setLikepo] = useState(data?.likes);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const [command, setCommand] = useState("");
    const [commanderror, setCommandError] = useState("");


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const navigate = useNavigate();

    const des = data?.description?.slice(0, 140);

    const movepath = (id) => {
        navigate("/singleblog", { state: { id: id } })
    }

    const SumbmitCommand = () => {
        if (command?.length === 0) {
            setCommandError("Command is Required")
        }
        if (command) {
            const datas = {
                desc: command,
                commanduserdid: currentid?.currentuserid,
                userid: data?.user?._id
            }
            setPostcm([...postcm, datas]);
            setCommand("");
            dispatch(CommandCreateActions(data?._id, datas, data?.user?._id, setLoading, handleShow))
        }
    }

    const DeleteCommand = (commandid) => {
        const datas = {
            commandid: commandid,
            commanduserdid: data?.user?._id,
            userid: currentid?.currentuserid,
        }
        const filterposts = postcm?.filter((item, index) => { return item?._id !== commandid }
        )
        setPostcm(filterposts);
        dispatch(CommandDeleteActions(data?._id, datas))
    }


    useEffect(() => {

    }, [data])


    const PostLk = (postid) => {
        const likedata = {
            userid: currentid?.currentuserid,
        }
        if (likepo.includes(currentid?.currentuserid)) {
            setLikepo(likepo?.filter((item) => item !== currentid?.currentuserid));
            return;
        }
        setLikepo(likepo.concat(currentid?.currentuserid));
        dispatch(PostLikeActions(postid, likedata));
    }

    const state = useSelector((state) => state?.alluser?.allusers);

    useEffect(() => {
        dispatch(AlluserActionData());
    }, []);
    const datas = "😀😃😄😁😆😅😂🤣🥲🥹😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥸🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😮‍💨😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🫣🤗🫡🤔🫢🤭🤫🤥😶😶😐😑😬🫨🫠🙄😯😦😧😮😲🥱😴🤤😪😵😵‍💫🤐🥴🤢🤮🤧😷🤒🤕🤑🤠👿👹👺🤡💩☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾👋🤚🖐✋🖖👌🤌🤏✌️🤞🫰🤟🤘🤙🫵🫱🫲🫸🫷🫳🫴👈👉👆🖕👇☝️👍👎✊👊🤛🤜👏🫶🙌👐🤲🤝🙏✍️💅🤳💪🫂🧳🌂☂️🧵🪡🪢🪭🧶👓🕶🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩴🩱🩲🩳👙👚👛👜👝🎒👞👟🥾🥿👠👡🩰👢👑👒🎩🎓🧢⛑🪖💄💍💼";
    const datasEmojies = Array.from(datas);
    const addEmoji = (e) => {
        setCommand(command + e);
    };
    return (
        <div className='p-1' >

            <div onClick={() => movepath(data?._id)}>
                <div>
                    {data?.avatar ? <>
                        <img className="dashobard-image" src={data?.avatar} alt="no image" />
                    </> : <>
                        <img className="dashobard-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
                    </>}
                </div>
                <div className='mt-3 fw-bold'>
                    {data?.title?.slice(0, 40)}
                </div>
                <div className='fs-6 mt-2' style={{
                    height: "70px",
                }}>
                    {ReactHtmlParser(des)}
                </div>
                <div className='d-flex gap-3 mt-2 align-items-center' style={{ height: "70px" }}>
                    <div>
                        <div>
                            {data?.user?.avatar ? <>
                                <img className="dashobard-images" src={data?.user?.avatar} alt="no image" />
                            </> : <>
                                <img className="dashobard-images" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
                            </>}
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-content-center w-100 '>
                        <div>
                            <div>
                                {data?.user?.userName}
                            </div>
                            <div>
                                <small>
                                    <ReactTimeAgo date={new Date(data?.createdAt)} locale='en-US' />
                                </small>
                            </div>
                        </div>
                        <div>

                            <button className='type-btn'>
                                {data?.category}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-4 mb-1'>
                {userid?.id ? <>

                    <div className='' onClick={() => PostLk(data?._id)}>
                        {data?.likes?.includes(currentid?.currentuserid) ? <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png" alt="no image" className='unlike-heart' />
                        </> : <>
                            <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="no image" className='unlike-heart' />

                        </>}
                        <span className='ms-2 fw-bold fs-6 '>{data?.likes?.length}</span>
                    </div>
                </> : <div onClick={() => window.location.assign("/login")}>
                    <div className=''>
                        {data?.likes?.includes(currentid?.currentuserid) ? <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png" alt="no image" className='unlike-heart' />
                        </> : <>
                            <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="no image" className='unlike-heart' />

                        </>}
                        <span className='ms-2 fw-bold fs-6 '>{data?.likes?.length}</span>
                    </div>
                </div>}

                <div className='text-end fw-bold fs-6  mb-1' onClick={handleShow}>
                    {userid?.id ? <>

                        Comments ( <span className="text-danger">{postcm?.length}</span> )

                    </> : <div onClick={() => window.location.assign("/login")}>
                        Comments
                    </div>}
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex gap-3 mt-2'>
                            <div>
                                <div>
                                    {data?.user?.avatar ? <>

                                        <img className="dashobard-images" src={data?.user?.avatar} alt="no image" />

                                    </> : <>

                                        <img className="dashobard-images" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />

                                    </>}

                                </div>
                            </div>
                            <div className='d-flex gap-5'>
                                <div>
                                    <div>
                                        {data?.user?.userName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ height: "300px", border: "1px solid grey", overflow: "hidden", overflowY: "auto", borderRadius: "10px", paddingBottom: "10vh", paddingTop: "20px" }} className='scrollbar'>
                        <div>
                            {postcm?.map((item, index) => {
                                return (
                                    <div className='d-flex justify-content-between align-items-center p-2 ' key={index}>
                                        {state?.map((items, index) => {
                                            if (item?.commanduserdid === items?._id) {
                                                return (
                                                    <div>
                                                        <div className='d-flex align-items-center align-content-center gap-3'>
                                                            <div>
                                                                {items?.avatar ? <>
                                                                    <img src={items?.avatar} alt="no image"
                                                                        style={{
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            borderRadius: "50%"
                                                                        }}
                                                                    />
                                                                </> : <>

                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&usqp=CAU" alt="no image"
                                                                        style={{
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            borderRadius: "50%"
                                                                        }}
                                                                    />
                                                                </>}

                                                            </div>
                                                            <div style={{ width: "400px", padding: "10px", height: "auto", borderRadius: "10px", border: "1px solid #FFF6F6", backgroundColor: "#FFF6F6" }}>
                                                                <div className='fw-bold mb-1'>
                                                                    {items?.userName}
                                                                </div>
                                                                <div>
                                                                    {item?.desc}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}



                                        <div>

                                            {currentid?.currentuserid == item?.commanduserdid ? <>
                                                <div className='' style={{ color: "red", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => DeleteCommand(item?._id)}>
                                                    <ion-icon name="trash-outline"></ion-icon>
                                                </div>
                                            </> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3 mt-4 mb-4'>
                        <div onClick={handleShow1} style={{ cursor: "pointer", width: "15%", border: "1px solid #E5D4FF", textAlign: "center", borderRadius: "10px", padding: "6px 0px", fontSize: "1.4rem" }}>
                            😀
                        </div>
                        <div className='mt-3'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Command Post"
                                    value={command}
                                    onChange={(e) => setCommand(e?.target?.value)}
                                />
                                <Form.Text className=" text-danger mt-2">
                                    {command?.length > 0 ? <></> : <>
                                        {commanderror}
                                    </>}
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <div >
                            <Button variant="primary" onClick={SumbmitCommand}>Send Command</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex gap-3 mt-2'>
                            <div>
                                <div>
                                    {data?.user?.avatar ? <>

                                        <img className="dashobard-images" src={data?.user?.avatar} alt="no image" />

                                    </> : <>

                                        <img className="dashobard-images" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />

                                    </>}

                                </div>
                            </div>
                            <div className='d-flex gap-5'>
                                <div>
                                    <div>
                                        {data?.user?.userName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='mt-4 mb-4 ms-2'>
                        <div className='row gap-3'>

                            {datasEmojies?.map((item, index) => {
                                return <div onClick={() => {
                                    addEmoji(item)
                                    handleClose1()
                                }} style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "10%",
                                    border: "1px solid grey",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",

                                }}>{item}</div>
                            })}

                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Cards
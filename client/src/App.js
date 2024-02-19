import React, { useEffect, useState } from 'react'
import RouterIndex from './router/RouterIndex'
import Modal from 'react-bootstrap/Modal';
import waringimg from './assests/images/warning-image.png'
import './App.scss';
import jwt_decode from 'jwt-decode';
import { ToastSuccess } from './middleware/Toast_action';
function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useEffect(() => {
  //   const Alert = (e) => {
  //     e.preventDefault();
  //     return handleShow();
  //   };

  //   const disabledKeys = ["c", "C", "x", "J", "u", "I", "w", "P", "p"];
  //   document.addEventListener("contextmenu", Alert);
  //   document.addEventListener("keydown", function (e) {
  //     if (
  //       e.key === "Meta" ||
  //       e.key === "Windows" ||
  //       e.keyCode === 91 ||
  //       e.keyCode === 92
  //     ) {
  //       Alert(e);
  //     }
  //     if ((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
  //       Alert(e);
  //     }
  //   });

  //   document.addEventListener("cut", (e) => {
  //     Alert(e);
  //   });
  //   document.addEventListener("copy", (e) => {
  //     Alert(e);
  //   });

  //   // document.addEventListener("keyup", (e) => {
  //   //   navigator.clipboard.writeText(" ");
  //   //   Alert(e)
  //   // });

  // }, []);

  const [scrollTop, setScrollTop] = useState(0);


  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, [scrollTop]);


  const token = localStorage.getItem("blog_token");




  useEffect(() => {


    if (token) {
      const jwt = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Converting milliseconds to seconds
      if (jwt.exp < currentTime) {
        // Token has expired
        console.log("Token has expired");
        localStorage.clear();
        window.location.assign("/login")
        // window.alert("expired token")
        // ToastSuccess("expoire token")
      } else {
        // Token is still valid
        console.log("Token is still valid");
      }
    }

  }, [token])

  return (
    <div>
      <RouterIndex />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div className='d-flex align-items-center justify-content-center cursor'>
            <img src={waringimg} alt="no image" className='warning-image-box' />
          </div>
          <div className='text-center mt-3 mb-4 fw-bold'>
            Warning
          </div>
          <div className='fw-bold fs-4 text-center mt-3 mb-4'>
            This feature is Restricted!
          </div>
          <div className='mt-5 mb-4 d-flex align-items-center justify-content-center'>
            <button className='ok-btn' onClick={handleClose}>
              Ok
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default App
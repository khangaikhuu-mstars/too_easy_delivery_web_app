import React, { useState } from "react"
import { Offcanvas, Button } from 'react-bootstrap';
import basket from '../image/basketIcon.svg'

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-none" onClick={handleShow} className="justify-content-center align-items-center" >
        <img src={basket} className='basketLogo'></img>
        <a href='#action2' className='basket orangeFont poppins px-1'>
          Сагс
        </a>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Taны Сагс</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Another information
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas
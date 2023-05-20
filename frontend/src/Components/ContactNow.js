import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ContactNow(props) {
    const [show, setShow] = useState(false);
    const name = props.value0;
    const contactNo = props.value1;
    const email = props.value2;
    const mailto = "mailto:"+email;
    
    return (
    
      <>
      <div class="col text-center">
        <Button variant="outline-success btn-lg btn-block" onClick={() => setShow(true)}>
          Contact Now
        </Button>
      </div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          scrollable={true}
          size='lg'
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ul>
                  <li>Contact Number - {contactNo}</li>
                  <li>Email Address - <span><a href={mailto}>  {email} </a></span></li>
              </ul>
  </Modal.Body>
  </Modal>
   </>
    );
  }
  
  export default ContactNow;
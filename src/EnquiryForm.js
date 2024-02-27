import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function EnquiryForm() {
    let [formData,setFormData]   = useState({
        uEmail:'',
        uPassword:'',
        uMessage:''
    })
 let [userData,setUserData]=useState([])

    let getValue=(event)=>{
         let oldData = {...formData}
         let inputName = event.target.name
         let inputValue = event.target.value
         oldData[inputName] = inputValue
         setFormData(oldData)
    }
    let submitForm = (event) =>{
        let newUserData = {
            uEmail:formData.uEmail,
            uPassword:formData.uPassword,
            uMessage:formData.uMessage
        }
        let oldUserData = [...userData,newUserData]
         event.preventDefault()
         setUserData(oldUserData)
         console.log(oldUserData)
    }
  return (
    <div>
      <Container className="mt-5">
        <Form className="d-flex align-items-center justify-content-center flex-column" onSubmit={submitForm}>
          <Form.Group className="mb-3 w-50  ">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={getValue} className="border-black" name="uEmail"  value={formData.uEmail} />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={getValue} className="border-black" name="uPassword" value={formData.uPassword}/>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" onChange={getValue} className="border-black" name="uMessage" value={formData.uMessage}/>
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default EnquiryForm;

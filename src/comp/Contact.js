import React from "react"
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

const Contact = ()=>{

    const [contact, setContact] = React.useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    const contactHandle =(e)=>{
        setContact({...contact, [e.target.name]:e.target.value})
    }

    const submitContact = (e)=>{
        e.preventDefault()

        console.log(contact)
    }

    return(
        <Form className="contactForm">
            <FormGroup>
                <Label for='Name'>Name</Label>
                <Input type='text' name='name' id="Name" value={contact.name} onChange={contactHandle}/>
            </FormGroup>
            <FormGroup>
                <Label for='Email'>Email</Label>
                <Input type='email' name='email' id="Email" value={contact.email} onChange={contactHandle}/>
            </FormGroup>
            <FormGroup>
                <Label for="Phone">Phone</Label>
                <Input type="tel" id="Phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={contact.phone} onChange={contactHandle}/>
            </FormGroup>
            <FormGroup>
                <Label for="Message">Message(Optional)</Label>
                <Input type="textarea" id="Message" name="message" value={contact.message} onChange={contactHandle}/>
            </FormGroup>
            <Button onClick={submitContact} color="primary">Send</Button>
        </Form>
    )

}

export default Contact
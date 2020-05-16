import React from "react"
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback} from 'reactstrap';

const Contact = ()=>{

    const [contact, setContact] = React.useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    const [button,setButton] = React.useState(true)

    const contactHandle =(e)=>{
        setContact({...contact, [e.target.name]:e.target.value})

        console.log(contact)

        if(contact.name.length >= 2 && contact.email.length > 1 && contact.phone.length > 1){
            setButton(false)
        }else{
            setButton(true)
        }


    }

    const submitContact = (e)=>{
        e.preventDefault()

        console.log(contact)
    }


    return(
        <div>
            <h2>Let's talk</h2>
            <Form className="contactForm">
                <FormGroup>
                    <Label for='Name'>Name</Label>
                    <Input type='text' name='name' id="Name" value={contact.name} onChange={contactHandle}/>
                    <FormText>ex: Foobar</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='Email'>Email</Label>
                    <Input type='email' name='email' id="Email" value={contact.email} onChange={contactHandle}/>
                    <FormText>ex: kylecorbin26@gmail.com</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="Phone">Phone</Label>
                    <Input type="tel" id="Phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={contact.phone} onChange={contactHandle}/>
                    <FormText>ex: 123-456-7890</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="Message">Message(Optional)</Label>
                    <Input type="textarea" id="Message" name="message" value={contact.message} onChange={contactHandle}/>
                </FormGroup>
                <Button disabled={button} onClick={submitContact} color="primary">Send</Button>
            </Form>
        </div>
    )

}

export default Contact
import React from "react"
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import {sendContact} from '../Actions/ContactActions'


const Contact = ()=>{

    const dispatch = useDispatch()

    const [contact, setContact] = React.useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })


    const [input,setInput] = React.useState({
        nameErr:"",
        name:"",
        emailErr:"",
        email:"",
        phoneErr:"",
        phone:""
    })


    const contactHandle =(e)=>{
        setContact({...contact, [e.target.name]:e.target.value})

    }

    const submitContact = (e)=>{
        e.preventDefault()

        let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let phoneCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

        if(contact.name.length > 2 ===false){
            setInput({...input, nameErr:"0", name:"" })
            return
        }else{
            setInput({...input, name:"0", nameErr:""})
        }



        if(!emailCheck.test(contact.email)){
            setInput({...input, name:"0", nameErr:"", emailErr:"0", email:""})
            return
        }else{
            setInput({...input, name:"0", nameErr:"", email:"0", emailErr:""})
        }



        if(!phoneCheck.test(contact.phone)){
            setInput({...input, name:"0", nameErr:"", email:"0", emailErr:"", phoneErr:"0", phone:""})
            return
        }else{
            setInput({...input, name:"0", nameErr:"", email:"0", emailErr:"", phone:"0", phoneErr:""})
            dispatch(sendContact(contact))
        }
    }


    return(
        <div>
            <h2>Let's talk</h2>
            <Form className="contactForm">
                <FormGroup>
                    <Label for='Name'>Name</Label>
                    <Input invalid={input.nameErr} valid={input.name} type='text' name='name' id="Name" value={contact.name} onChange={contactHandle}/>
                    <FormFeedback>Looks like the name is too short!</FormFeedback>
                    <FormText>ex: Foobar</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='Email'>Email</Label>
                    <Input invalid={input.emailErr} valid={input.email} type='email' name='email' id="Email" value={contact.email} onChange={contactHandle}/>
                    <FormFeedback>Make sure your format is correct!</FormFeedback>
                    <FormText>ex: kylecorbin26@gmail.com</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="Phone">Phone</Label>
                    <Input invalid={input.phoneErr} valid={input.phone} type="tel" id="Phone" name="phone" value={contact.phone} onChange={contactHandle}/>
                    <FormFeedback>Make sure your Format is correct!</FormFeedback>
                    <FormText>ex: 123-456-7890</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="Message">Message(Optional)</Label>
                    <Input type="textarea" id="Message" name="message" value={contact.message} onChange={contactHandle}/>
                </FormGroup>
                <Button onClick={submitContact} color="primary">Send</Button>
            </Form>
        </div>
    )

}

export default Contact
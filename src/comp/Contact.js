import React from "react"
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback, Alert, Spinner, UncontrolledTooltip} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import {sendContact} from '../Actions/ContactActions'
import blackman from "../img/BlackMan.jpg"
import {pageDirection} from "../Util/Utils"



const Contact = (props)=>{


    let from = "from"

    if(!props.location.state){
         from = "notAvailable"
    }
    else{
         from = props.location.state.from 
    }

    const dispatch = useDispatch()

    const Contact = useSelector(state=>state.Contact)

    React.useEffect(()=>{

        if(Contact.failure && Contact.code){

            if(Contact.code === 406){
                setAlert({...alert, 
                status:true,
                title:'Incorrect format', 
                message:'There appears to be something wrong with the format. Please clear all fields and retry', color:'danger'})
            }else if(Contact.code === 409){
                setAlert({...alert, 
                status:true,
                title:'Unable to save contact info', 
                message:' An error occured, I am unable to save your contact info', color:'danger'})
            }else{
                setAlert({...alert, 
                status:true,
                title:'Contact info saved', 
                message:'We have your information saved, but the email service is down. Feel free to message me using info found on my resume', color:'warning'})
            }
        }

        if(Contact.success){
            setAlert({...alert, status:true, message:'Message sent- you should recieve a confirmation email momentarily!', color:'success'})
        }

    }, [Contact.loading, Contact.failure, Contact.success, Contact.code])

    const [contact, setContact] = React.useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })


    const [input,setInput] = React.useState({
        nameErr:false,
        name:false,
        emailErr:false,
        email:false,
        phoneErr:false,
        phone:false
    })

    const [alert,setAlert] = React.useState({
        status:false,
        message:'',
        title:'',
        color:''
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

    const dismissAlert = ()=>{
        setAlert({...alert, status:false, message:'', title:''})
        setInput({nameErr:"", name:"", emailErr:"", email:"", phoneErr:"", phone:""})
        setContact({name:"", email:"", phone:"", message:""})
    }


    return(
        <div className={` contactPage ${pageDirection("contact", from)}`}>
            <Alert 
            isOpen = {alert.status}
            toggle = {dismissAlert}
            color={alert.color}>
                <h4 className="alert-heading">{alert.title}</h4>
                {alert.message}
            </Alert>
            <h2>Let's talk</h2>
            <Form onSubmit={submitContact} className="contactForm">
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
                {Contact.loading?
                 
                    <Spinner size="m" color="info"></Spinner>

                 :

                    <></>
                }
            </Form>
            <div className="contactFlex">
                <div className="contactText" style={{width:'40%'}}>
                    <h2>Lets bring your idea to life</h2>
                </div>
                <div id="contactPic">
                    <img src={blackman} alt="Yeet"/>
                </div>
                <UncontrolledTooltip
                placement="right"
                target="contactPic"
                >
                    www.blackillustrations.com
                </UncontrolledTooltip>
            </div>
        </div>
    )

}

export default Contact
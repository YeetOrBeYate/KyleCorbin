import React from 'react'
import axios from 'axios'

import react from "../img/react.png"
import redux from "../img/redux.png"
import bootstrap from "../img/bootstrap.png"
import postgres from "../img/postgresql.png"
import node from "../img/node.png"


const FooterBar = ()=>{

    const [qoute,setQoute] = React.useState({
        string:'',
        author:''
    })

    React.useEffect(()=>{
        return axios.get('http://localhost:4000/quote')

        .then(res=>{
            console.log(res.data)
            let content = res.data
            setQoute({...qoute, 
                string:content.line, 
                author:content.author})
        })

        .catch(err=>{
            console.log(err)
            setQoute({...qoute, string:'Quote api limit reached', author:"sorry :("})
        })
    },[])

    // load effect in css
    return(
    <div className="footerbar">
        <div id ="quote">
            <h2>{qoute.string}</h2>
        </div>
        <hr></hr>
        <div className="stackHold">
            <img src = {react} alt="react"/>
            <img src = {redux} alt="redux"/>
            <img src = {bootstrap} alt="bootstrap"/>
            <img src = {node} alt = "node"/>
            <img src = {postgres} alt = "postgresql"/>
        </div>
    </div>
    );
}

export default FooterBar
import React from 'react'
import axios from 'axios'


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

    return(
    <div className="footerbar">
        <div id ="quote">
            <h2>{qoute.string}</h2>
        </div>
    </div>
    );
}

export default FooterBar
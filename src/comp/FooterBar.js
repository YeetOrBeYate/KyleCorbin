import React from 'react'
import axios from 'axios'


const FooterBar = ()=>{

    const [qoute,setQoute] = React.useState({
        string:'',
        author:''
    })

    React.useEffect(()=>{
        return axios.get('https://quotes.rest/qod?category=inspire&language=en')

        .then(res=>{
            console.log(res.data.contents.quotes[0])
            let content = res.data.contents.quotes[0]
            setQoute({...qoute, string:content.quote, author:content.author})
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
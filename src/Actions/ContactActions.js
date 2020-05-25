import axios from 'axios'


export const sendContact=(body)=>{
    
    return function(dispatch){
        axios.post(`http://localhost:4000/contact`, body)

        .then(res=>{
            console.log(res.data)
        })

        .catch(err=>{
            console.log(err)
        })
    }
}
import axios from 'axios'

const loading = ()=>{
    return {type:'contactLoading'}
}

const failure = ()=>{
    return {type:'contactFailure'}
}

const success =()=>{
    return {type:'contactSuccess'}
}


export const sendContact=(body)=>{
    
    return function(dispatch){

        dispatch(loading())
        axios.post(`http://localhost:4000/contact`, body)

        .then(res=>{
            console.log(res.data)
            dispatch(success())
        })

        .catch(err=>{

            dispatch(failure())
        })
    }
}
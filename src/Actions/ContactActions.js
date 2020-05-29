import axios from 'axios'

const loading = ()=>{
    return {type:'contactLoading'}
}

const failure = (data)=>{
    return {type:'contactFailure', payload:data}
}

const success =()=>{
    return {type:'contactSuccess'}
}


export const sendContact=(body)=>{
    
    return function(dispatch){

        dispatch(loading())
        axios.post(`https://kyle-portfolio-be.herokuapp.com/contact`, body)

        .then(res=>{
            console.log(res.data)
            dispatch(success())
        })

        .catch(err=>{

            if(err.response && err.response.status === 406){
                console.log('failed with 406')
                dispatch(failure(406))
            }else if(err.response && err.response.status === 409){
                console.log('failed with 409')
                dispatch(failure(409))
            }else if(err.response && err.response.status === 401){
                console.log('failed with 401')
                dispatch(failure(401))
            }

        })
    }
}
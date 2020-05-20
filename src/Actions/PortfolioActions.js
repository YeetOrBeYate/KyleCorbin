import axios from 'axios'

const loading = ()=>{
    return {type:'loading'}
}

const success = (data)=>{
    return {type:'success', payload:data}
}


export const getProjects = ()=>{
    return function(dispatch){

        dispatch(loading())
        return axios.get(`http://localhost:4000/projects`)

        .then(res=>{
            dispatch(success(res.data.projects))
        })

        .catch(err=>{
            console.log(err)
        })
    }
}
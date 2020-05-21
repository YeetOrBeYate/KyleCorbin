import axios from 'axios'

const loading = ()=>{
    return {type:'loading'}
}

const success = (data)=>{
    return {type:'success', payload:data}
}

const singleLoading = ()=>{
    return {type:'singleLoading'}
}

const singleSuccess = (data)=>{
    return {type:"singleSuccess", payload:data}
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

export const getOneProject = (id)=>{
    return function(dispatch){

        dispatch(singleLoading())

        return axios.get(`http://localhost:4000/projects/${id}`)

        .then(res=>{
            dispatch(singleSuccess(res.data))
        })

        .catch(err=>{
            console.log(err)
        })
    }
}
import axios from 'axios'


const loading = ()=>{
    return {type:'Tagsloading'}
}

const success = (data)=>{
    return {type:'Tagssuccess', payload:data}
}




export const getTags = ()=>{
    return function(dispatch){

        dispatch(loading())

        return axios.get(`https://kyle-portfolio-be.herokuapp.com/tags`)

            .then(res=>{
                dispatch(success(res.data.tags))
            })

            .catch(err=>{
                console.log(err)
            })

    }
}


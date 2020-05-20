

const initialState = {
    loading:false,
    failure:false,
    projects:[]
}

export const ProjectReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'loading':
            return {...state, loading:true, failure:false}
        case 'success':
            return {...state, loading:false, failure:false, projects:action.payload}
        case 'failure':
            return {...state, loading:false, failure:true}
        default:
            return state
    }
}
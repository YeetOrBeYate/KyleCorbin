

const initialState = {
    loading:false,
    failure:false,
    projects:[],

    singleLoading:false,
    singleFailure:false,
    single:null,
}

export const ProjectReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'loading':
            return {...state, loading:true, failure:false}
        case 'success':
            return {...state, loading:false, failure:false, projects:action.payload}
        case 'failure':
            return {...state, loading:false, failure:true}
        case 'singleLoading':
            return {...state, singleLoading:true, singleFailure:false}
        case 'singleFailure':
            return {...state, singleLoading:false, singleFailure:true}
        case 'singleSuccess':
            return {...state, singleLoading:false, singleFailure:false, single:action.payload}
        default:
            return state
    }
}
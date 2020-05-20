

const initialState = {
    loading:false,
    failure:false,
    tags:[]
}


export const TagsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'Tagsloading':
            return {...state, loading:true, failure:false}
        case 'Tagssuccess':
            return {...state, loading:false, failure:false, tags:action.payload}
        case 'Tagsfailure':
            return {...state, loading:false, failure:true}
        default:
            return state
    }
}
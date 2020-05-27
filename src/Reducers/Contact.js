

const initialState = {
    loading:false,
    failure:false,
    success:false,
    code:null
}

export const ContactReducer = (state = initialState, action)=>{


    switch(action.type){
        case 'contactLoading':
            return {...state, loading:true, failure:false, success:false}
        case 'contactFailure':
            return {...state, code:action.payload, loading:false, failure:true, success:false}
        case 'contactSuccess':
            return {...state, loading:false, failure:false, success:true}
        default:
            return state
    }
} 
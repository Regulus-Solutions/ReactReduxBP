import userTypes from "./user.types"


const INITIAL_STATE = {
    id:undefined
    
}

const userReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case userTypes.SET_USER_ID:
            return {    
                ...state,
                id:payload
            }
        case userTypes.CLEAR_USER_ID:
            return{
                ...state,
                id:undefined
            }
        default:
            return state
    }
}

export default userReducer
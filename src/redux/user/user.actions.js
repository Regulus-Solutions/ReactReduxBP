import userTypes from "./user.types"

export const setUserId = (id) => ({type:userTypes.SET_USER_ID, payload:id})
export const clearUserId = () => ({type:userTypes.CLEAR_USER_ID})
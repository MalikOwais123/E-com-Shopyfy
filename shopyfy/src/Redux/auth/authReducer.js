import { SET_USER } from './authConstant';
var initialState = null;
var authReducer = (state = initialState,action ) =>{
    var {type,payload} = action;
    switch (type) {
        case SET_USER:
            return payload.user
        default:

            return state;
    }
}

export default authReducer
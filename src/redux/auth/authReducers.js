import { SIGN_IN } from './authTypes';

const initialState = {
    isUserSigned: false
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return ({
                ...initialState,
                isUserSigned: action.payLoad.isUserSigned
            })
        default:
            return (state)
    }
}

export default signInReducer
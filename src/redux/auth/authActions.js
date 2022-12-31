const { SIGN_IN } = require('./authTypes')

export const signIn = (payLoad) => {
    return ({
        type: SIGN_IN,
        payLoad
    })
}
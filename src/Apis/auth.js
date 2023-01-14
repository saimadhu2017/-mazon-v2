exports.commonValues = {
    backendUrl: 'http://localhost:5000/auth',
    bearerString: 'Bearer '
}

exports.postSignUpUserApi = (axios, userData) => {
    return (
        axios.post(`${this.commonValues.backendUrl}/signup`, userData)
    );
}

exports.getSignInUserApi = (axios, userData) => {
    return (
        axios.get(`${this.commonValues.backendUrl}/signin`, { params: userData })
    )
}

exports.isUserSignedIn = (axios, userData) => {
    const { id, usertoken } = userData;
    return (
        axios.get(`${this.commonValues.backendUrl}/is-signed-in/${id}`, {
            headers: {
                Authorization: this.commonValues.bearerString + usertoken
            }
        })
    )
}
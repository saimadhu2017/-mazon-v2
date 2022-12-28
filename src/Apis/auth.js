exports.backendUrl = 'http://localhost:5000/auth'

exports.postSignUpUserApi = (axios, userData) => {
    return (
        axios.post(`${this.backendUrl}/signup`, userData)
    );
}

exports.getSignInUserApi = (axios, userData) => {
    return (
        axios.get(`${this.backendUrl}/signin`, { params: userData })
    )
}
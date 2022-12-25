exports.backendUrl = 'http://localhost:5000/auth/signup'

exports.postSignUpUserApi = (axios, userData) => {
    return (
        axios.post(`${this.backendUrl}`, userData)
    );
}
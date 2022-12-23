exports.backendUrl = 'http://localhost:5000/auth/signup'

exports.signUpUser = (axios, userData) => {
    return (
        axios.post(`${this.backendUrl}`, userData).then(
            (response) => {
                return (response.data)
            }
        ).catch(
            (error) => {
                return (error.response.data)
            }
        )
    );
}
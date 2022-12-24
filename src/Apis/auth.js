exports.backendUrl = 'http://localhost:5000/auth/signup'

exports.signUpUserApi = (axios, userData, toast) => {
    return (
        axios.post(`${this.backendUrl}`, userData).then(
            (response) => {
                toast.success('Successfully created your account 🙌', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast_notification_cs'
                });
                return (response.data)
            }
        ).catch(
            (error) => {
                toast.error(`${error.response.data.err} 💔`, {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast_notification_cs'
                });
                return (error.response.data)
            }
        )
    );
}
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { getSignInUserApi } from '../../../Apis/auth';
import { inputStore } from '../SignUp/SignUp';
import './SignIn.css';
import Cookies from 'js-cookie'
import ls from 'local-storage'
import { connect } from 'react-redux'
import { signIn } from '../../../redux/auth/authActions';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: inputStore('', ''),
            password: inputStore('', ''),
            signInClicked: false
        }
    }

    render() {
        return (
            <div className='cs_SignIn'>
                <h3 className='display-7 cs_heading'>Sign In</h3>
                <form className='cs_form' onSubmit={this.signIn}>
                    <div className='cs_input'>
                        <label className='form-label cs_label'>Email</label>
                        <input className='form-control' type='text' value={this.state.mail.value} onChange={this.emailChange} />
                        <div className="alert alert-danger" role="alert" style={{ display: this.state.mail.errMessage ? undefined : 'none' }}>{this.state.mail.errMessage}</div>
                    </div>
                    <div className="cs_input">
                        <label className='form-label cs_label'>Password</label>
                        <input className='form-control' type='password' value={this.state.password.value} onChange={this.passwordChange} />
                        <div className="alert alert-danger" role="alert" style={{ display: this.state.password.errMessage ? undefined : 'none' }}>{this.state.password.errMessage}</div>
                    </div>
                    <div className='cs_submit'>
                        <button className='btn btn-success' disabled={this.isDisabled()}>Login</button>
                    </div>
                </form>
            </div>
        );
    }

    isDisabled = () => {
        if (this.state.signInClicked) {
            return true
        }
        let c = 0; let c1 = 0;
        for (const userInfo in this.state) {
            if (userInfo !== 'signInClicked') {
                c1 = c1 + 1
                if (this.state[userInfo].errMessage === '' && this.state[userInfo].value) {
                    c = c + 1
                }
            }
        }
        if (c1 === c) {
            return (false);
        }
        return (true);
    }

    signIn = async (e) => {
        e.preventDefault();
        await this.setState({
            signInClicked: true
        })
        const updateStateForSignInClickedFail = async () => {
            await this.setState({
                signInClicked: false
            })
        }
        const updateStateForSignInClickedSucess = async () => {
            await this.props.signIn({ isUserSigned: true })
        }
        const userSendData = {
            mail: this.state.mail.value,
            password: this.state.password.value
        }
        const apiData = getSignInUserApi(axios, userSendData);
        toast.promise(apiData, {
            pending: {
                render() {
                    return ('Please wait...')
                },
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            },
            success: {
                render(res) {
                    const responseData = res?.data?.data?.data
                    ls('userData', { id: responseData.id })
                    Cookies.set('usertoken', responseData?.token, {
                        expires: 1 / 1440
                    })
                    updateStateForSignInClickedSucess()
                    return ('Successfully SignedIn🙌')
                },
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            },
            error: {
                render(err) {
                    updateStateForSignInClickedFail()
                    const res = err?.data;
                    return (res?.response?.data?.err || res?.message)
                },
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            }
        })
    }

    emailChange = async (e) => {
        const email = e.target.value;
        const emailPattern = /\w+([.-_]\w+)*@\w+([.-_]\w+)*\.\w{2,4}/;

        if (emailPattern.test(email)) {
            await this.setState({
                mail: inputStore(email, '')
            })
        } else {
            await this.setState({
                mail: inputStore(email, 'Please enter valid Email id')
            })
        }
    }

    passwordChange = async (e) => {
        const pass = e.target.value;
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (passPattern.test(pass)) {
            await this.setState({
                password: inputStore(pass, '')
            })
        } else {
            await this.setState({
                password: inputStore(pass, 'Please enter Strong Password')
            })
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        isUserSigned: state.signInReducer.isUserSigned
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        signIn: (payLoad) => { dispatch(signIn(payLoad)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

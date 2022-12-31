import axios from 'axios';
import { toast } from 'react-toastify';
import { getSignInUserApi } from '../../../Apis/auth';
import { inputStore } from '../SignUp/SignUp';
import './SignIn.css';
import Cookies from 'js-cookie'
import ls from 'local-storage'
import { connect } from 'react-redux'
import { signIn } from '../../../redux/auth/authActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = (props) => {
    const [state, setState] = useState({
        mail: inputStore('', ''),
        password: inputStore('', ''),
        signInClicked: false
    })
    const navigate=useNavigate();

    const isDisabled = () => {
        if (state.signInClicked) {
            return true
        }
        let c = 0; let c1 = 0;
        for (const userInfo in state) {
            if (userInfo !== 'signInClicked') {
                c1 = c1 + 1
                if (state[userInfo].errMessage === '' && state[userInfo].value) {
                    c = c + 1
                }
            }
        }
        if (c1 === c) {
            return (false);
        }
        return (true);
    }

    const signIn = async (e) => {
        e.preventDefault();
        await setState({
            ...state,
            signInClicked: true
        })
        const updateStateForSignInClickedFail = async () => {
            await setState({
                ...state,
                signInClicked: false
            })
        }
        const updateStateForSignInClickedSucess = async () => {
            await props.signIn({ isUserSigned: true })
        }
        const userSendData = {
            mail: state.mail.value,
            password: state.password.value
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
                    navigate('/test')
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

    const emailChange = async (e) => {
        const email = e.target.value;
        const emailPattern = /\w+([.-_]\w+)*@\w+([.-_]\w+)*\.\w{2,4}/;

        if (emailPattern.test(email)) {
            await setState({
                ...state,
                mail: inputStore(email, '')
            })
        } else {
            await setState({
                ...state,
                mail: inputStore(email, 'Please enter valid Email id')
            })
        }
    }

    const passwordChange = async (e) => {
        const pass = e.target.value;
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (passPattern.test(pass)) {
            await setState({
                ...state,
                password: inputStore(pass, '')
            })
        } else {
            await setState({
                ...state,
                password: inputStore(pass, 'Please enter Strong Password')
            })
        }
    }

    return (
        <div className='cs_SignIn'>
            <h3 className='display-7 cs_heading'>Sign In</h3>
            <form className='cs_form' onSubmit={signIn}>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Email</label>
                    <input className='form-control' type='text' value={state.mail.value} onChange={emailChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: state.mail.errMessage ? undefined : 'none' }}>{state.mail.errMessage}</div>
                </div>
                <div className="cs_input">
                    <label className='form-label cs_label'>Password</label>
                    <input className='form-control' type='password' value={state.password.value} onChange={passwordChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: state.password.errMessage ? undefined : 'none' }}>{state.password.errMessage}</div>
                </div>
                <div className='cs_submit'>
                    <button className='btn btn-success' disabled={isDisabled()}>Login</button>
                </div>
            </form>
        </div>
    );
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

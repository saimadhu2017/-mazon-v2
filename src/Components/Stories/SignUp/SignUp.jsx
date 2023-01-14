import axios from 'axios';
import { useState } from 'react';
import { postSignUpUserApi } from '../../../Apis/auth';
import './SignUp.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [inpState, setState] = useState({
        last_name: inputStore('', ''),
        first_name: inputStore('', ''),
        mail: inputStore('', ''),
        phone: inputStore('', ''),
        password: inputStore('', ''),
        re_password: inputStore('', ''),
        role: inputStore(0, ''),
        signUpClicked: false
    });

    const navigate = useNavigate();

    const { first_name, last_name, mail, phone, password, re_password } = inpState;

    const firstNameChange = (e) => {
        const name = e.target.value;
        const stringPattern = /^[a-zA-Z ]+$/;

        if (stringPattern.test(name)) {
            setState({
                ...inpState,
                first_name: inputStore(name, '')
            })
        } else {
            setState({
                ...inpState,
                first_name: inputStore(name, 'Please enter your correct First name')
            })
        }
    }
    const lastNameChange = (e) => {
        const name = e.target.value;
        const stringPattern = /^[a-zA-Z]+$/;

        if (stringPattern.test(name)) {
            setState({
                ...inpState,
                last_name: inputStore(name, '')
            })
        } else {
            setState({
                ...inpState,
                last_name: inputStore(name, 'Please enter your correct Last name')
            })
        }
    }
    const emailChange = (e) => {
        const email = e.target.value;
        const emailPattern = /\w+([.-_]\w+)*@\w+([.-_]\w+)*\.\w{2,4}/;

        if (emailPattern.test(email)) {
            setState({
                ...inpState,
                mail: inputStore(email, '')
            })
        } else {
            setState({
                ...inpState,
                mail: inputStore(email, 'Please enter valid Email id')
            })
        }
    }
    const phoneChange = (e) => {
        const phone = e.target.value;
        const phonePattern = /^\d{10}$/;

        if (phonePattern.test(phone)) {
            setState({
                ...inpState,
                phone: inputStore(phone, '')
            })
        } else {
            setState({
                ...inpState,
                phone: inputStore(phone, 'Please enter valid mobile number')
            })
        }
    }
    const passwordChange = (e) => {
        const pass = e.target.value;
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (passPattern.test(pass)) {
            setState({
                ...inpState,
                password: inputStore(pass, ''),
                re_password: inputStore('', '')
            })
        } else {
            setState({
                ...inpState,
                password: inputStore(pass, 'Please enter Strong Password'),
                re_password: inputStore('', '')
            })
        }
    }
    const passwordMatch = (e) => {
        const rePass = e.target.value;

        if (rePass === inpState.password.value) {
            setState({
                ...inpState,
                re_password: inputStore(rePass, '')
            })
        } else {
            setState({
                ...inpState,
                re_password: inputStore(rePass, 'Password does not match')
            })
        }
    }
    const signUp = (e) => {
        e.preventDefault()
        setState({
            ...inpState,
            signUpClicked: true
        })
        const userPostData = {
            last_name: last_name.value,
            first_name: first_name.value.trim(),
            mail: mail.value,
            phone: phone.value,
            password: password.value
        }
        const apiData = postSignUpUserApi(axios, userPostData);
        toast.promise(apiData, {
            pending: {
                render() {
                    return ('Please wait...')
                },
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            },
            success: {
                render() {
                    // console.log(res?.data?.data?.data);
                    navigate('/signin')
                    return ('Successfully created your account 🙌')
                },
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            },
            error: {
                render(err) {
                    setState({
                        ...inpState,
                        signUpClicked: false
                    })
                    const res = err?.data;
                    return (res?.response?.data?.err || res?.message)
                },
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            }
        })
    }
    const isDisabled = () => {
        if (inpState.signUpClicked) {
            return true
        }
        let c = 0; let c1 = 0;
        for (const userInfo in inpState) {
            if (userInfo !== 'signUpClicked') {
                if (userInfo !== 'role') { c1 = c1 + 1 }
                if (inpState[userInfo].errMessage === '' && inpState[userInfo].value) {
                    c = c + 1
                }
            }
        }
        if (inpState.role.value) { c1 = c1 + 1 }
        if (c1 === c) {
            return (false);
        }
        return (true);
    }

    return (
        <div className='cs_SignUp'>
            <h3 className='display-7 cs_heading'>Sign Up</h3>
            <form className='cs_form' onSubmit={signUp}>
                <div className='cs_input'>
                    <label className='form-label cs_label'>First Name</label>
                    <input className='form-control' type='text' value={first_name.value} onChange={firstNameChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: first_name.errMessage ? undefined : 'none' }}>{first_name.errMessage}</div>
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Last Name</label>
                    <input className='form-control' type='text' value={last_name.value} onChange={lastNameChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: last_name.errMessage ? undefined : 'none' }}>{last_name.errMessage}</div>
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Email</label>
                    <input className='form-control' type='text' value={mail.value} onChange={emailChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: mail.errMessage ? undefined : 'none' }}>{mail.errMessage}</div>
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Phone</label>
                    <input className='form-control' type='text' value={phone.value} onChange={phoneChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: phone.errMessage ? undefined : 'none' }}>{phone.errMessage}</div>
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Password</label>
                    <input className='form-control' type='password' value={password.value} onChange={passwordChange} />
                    <div className="alert alert-danger" role="alert" style={{ display: password.errMessage ? undefined : 'none' }}>{password.errMessage}</div>
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Confirm Password</label>
                    <input className='form-control' type='password' value={re_password.value} onChange={passwordMatch} />
                    <div className="alert alert-danger" role="alert" style={{ display: re_password.errMessage ? undefined : 'none' }}>{re_password.errMessage}</div>
                </div>
                <div className='cs_submit'>
                    <button className='btn btn-success' disabled={isDisabled()}>Sign up</button>
                </div>
            </form>
        </div>
    );
}

export const inputStore = (value, errMessage) => {
    return {
        value,
        errMessage
    }
}

export default SignUp;

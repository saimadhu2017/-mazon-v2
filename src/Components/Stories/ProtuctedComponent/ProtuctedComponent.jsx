import { connect } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import ls from 'local-storage'
import Cookies from 'js-cookie'
import { isUserSignedIn } from "../../../Apis/auth"
import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { useRef } from "react"

const ProtuctedComponent = (props) => {
    const { Component } = props;
    const userId = Number(ls('userData')?.id);//string data type
    const token = Cookies.get('usertoken')//string data type
    const [tokenUserIDAuth, setTokenUserIDAuth] = useState(false);
    const navigate = useNavigate();
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (!props.isUserSigned && userId && token) {
            isUserSignedIn(axios, { id: userId, usertoken: token }).then(
                () => {
                    setTokenUserIDAuth(true)
                }
            ).catch(
                (err) => {
                    const res = err?.data;
                    const message = res?.response?.data?.err || res?.message
                    if (isInitialMount.current) {
                        isInitialMount.current = false;
                    }
                    else {
                        toast.error(message, {
                            position: toast.POSITION.TOP_CENTER,
                            className: 'toast_notification_cs'
                        });
                    }
                    navigate('/signin')
                    setTokenUserIDAuth(false)
                    ls.clear();
                    Cookies.remove('usertoken')
                }
            )
        }
    })
    if (props.isUserSigned) {
        console.log('first');
        return (
            <Component />
        )
    }
    else {
        if (userId && token) {
            return (
                <React.Fragment>
                    {(tokenUserIDAuth) ? <Component /> : <h1>Loading...</h1>}
                </React.Fragment>
            )
        }
        return (
            <Navigate to={'/signin'} />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isUserSigned: state.signInReducer.isUserSigned
    })
}

export default connect(mapStateToProps)(ProtuctedComponent);
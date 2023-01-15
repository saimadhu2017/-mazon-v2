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
import { signIn } from "../../../redux/auth/authActions"

const SingnedInAccess = (props) => {
    const { Component } = props;
    const userId = Number(ls('userData')?.id)
    const token = Cookies.get('usertoken')
    const [tokenUserIDAuth, setTokenUserIDAuth] = useState(false);
    const navigate = useNavigate();
    const isInitialMount = useRef(true);
    const isInitialMountNoUserIdNoToken = useRef(true);
    useEffect(() => {
        if (!props.isUserSigned && userId && token && isInitialMount.current) {
            isInitialMount.current = false;
            isUserSignedIn(axios, { id: userId, usertoken: token }).then(
                () => {
                    setTokenUserIDAuth(true)
                    props.signIn({ isUserSigned: true })
                }
            ).catch(
                () => {
                    toast.error('Session expired please sign in..', {
                        position: toast.POSITION.TOP_CENTER,
                        className: 'toast_notification_cs'
                    });
                    navigate('/signin')
                    setTokenUserIDAuth(false)
                    ls.clear();
                    Cookies.remove('usertoken')
                }
            )
        }
        if(!props.isUserSigned && (!token || !userId) && isInitialMountNoUserIdNoToken.current){
            isInitialMountNoUserIdNoToken.current=false;
            toast.error('Please sign in...', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast_notification_cs'
            });
        }
        if(props.isUserSigned && (!token || !userId)){
            props.signIn({ isUserSigned: false })
        }
    })
    if (props.isUserSigned && userId && token) {
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

const mapDispatchToProps = (dispatch) => {
    return ({
        signIn: (payLoad) => { dispatch(signIn(payLoad)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SingnedInAccess);
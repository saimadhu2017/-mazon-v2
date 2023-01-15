import { connect } from "react-redux";
import ls from 'local-storage'
import Cookies from 'js-cookie'
import { Navigate } from "react-router-dom";

const SingnedInNoAccess = (props) => {
    const { Component, isUserSigned } = props;
    const userId = Number(ls('userData')?.id)
    const token = Cookies.get('usertoken')
    if (isUserSigned || (userId && token)) {
        return (<Navigate to={'/test'} />)
    }
    return (
        <Component />
    )
}

const mapStateToProps = (state) => {
    return ({
        isUserSigned: state.signInReducer.isUserSigned
    })
}

export default connect(mapStateToProps)(SingnedInNoAccess);
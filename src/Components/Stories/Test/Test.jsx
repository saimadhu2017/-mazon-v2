import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtuctedComponent = (props) => {
    const { Component } = props;
    if (props.isUserSigned) {
        console.log('sucess logged in');
        return (
            <Component />
        )
    } else {
        console.log('not logged in');
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
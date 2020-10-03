import React, {Component} from "react"
import '../../static/css/login.css'
import {Link, Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import {login} from "../../redux/auth/authAction"


class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.login(userData)
    }

    render() {
        if (this.props.auth.authenticate) {
            return (<Redirect to={'/'}/>)
        }
        return (
            <div className="wrapper">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Please login</h2>
                    { this.props.auth.error? <h3>{this.props.auth.error}</h3> : '' }
                    <input type="text"
                           className="form-control"
                           name="username"
                           value={ this.state.username }
                           onChange={ this.onChange }
                           placeholder="Username"
                           required
                           autoFocus="" />
                    <input type="password"
                           className="form-control"
                           name="password"
                           value={ this.state.password }
                           onChange={ this.onChange }
                           placeholder="Password"
                           required=""/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    <div className="text-center txt2">
                    <span>
                        Create an account?
                    </span>
                        <Link to="/signup" className="txt2 hov1">
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

const mapStateToDispatch = dispatch => ({
    login: data => dispatch(login(data))
})

export default connect(mapStateToProps, mapStateToDispatch)(Login)
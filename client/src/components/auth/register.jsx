import React, {Component} from "react"
import {Link} from "react-router-dom";


class Register extends Component{
    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Signup</h2>
                    <input type="text"
                           className="form-control"
                           name="firstname"
                           placeholder="First Name"
                           required
                           autoFocus="" />
                    <input type="text"
                           className="form-control"
                           name="lastname"
                           placeholder="Last Name"
                           required
                           autoFocus="" />
                    <input type="text"
                           className="form-control"
                           name="username"
                           placeholder="Username"
                           required
                           autoFocus="" />
                    <input type="password"
                           className="form-control"
                           name="password"
                           placeholder="Password"
                           required
                    />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    <div className="text-center txt2">
                    <span>
                        Already registered ?
                    </span>
                        <Link to="/login" className="txt2 hov1">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
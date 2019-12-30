import React, { Component } from 'react';
import LoginForm from '../../components/login-form/LoginForm';

/**
 * Login
 * componenete para el inicio de sesion
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 */

class Login extends Component {
    render() {
        return (
            <div className="login">
                <LoginForm {...this.props} />
            </div>
        )
    }
}

export default Login;
import React, { Component } from 'react'

export class LoginOption extends Component {
    constructor(props) {
        super(props)

        this.dealerLogin = this.dealerLogin.bind(this);
        this.companyLogin = this.companyLogin.bind(this);

    }

    dealerLogin() {
        window.location.href = '/login'
    }
    companyLogin() {
        window.location.href = '/companylogin'
    }

    render() {
        return (
            <div className="Login">
                <h1 align="center">
                    <span className="badge badge-dark" >Welcome To Incentive System for Car Dealers</span>
                </h1>
                <button style={{ marginLeft: "600px" }} onClick={() => this.dealerLogin()} className="btn btn-danger">Dealer Login</button>
                <button style={{ marginLeft: "10px" }} onClick={() => this.companyLogin()} className="btn btn-info">Company Login </button>
            </div>
        )
    }
}

export default LoginOption

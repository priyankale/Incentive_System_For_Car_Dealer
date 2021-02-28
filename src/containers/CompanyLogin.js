import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CarCompanyService from '../services/CarCompanyService'

import "./Login.css";


export class CompanyLogin extends Component {
    state = {
        username: "",
        password: "",
        companyLogin: [],
        loggedIn: '',
        alreadyLogged: ''
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    componentDidMount() {
        CarCompanyService.getCompanys().then((res) => {
            this.setState({ companyLogin: res.data });

        });

    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.state.companyLogin.map((data) => {
            if (this.state.username[0] === data.cMail && this.state.password[0] === data.password) {
                this.setState({
                    loggedIn: this.state.username[0]
                })
                localStorage.setItem('userNm', this.state.username[0])
                var user1 = localStorage.getItem('userNm');
                var notify = new Notification(`${this.state.username[0]} is successfully logged in....`)
                window.location.href = '/companyhome'
            }
            else {
                setTimeout(() => {
                    document.querySelector('#loginerrorid').classList.add('error-show')
                    document.querySelector('#loginerrorid').classList.remove('error-hide')


                }, 2000);
            }
        })





    }

    render() {

        return (
            <div className="Login">
                <h1 align="center">
                    <span className="badge badge-dark" >Welcome to Company Login Page</span>
                </h1>
                <Form onSubmit={this.onSubmitHandler} className="form-style">
                    <Form.Group size="lg" controlId="username">
                        <Form.Label style={{ color: 'white' }}> Company Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.onInputChange}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                        />
                    </Form.Group>
                    <div className="error-hide" id="loginerrorid">Invalid email or password</div>
                    <Button block size="lg" type="submit">
                        Login
                </Button>
                </Form>
            </div>
        );
    }
}

export default CompanyLogin

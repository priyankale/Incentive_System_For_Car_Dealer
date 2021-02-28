import React, { Component } from 'react';
import axios from 'axios';
import CarCompanyService from '../services/CarCompanyService'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class AddCompanyCComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            cName: "",
            cMail: "",
            password: "",


            companyObj: {
                "id": 0,
                "cName": "",
                "cMail": "",
                "password": ""

            }
        }
        this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this)
        this.addCompany = this.addCompany.bind(this);
        this.Home = this.Home.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeCompanyMailHandler = this.changeCompanyMailHandler.bind(this);

    }
    saveOrUpdateCompany = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
        let company = {
            cName: this.state.cName,
            cMail: this.state.cMail,
            password: this.state.password,

        };
        this.props.history.push("/add-ccompany/_ccadd");
        if (this.state.id === '_ccadd') {
            CarCompanyService.createCompany(company).then(res => {
                this.props.history.push('/companys');
            });
        } else {
            CarCompanyService.updateCompany(company, this.state.id).then(res => {
                this.props.history.push('/companys');
            });
        }
    }
    addCompany() {
        this.props.history.push('/add-ccompany/_ccadd');
    }

    changeCompanyNameHandler = (event) => {
        this.setState({ cName: event.target.value });
    }

    changeCompanyMailHandler = (event) => {
        this.setState({ cMail: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    Home() {
        window.location.href = '/ccompanys'
    }

    validate = () => {
        let flag = true;
        if (!this.state.cName) {
            flag = false;
            this.setState({ companyNameError: " Company Name Is Required" });
        } else {
            this.setState({ companyNameError: "" });
        }
        if (this.state.cMail === "") {
            flag = false;
            this.setState({ mailError: "Mail Name Is Required" });
        } else {
            this.setState({ mailError: "" });
        }
        if (!this.state.password) {
            flag = false;
            this.setState({ passwordError: "Password Is Required" });
        } else {
            this.setState({ passwordError: "" });
        }

        return flag;
    };

    componentDidMount() {

        if (this.state.id === '_ccadd') {
            return
        } else {
            CarCompanyService.getCompanyById(this.state.id).then((res) => {
                let company = res.data;
                this.setState({
                    cName: company.cName,

                    cMail: company.cMail,
                    password: company.password,

                });
            });
        }
    }
    render() {
        return (
            <div className="Login">
                <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>
                <Form onSubmit={this.saveOrUpdateCompany} className="form-style">
                    <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Company Details </h4>
                    <hr />

                    <Form.Group size="lg" controlId="cName">
                        <Form.Label style={{ color: 'white' }}>Company Name</Form.Label>
                        <div className="alert-danger">{this.state.companyNameError}</div>
                        <Form.Control
                            type="text" name="cName"
                            onChange={this.changeCompanyNameHandler} />
                    </Form.Group>

                    <Form.Group size="lg" controlId="cMail">
                        <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                        <div className="alert-danger">{this.state.mailError}</div>
                        <Form.Control
                            type="text" name="cMail"
                            onChange={this.changeCompanyMailHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                        <div className="alert-danger">{this.state.passwordError}</div>
                        <Form.Control
                            type="password" name="password"
                            onChange={this.changePasswordHandler} />
                    </Form.Group>


                    <Button block size="lg" type="submit">
                        Add Company
                </Button>
                </Form>




            </div>
        )
    }
}

export default AddCompanyCComponent
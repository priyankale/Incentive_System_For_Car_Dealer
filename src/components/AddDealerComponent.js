import React, { Component } from 'react';
import axios from 'axios';
import CarDealerService from '../services/CarDealerService'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class AddDealerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            fName: "",
            lName: "",
            mail: "",
            password: "",
            no: "",
            city: "",

            carObj: {
                "id": 0,
                "fName": "",
                "lName": "",
                "mail": "",
                "password": "",
                "no": 0,
                "city": ""
            }
        }
        this.saveOrUpdateDealer = this.saveOrUpdateDealer.bind(this)
        this.addDealer = this.addDealer.bind(this);
        this.Home = this.Home.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
    }
    validate = () => {
        let flag = true;
        if (!this.state.fName) {
            flag = false;
            this.setState({ fNameError: " First Name Is Required" });
        } else {
            this.setState({ fNameError: "" });
        }
        if (this.state.lName === "") {
            flag = false;
            this.setState({ lNameError: "Last Name Is Required" });
        } else {
            this.setState({ lNameError: "" });
        }
        if (!this.state.mail) {
            flag = false;
            this.setState({ mailError: "Mail Is Required" });
        } else {
            this.setState({ mailError: "" });
        }
        if (!this.state.password) {
            flag = false;
            this.setState({ passwordError: "Password Required" });
        } else {
            this.setState({ passwordError: "" });
        }
        if (!this.state.no) {
            flag = false;
            this.setState({ noError: "Contact Number Required" });
        } else {
            this.setState({ priceError: "" });
        }
        if (!this.state.city) {
            flag = false;
            this.setState({ cityError: "City Required" });
        } else {
            this.setState({ cityError: "" });
        }
        return flag;
    };

    saveOrUpdateDealer = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
        let dealer = {
            fName: this.state.fName,
            lName: this.state.lName,
            mail: this.state.mail,
            password: this.state.password,
            no: this.state.no,
            city: this.state.city,
        };
        this.props.history.push("/add-dealer/_dadd");

        if (this.state.id === '_dadd') {
            CarDealerService.createDealer(dealer).then(res => {
                this.props.history.push('/dealers');
            });
        } else {
            CarDealerService.updateDealer(dealer, this.state.id).then(res => {
                this.props.history.push('/dealers');
            });
        }
    }
    addDealer() {
        this.props.history.push('/add-dealer/_dadd');
    }

    changeFirstNameHandler = (event) => {
        this.setState({ fName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lName: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ mail: event.target.value });
    }
    changeContactHandler = (event) => {
        this.setState({ no: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    Home() {
        window.location.href = '/home'
    }


    componentDidMount() {

        // step 4
        if (this.state.id === '_dadd') {
            return
        } else {
            CarDealerService.getDealerById(this.state.id).then((res) => {
                let dealer = res.data;
                this.setState({
                    fName: dealer.fName,
                    lName: dealer.lName,
                    mail: dealer.mail,
                    password: dealer.password,
                    no: dealer.no,
                    city: dealer.city
                });
            });
        }
    }
    render() {
        return (
            <div className="Login">
                <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                <Form onSubmit={this.saveOrUpdateDealer} className="form-style">
                    <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Dealer Details </h4>
                    <hr />

                    <Form.Group size="lg" controlId="fName">
                        <Form.Label style={{ color: 'white' }}>First Name</Form.Label>
                        <div className="alert-danger">{this.state.fNameError}</div>
                        <Form.Control
                            type="text" name="fName"
                            onChange={this.changeFirstNameHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="lName">
                        <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
                        <div className="alert-danger">{this.state.lNameError}</div>
                        <Form.Control
                            input type="text" name="lName"
                            onChange={this.changeLastNameHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="mail">
                        <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                        <div className="alert-danger">{this.state.mailError}</div>
                        <Form.Control
                            type="text" name="mail"
                            onChange={this.changeEmailHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                        <div className="alert-danger">{this.state.passwordError}</div>
                        <Form.Control
                            type="password" name="password"
                            onChange={this.changePasswordHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="no">
                        <Form.Label style={{ color: 'white' }}>Contact Number</Form.Label>
                        <div className="alert-danger">{this.state.noError}</div>
                        <Form.Control
                            type="text" name="no"
                            onChange={this.changeContactHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="city">
                        <Form.Label style={{ color: 'white' }}>City</Form.Label>
                        <div className="alert-danger">{this.state.cityError}</div>
                        <Form.Control
                            type="text" name="city"
                            onChange={this.changeCityHandler} />
                    </Form.Group>

                    <Button block size="lg" type="submit">
                        Add Dealer
                </Button>
                </Form>




            </div>
        )
    }
}

export default AddDealerComponent
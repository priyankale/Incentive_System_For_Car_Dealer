import React, { Component } from 'react';
import axios from 'axios';
import CarDealerService from '../services/CarDealerService'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class CreateCustomerDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            fName: "",
            lName: "",
            mail: "",
            no: "",
            city: "",

            carObj: {
                "id": 0,
                "fName": "",
                "lName": "",
                "mail": "",
                "no": 0,
                "city": ""
            }
        }
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this)
        this.addCustomer = this.addCustomer.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
    }
    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = { fName: this.state.fName, lName: this.state.lName, mail: this.state.mail, no: this.state.no, city: this.state.city };
        console.log('customer => ' + JSON.stringify(customer));

        if (this.state.id === '_cadd') {
            CarDealerService.createCustomer(customer).then(res => {
                this.props.history.push('/customers');
            });
        } else {
            CarDealerService.updateCustomer(customer, this.state.id).then(res => {
                this.props.history.push('/customers');
            });
        }
    }
    addCustomer() {
        this.props.history.push('/add-customer/_cadd');
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

    componentDidMount() {

        if (this.state.id === '_cadd') {
            return
        } else {
            CarDealerService.getCustomerById(this.state.id).then((res) => {
                let customer = res.data;
                this.setState({
                    fName: customer.fName,
                    lName: customer.lName,
                    mail: customer.mail,
                    no: customer.no,
                    city: customer.city
                });
            });
        }
    }
    render() {
        return (
            <div className="Login">


                <Form onSubmit={this.saveOrUpdateCustomer} className="form-style">
                    <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Customer Details </h4>
                    <hr />

                    <Form.Group size="lg" controlId="fName">
                        <Form.Label style={{ color: 'white' }}>First Name</Form.Label>
                        <Form.Control
                            type="text" name="fName"
                            onChange={this.changeFirstNameHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="lName">
                        <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
                        <Form.Control
                            input type="text" name="lName"
                            onChange={this.changeLastNameHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="mail">
                        <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                        <Form.Control
                            type="text" name="mail"
                            onChange={this.changeEmailHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="no">
                        <Form.Label style={{ color: 'white' }}>Contact Number</Form.Label>
                        <Form.Control
                            type="text" name="no"
                            onChange={this.changeContactHandler} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="city">
                        <Form.Label style={{ color: 'white' }}>City</Form.Label>
                        <Form.Control
                            type="text" name="city"
                            onChange={this.changeCityHandler} />
                    </Form.Group>

                    <Button block size="lg" type="submit">
                        Add Customer
                </Button>
                </Form>




            </div>
        )
    }
}

export default CreateCustomerDetailsComponent
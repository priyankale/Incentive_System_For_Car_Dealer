import React, { Component } from 'react';
import axios from 'axios';
import CarCompanyService from '../services/CarCompanyService';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class AddCarCComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bName: "",
            mName: "",
            color: "",
            price: "",
            bookingDate: "",

            carObj: {
                "id": 0,
                "bName": "",
                "mName": "",
                "color": "",
                "price": 0,
                "bookingDate": ""
            }
        }
        this.saveOrUpdateCar = this.saveOrUpdateCar.bind(this)
        this.addCar = this.addCar.bind(this);
        this.Home = this.Home.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.changebookingDateHandler = this.changebookingDateHandler.bind(this);
    }
    validate = () => {
        let flag = true;
        if (!this.state.id) {
            flag = false;
            this.setState({ idError: " Id Is Required" });
        } else {
            this.setState({ idError: "" });
        }
        if (this.state.bName === "") {
            flag = false;
            this.setState({ brandNameError: "Brand Name Is Required" });
        } else {
            this.setState({ brandNameError: "" });
        }
        if (!this.state.mName) {
            flag = false;
            this.setState({ modelNameError: "Model Name Is Required" });
        } else {
            this.setState({ modelNameError: "" });
        }
        if (!this.state.color) {
            flag = false;
            this.setState({ colorError: "Color Required" });
        } else {
            this.setState({ colorError: "" });
        }
        if (!this.state.price) {
            flag = false;
            this.setState({ priceError: "Price Required" });
        } else {
            this.setState({ priceError: "" });
        }
        if (!this.state.bookingDate) {
            flag = false;
            this.setState({ bookingDateError: "Booking Date Required" });
        } else {
            this.setState({ bookingDateError: "" });
        }
        return flag;
    };

    saveOrUpdateCar = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
        let car = { bName: this.state.bName, bookingDate: this.state.bookingDate, color: this.state.color, mName: this.state.mName, price: this.state.price };
        console.log('car => ' + JSON.stringify(car));

        this.props.history.push("/add-ccar/_add");


        if (this.state.id === '_add') {
            CarCompanyService.createCar(car).then(res => {
                this.props.history.push('/ccars');
            });
        } else {
            CarCompanyService.updateCar(car, this.state.id).then(res => {
                this.props.history.push('/ccars');
            });
        }
    }
    addCar() {
        this.props.history.push('/add-ccar/_add');
    }

    changeModelHandler = (event) => {
        this.setState({ mName: event.target.value });
    }

    changeBrandHandler = (event) => {
        this.setState({ bName: event.target.value });
    }
    changeColorHandler = (event) => {
        this.setState({ color: event.target.value });
    }
    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }
    changebookingDateHandler = (event) => {
        this.setState({ bookingDate: event.target.value });
    }



    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            CarCompanyService.getCarById(this.state.id).then((res) => {
                let car = res.data;
                this.setState({
                    bName: car.bName,
                    mName: car.mName,
                    color: car.color,
                    price: car.price,
                    bookingDate: car.bookingDate
                });
            });
        }
    }
    Home() {
        window.location.href = '/ccars'
    }


    render() {
        return (
            <div>
                <div className="Login">
                    <button style={{ marginLeft: "10px", marginTop: "-50px" }} onClick={() => this.Home()} className="btn btn-primary">Go Back</button>


                    <Form onSubmit={this.saveOrUpdateCar} className="form-style">
                        <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Enter Car Details here</h4>
                        <hr />
                        <Form.Group size="lg" controlId="bName">

                            <Form.Label style={{ color: 'white' }}>Brand Name</Form.Label>
                            <div className="alert-danger">{this.state.brandNameError}</div>
                            <Form.Control
                                type="text" name="bName"
                                onChange={this.changeBrandHandler} />
                        </Form.Group>
                        <Form.Group size="lg" controlId="bookingDate">
                            <Form.Label style={{ color: 'white' }}>Booking Date</Form.Label>
                            <div className="alert-danger">{this.state.bookingDateError}</div>
                            <Form.Control
                                type="date" name="bookingDate"
                                onChange={this.changebookingDateHandler} />
                        </Form.Group>
                        <Form.Group size="lg" controlId="color">
                            <Form.Label style={{ color: 'white' }}>Color</Form.Label>
                            <div className="alert-danger">{this.state.colorError}</div>
                            <Form.Control
                                type="text" name="color"
                                onChange={this.changeColorHandler} />
                        </Form.Group>


                        <Form.Group size="lg" controlId="mName">
                            <Form.Label style={{ color: 'white' }}>Model Name</Form.Label>
                            <div className="alert-danger">{this.state.modelNameError}</div>
                            <Form.Control
                                autoFocus
                                type="text" name="mName"
                                onChange={this.changeModelHandler} />
                        </Form.Group>
                        <Form.Group size="lg" controlId="price">
                            <Form.Label style={{ color: 'white' }}>Price</Form.Label>
                            <div className="alert-danger">{this.state.priceError}</div>
                            <Form.Control
                                type="text" name="price"
                                onChange={this.changePriceHandler} />
                        </Form.Group>

                        <Button block size="lg" type="submit">
                            Book Car
                </Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default AddCarCComponent
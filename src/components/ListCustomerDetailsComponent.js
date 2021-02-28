import React, { Component } from 'react'
import CarDealerService from '../services/CarDealerService'

class ListCustomerDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
        this.Home= this.Home.bind(this);
        this.addCustomer= this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }
    Home()
    {
        window.location.href='/home'
    }

    deleteCustomer(id) {
        CarDealerService.deleteCustomer(id).then(res => {
            this.setState({ customers: this.state.customers.filter(customer => customer.id !== id) });
        });
    }
    viewCustomer(id) {
        this.props.history.push(`/view-customer/${id}`);
    }
    editCustomer(id) {
        this.props.history.push(`/add-customer/${id}`);
    }

    componentDidMount() {
        CarDealerService.getCustomers().then((res) => {
            this.setState({ customers: res.data });
        });
    }

    addCustomer() {
        window.location.href='/add-customer/_cadd'

    }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                <h2 className="text-center">Customers List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                    <button style={{ marginLeft: "10px" }}className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                </div>
                <br></br>
                <div className="row">
                <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                
                                <th> Customer FirstName</th>
                                <th> Customer LastName</th>
                                <th> Customer Mail</th>
                                <th>Customer No</th>
                                <th>Customer City</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                        <tr key={customer.id}>
                                            
                                            <td> {customer.fName} </td>
                                            <td> {customer.lName}</td>
                                            <td> {customer.mail}</td>
                                            <td>{customer.no}</td>
                                            <td>{customer.city}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
            </div>
        )
    }
}

export default ListCustomerDetailsComponent
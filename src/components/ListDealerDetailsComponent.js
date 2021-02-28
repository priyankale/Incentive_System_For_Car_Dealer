import React, { Component } from 'react'
import CarDealerService from '../services/CarDealerService'


class ListDealerDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dealers: []
        }
        this.Home= this.Home.bind(this);
        this.editDealer = this.editDealer.bind(this);
        this.deleteDealer= this.deleteDealer.bind(this);
    }
    Home()
    {
        window.location.href='/home'
    }

    deleteDealer(id) {
        CarDealerService.deleteDelear(id).then(res => {
            this.setState({ dealers: this.state.dealers.filter(dealer => dealer.id !== id) });
        });
    }
    viewDealer(id) {
        this.props.history.push(`/view-dealer/${id}`);
    }
    editDealer(id) {
        this.props.history.push(`/add-dealer/${id}`);
    }

    componentDidMount() {
        CarDealerService.getDealers().then((res) => {
            this.setState({ dealers: res.data });
        });
    }

    addDealer() {
        window.location.href='/add-dealer/_dadd'

    }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                <h2 className="text-center">Dealers List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                    <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={this.addDealer}> Add Dealer</button>
                </div>
                <br></br>
                <div className="row">
                <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email</th>
                                <th>Contact No</th>
                                <th>City</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dealers.map(
                                    dealer =>
                                        <tr key={dealer.id}>
                                            <td> {dealer.fName} </td>
                                            <td> {dealer.lName}</td>
                                            <td> {dealer.mail}</td>
                                            <td>{dealer.no}</td>
                                            <td>{dealer.city}</td>
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

export default ListDealerDetailsComponent
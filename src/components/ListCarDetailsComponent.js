import React, { Component } from 'react'
import CarDealerService from '../services/CarDealerService'


class ListCarDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: []
        }
        this.Home= this.Home.bind(this);
        this.editCar = this.editCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }
    Home()
    {
        window.location.href='/home'
    }
    deleteCar(id) {
        CarDealerService.deleteCar(id).then(res => {
            this.setState({ cars: this.state.cars.filter(car => car.id !== id) });
        });
    }
    viewIncentive(id){
        this.props.history.push(`/view-car/${id-1}`);
    }
    viewCar(id) {
        this.props.history.push(`/view-car/${id}`);
    }
    editCar(id){
        this.props.history.push(`/update-car/${id}`);
    }


    componentDidMount() {
        CarDealerService.getCars().then((res) => {
            this.setState({ cars: res.data });
        });
    }

    addCar() {
        window.location.href='/add-car/_add'
    }

    render() {
        return (
            <div className="customBackground">
            <div className="container">
                  
                <h2 className="text-center">Cars List</h2>
                <div className="row">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                    <button className="btn btn-primary" style={{ marginLeft: "10px" }}onClick={this.addCar}> Book Car</button>
                </div>
                <br></br>
                <div className="row">
                    <table  className="table table-striped table-bordered table-dark">

                        <thead>
                            <tr>
                                <th> Car Model</th>
                                <th> Car Brand</th>
                                <th> Car Color</th>
                                <th>Car Price</th>
                                <th>Car Booking Date</th>

                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cars.map(
                                    car =>
                                        <tr key={car.id}>
                                            <td> {car.mName} </td>
                                            <td> {car.bName}</td>
                                            <td> {car.color}</td>
                                            <td>₹ {car.price}</td>
                                            <td>{car.bookingDate}</td>

                                            <td><button style={{ marginLeft: "10px" }} onClick={() => this.viewIncentive(car.id)} className="btn btn-info">View Incentive </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.editCar(car.id)} className="btn btn-info">Update Car Details</button></td>
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

export default ListCarDetailsComponent
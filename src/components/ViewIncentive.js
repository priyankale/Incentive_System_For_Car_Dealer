import React, { Component } from 'react'
import CarDealerService from '../services/CarDealerService'

class ViewIncentive extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,

            incentives: {},
            cars: {}
        }
    }

    componentDidMount() {
        CarDealerService.getIncentiveById(this.state.id).then(res => {
            this.setState({ incentives: res.data });
        })
        CarDealerService.getCarById(this.state.id).then(res => {
            this.setState({ cars: res.data });
        })


    }

    cancel() {
        this.props.history.push('/cars');
    }

    render() {
        return (
            <div className="customBackground">
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View booking datails</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Insurance: </label>
                            <div> {this.state.incentives.insurance}</div>
                        </div>
                        <div className="row">
                            <label> Discount: </label>
                            <div> {this.state.incentives.price}% discount wii provided </div>
                        </div>
                        <div className="row">
                            <label> warranty: </label>
                            <div> {this.state.incentives.warranty} year  </div>
                        </div>
                        <div className="row">
                            <label> Accessories: </label>
                            <div> {this.state.incentives.accessories}</div>
                        </div>

                    </div>
                    <button onClick={() => this.cancel()} className="btn btn-info"> Back </button>
                </div>


            </div>
        )
    }
}

export default ViewIncentive
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.Home = this.Home.bind(this);


    }

    Home() {
        window.location.href = '/'
    }
    render() {
        return (
            <div className="customBackground">
                <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Log Out</button>
                <div className="linkOption">

                    <ul>

                        <li><Link to="/cars"> Booking Details</Link></li>
                        <li><Link to="/dealers">Dealers</Link></li>
                        <li><Link to="/companys"> Companys</Link></li>
                        <li><Link to="/customers"> Customers</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeComponent

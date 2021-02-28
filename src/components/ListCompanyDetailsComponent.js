import React, { Component } from 'react'
import CarDealerService from '../services/CarDealerService'


class ListCompanyDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companys: []
        }
        this.Home = this.Home.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }
    Home() {
        window.location.href = '/home'
    }
    deleteCompany(id) {
        CarDealerService.deleteCompany(id).then(res => {
            this.setState({ companys: this.state.companys.filter(company => company.id !== id) });
        });
    }
    viewCompany(id) {
        this.props.history.push(`/view-company/${id}`);
    }
    editCompany(id) {
        this.props.history.push(`/add-company/${id}`);
    }

    componentDidMount() {
        CarDealerService.getCompanys().then((res) => {
            this.setState({ companys: res.data });
        });
    }

    addCompany() {
        window.location.href = '/add-company/_ccadd'
    }

    render() {
        return (
            <div className="customBackground">
                <div className="container">
                    <h2 className="text-center">Companys List</h2>
                    <div className="row">
                        <button style={{ marginLeft: "10px" }} onClick={() => this.Home()} className="btn btn-primary">Home</button>
                        <button className="btn btn-primary" style={{ marginLeft: "10px" }} onClick={this.addCompany}> Add Company</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered table-dark">

                            <thead>
                                <tr>

                                    <th> Company Name</th>
                                    <th> Company Mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.companys.map(
                                        company =>
                                            <tr key={company.id}>
                                                <td> {company.cName} </td>
                                                <td> {company.cMail}</td>
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

export default ListCompanyDetailsComponent
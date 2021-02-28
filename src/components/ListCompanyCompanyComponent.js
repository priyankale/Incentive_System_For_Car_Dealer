import React, { Component } from 'react'
import CarCompanyService from '../services/CarCompanyService'


class ListCompanyCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companys: []
        }
        // this.addCar = this.addCar.bind(this);
        this.Home = this.Home.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }
    Home() {
        window.location.href = '/companyhome'
    }
    deleteCompany(id) {
        CarCompanyService.deleteCompany(id).then(res => {
            this.setState({ companys: this.state.companys.filter(company => company.id !== id) });
        });
    }
    viewCompany(id) {
        this.props.history.push(`/view-ccompany/${id}`);
    }
    editCompany(id) {
        this.props.history.push(`/add-ccompany/${id}`);
    }

    componentDidMount() {
        CarCompanyService.getCompanys().then((res) => {
            this.setState({ companys: res.data });
        });
    }

    addCompany() {
        window.location.href = '/add-ccompany/_ccadd'
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

export default ListCompanyCompanyComponent
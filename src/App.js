import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ListCarDetailsComponent from './components/ListCarDetailsComponent';
import ListDealerDetailsComponent from './components/ListDealerDetailsComponent';
import ListCompanyDetailsComponent from './components/ListCompanyDetailsComponent';
import ListCustomerDetailsComponent from './components/ListCustomerDetailsComponent';
import UpdateCarDetailsComponent from './components/UpdateCarDetailsComponent'
import CreateCustomerDetailsComponent from './components/CreateCustomerDetailsComponent';
import ListCompanyCarComponent from './components/ListCompanyCarComponent';
import ListCompanyCompanyComponent from './components/ListCompanyCompanyComponent';
import AddCarComponent from './components/AddCarComponent';
import AddCarCComponent from './components/AddCarCComponent';
import AddDealerComponent from './components/AddDealerComponent'
import Login from "./containers/Login.js";
import CompanyLogin from "./containers/CompanyLogin.js";
import LoginOption from "./containers/LoginOption.js";
import HomeComponent from './HomeComponent';
import CompanyHomeComponent from './CompanyHomeComponent';
import AddCompanyComponent from './components/AddCompanyComponent';
import AddCompanyCComponent from './components/AddCompanyCComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewIncentive from './components/ViewIncentive';
import ViewCIncentive from './components/ViewCIncentive';





function App() {

  return (
    <div className="" >

      <div>
        <Router>
          <HeaderComponent />
          <div >
          </div>


          <div>

            <Switch>
              <Route exact path="/">
                <LoginOption />

              </Route>


              <Route exact path="/login">
                <Login />

              </Route>

              <Route exact path="/companylogin">

                <CompanyLogin />
              </Route>


              <Route path="/home" exact component={HomeComponent}></Route>
              <Route path="/companyhome" exact component={CompanyHomeComponent}></Route>
              <Route path="/cars" component={ListCarDetailsComponent}></Route>
              <Route path="/ccars" component={ListCompanyCarComponent}></Route>
              <Route path="/dealers" component={ListDealerDetailsComponent}></Route>
              <Route path="/companys" component={ListCompanyDetailsComponent}></Route>
              <Route path="/ccompanys" component={ListCompanyCompanyComponent}></Route>
              <Route path="/customers" component={ListCustomerDetailsComponent}></Route>
              <Route path="/add-car/:id" component={AddCarComponent}></Route>
              <Route path="/add-ccar/:id" component={AddCarCComponent}></Route>
              <Route path="/add-dealer/:id" component={AddDealerComponent}></Route>
              <Route path="/add-customer/:id" component={CreateCustomerDetailsComponent}></Route>
              <Route path="/add-company/:id" component={AddCompanyComponent}></Route>
              <Route path="/add-ccompany/:id" component={AddCompanyCComponent}></Route>
              <Route path="/view-car/:id" component={ViewIncentive}></Route>
              <Route path="/view-ccar/:id" component={ViewCIncentive}></Route>
              {<Route path="/update-car/:id" component={UpdateCarDetailsComponent}></Route>}
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>


    </div>);

}

export default App;

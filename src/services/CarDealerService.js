import axios from 'axios';


class CarDealerService {

    getCars() {
        return axios.get("http://localhost:8686/api/getAllCars");
    }
    getDealers() {
        return axios.get("http://localhost:8686/api//getAllDealers");
    }
    getCustomers() {
        return axios.get("http://localhost:8686/api//getAllCustomerDetails");
    }
    getCompanys() {
        return axios.get("http://localhost:8686/api//getAllCompanys");
    }

    createCar(car) {
        return axios.post("http://localhost:8686/api/addCarDetails", car);

    }
    createDealer(dealer) {
        return axios.post("http://localhost:8686/api/addDealerDetails", dealer);
    }
    createCustomer(customer) {
        return axios.post("http://localhost:8686/api/addCustomerDetails", customer);
    }
    createCompany(company) {
        return axios.post("http://localhost:8686/api/addCompanyDetail", company);
    }

    getCarById(id) {
        return axios.get("http://localhost:8686/api/getCar" + '/' + id);
    }
    getDealerById(id) {
        return axios.get("http://localhost:8686/api/getDealer" + '/' + id);
    }
    getCustomerById(id) {
        return axios.get("http://localhost:8686/api/getCustomer" + '/' + id);
    }
    getCompanyById(id) {
        return axios.get("http://localhost:8686/api/getCompany" + '/' + id);
    }


    updateCar(car, id) {
        return axios.put("http://localhost:8686/api//updateCarDetails" + '/' + id, car);
    }
    updateDealer(dealer, id) {
        return axios.put("http://localhost:8686/api//updateDealerDetails" + '/' + id, dealer);
    }
    updateCustomer(customer, id) {
        return axios.put("http://localhost:8686/api//updateCustomerDetails" + '/' + id, customer);
    }
    updateCompany(company, id) {
        return axios.put("http://localhost:8686/api//updateCompanyDetails" + '/' + id, company);
    }
    deleteCar(id) {
        return axios.delete("http://localhost:8686/api/deleteCar" + '/' + id);
    }
    getIncentiveById(id) {
        return axios.get("http://localhost:8686/api/getIncentive" + '/' + id);
    }
}

export default new CarDealerService()
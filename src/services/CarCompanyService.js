import axios from 'axios';


class CarCompanyService {

    getCars() {
        return axios.get("http://localhost:8686/api/getAllCarDetail");
    }

    getCompanys() {
        return axios.get("http://localhost:8686/api//getAllCompanys");
    }

    createCar(car) {
        return axios.post("http://localhost:8686/api/addCarDetail", car);

    }

    createCompany(company) {
        return axios.post("http://localhost:8686/api/addCompanyDetail", company);
    }


    getCompanyById(id) {
        return axios.get("http://localhost:8686/api/getCompany" + '/' + id);
    }
    getCarById(id) {
        return axios.get("http://localhost:8686/api/viewCar" + '/' + id);
    }
    getIncentiveById(id) {
        return axios.get("http://localhost:8686/api/getIncentive" + '/' + id);
    }

    updateCar(car, id) {
        return axios.put("http://localhost:8686/api//updateCar" + '/' + id, car);
    }

    updateCompany(company, id) {
        return axios.put("http://localhost:8686/api//updateCompanyDetails" + '/' + id, company);
    }
}

export default new CarCompanyService()
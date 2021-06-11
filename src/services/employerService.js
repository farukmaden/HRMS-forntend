import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:5050/api/employers/getall")
    }
}
import axios from "axios"

export default class employeeService{
    getEmployee(){
        return axios.get("http://localhost:5050/*api/employee/getAll ")
    }
    addEmployee(values){
        return axios.post("http://localhost:5050/*api/employee/add",values)
    }
    updateEmployee(values){
        return axios.put("http://localhost:5050/*api/employee/update",values)
    }
}
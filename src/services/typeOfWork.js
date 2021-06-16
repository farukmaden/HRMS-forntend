import axios from "axios";

export default class TypeOfWorking{
    getTypeOfWorking(){
        return axios.get("http://localhost:5050/api/typeOfWork/getAll")
    }
}
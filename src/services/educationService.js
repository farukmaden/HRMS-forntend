import axios from "axios";

export default class educationService{
    addEducation(values){
        return axios.post("http://localhost:5050/*api/education/add",values)
    }
    updateEducatiın(values){
        return axios.put("http://localhost:5050/*api/education/update",values)
    }
}
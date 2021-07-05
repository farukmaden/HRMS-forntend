import axios from "axios";

export default class talentService{
    addTalent(values){
        return axios.post("http://localhost:5050/api/talent/add",values)
    }
    getTalnet(){
        return axios.get("http://localhost:5050/api/talent/getAll")
    }
    updateYalnet(values){
        return axios.put("http://localhost:5050/api/talent/update",values)
    }
}
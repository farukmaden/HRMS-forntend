import axios from "axios";

export default class cityService{
    getCity(){
        return axios.get("http://localhost:5050/api/cities/getAll")
    }
}
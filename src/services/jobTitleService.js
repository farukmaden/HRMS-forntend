import axios from "axios";

export default class JobTitleService{
    getJobTitle(){
        return axios.get("http://localhost:5050/api/titles/getall")
    }
}
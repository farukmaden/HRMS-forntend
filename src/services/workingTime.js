import axios from "axios";

export default class WorkingTime{
    getWorkingTime(){
        return axios.get("http://localhost:5050/api/workingTime/getAll")
    }
}
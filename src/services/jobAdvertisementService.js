import axios from "axios";

export default class jobAdvertisementService{
    getjobAdvertisements(){
        return axios.get("http://localhost:5050/api/jobAdvertisements/getall")
    }

    addjobAdvertisements(values){
        return axios.post("http://localhost:5050/api/jobAdvertisements/add",values)
    }
}
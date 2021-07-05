import axios from "axios";

export default class jobExperienceService{
    addJobExperience(values){
        return axios.post("http://localhost:5050/api/jobExperience/add",values)
    }
    updateJobExperiance(values){
        return axios.put("http://localhost:5050/api/jobExperience/update ",values)
    }
}
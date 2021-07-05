import axios from "axios";

export default class curriculumVitaeService{
    getCurriculumVitae(){
        return axios.get("http://localhost:5050/api/curriculumVitae/getAll")
    }
    addCurriculumVitae(values){
        return axios.post("http://localhost:5050/api/curriculumVitae/add",values)
    }
    addPhoto(values){
        return axios.post("http://localhost:5050/api/curriculumVitae/addPhoto",values)
    }
    updateCurriculumVitae(values){
        return axios.put("http://localhost:5050/api/curriculumVitae/update",values)
    }
}
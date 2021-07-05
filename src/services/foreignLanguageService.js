import axios from "axios";

export default class foreignLanguageService{
    addForeignLanguage(values){
        return axios.post("http://localhost:5050/api/foreignLanguage/add",values)
    }
    updateForeignLanguage(values){
        return axios.put("http://localhost:5050/api/foreignLanguage/update",values)
    }
}
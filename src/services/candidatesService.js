import axios from "axios";

export default class CandidateSerive{
    getCandidates(){
        return axios.get("http://localhost:5050/api/candidates/getall")
    }
}
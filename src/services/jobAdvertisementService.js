import axios from "axios";

export default class jobAdvertisementService{
    getjobAdvertisements(){
        return axios.get("http://localhost:5050/api/jobAdvertisements/getall")
    }

    addjobAdvertisements(values){
        return axios.post("http://localhost:5050/api/jobAdvertisements/add",values)
    }

    getFilterByCityAndTypeOfWork(cityId , typeOfWorkId,pageNo,pageSize){
        return axios.get("http://localhost:5050/api/jobAdvertisements/getAllFilterCityAndTypeOfWorking?cityId="+cityId+"&pageNo="+pageNo+"&pageSize="+pageSize+"&typeOfWorkId="+typeOfWorkId+"")
    }

    getFilterByCity(cityId,pageNo,pageSize){
        return axios.get("http://localhost:5050/api/jobAdvertisements/getAllFilterCityId?cityId="+cityId+"&pageNo="+pageNo+"&pageSize="+pageSize+"")
    }

    getFilterByTypeOfWork(typeOfWorkId,pageNo,pageSize){
        return axios.get("http://localhost:5050/api/jobAdvertisements/getAllFilterTypeOfWorkId?pageNo="+pageNo+"&pageSize="+pageSize+"&typeOfWorkId="+typeOfWorkId+"")
    }
    getAllActiveTruePageable(pageNo,pageSize){
        return axios.get("http://localhost:5050/api/jobAdvertisements/getAllIsActiveTruePageable?pageNo="+pageNo+"&pageSize="+pageSize+"")
    }
}
import axios from "axios";

class BaseHttpService {
    BASE_URL = "https://jsonplaceholder.typicode.com"

    async get(endpoint = "",page){
        try {
            const {data} = await axios.get(`${this.BASE_URL}/${endpoint}`)
            return data;
        }catch (e) {
            
        }
    }

    async post(endpoint="",body){
        try {
            const data  = await axios.post(`${this.BASE_URL}/${endpoint}`,body)
            console.log(data)
            return data;
        }catch (e) {

        }
    }

    async delete(endpoint="",id){
        try {
            const data  = await axios.delete(`${this.BASE_URL}/${endpoint}/${id}`)
            console.log(data)
            return data;
        }catch (e) {

        }
    }

    async patch(endpoint= "",id,completed){
        const body = {
            completed
        }
        try {
            const data = axios.patch(`${this.BASE_URL}/${endpoint}/${id}`,body)
            return data;
        }catch (e) {

        }
    }
}

export default BaseHttpService;
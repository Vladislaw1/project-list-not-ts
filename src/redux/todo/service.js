import BaseHttpService from "../../shared/service/base-http-service";

export class TaskService extends BaseHttpService{

    async getTodo(endpoint,page){
        try {
            const data = await this.get(`${endpoint}?_page=${page}&_limit=10`)
            return data
        }catch (e) {

        }
    }

    async deleteTodo(endpoint,id){
        try {
            const data = await this.delete(endpoint,id)
            return data
        }catch (e) {

        }
    }

    async addTodo(endpoint,body){
        try {
            const {data} = await this.post(endpoint,body)
            return data
        }catch (e) {
            
        }
    }

    async patchTodo(endpoint,id,body){
        try {
           const {data} = await this.patch(endpoint,id,body)
            return data
        }catch (e) {

        }
    }
}
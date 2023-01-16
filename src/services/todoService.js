import {axiosService} from "./axiosService";
import {urls} from "../configs";

const todoService = {
    getAll:() => axiosService.get(urls.todo)
}

export {
    todoService
}
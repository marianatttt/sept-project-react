import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService =  {
    getAll :(id) => axiosService.get(urls.postById(id))
}

export {
    postsService
}
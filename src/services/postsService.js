import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService =  {
    getPostId :(id) => axiosService.get(urls.postById(id))
}

export {
    postsService
}
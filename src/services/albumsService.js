import {axiosService} from "./axiosService";
import {urls} from "../configs";

const albumsService = {
    getAll:()=> axiosService.get(urls.album)
}

export {
    albumsService
}
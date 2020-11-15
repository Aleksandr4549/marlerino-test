import { instance } from './api';

export const appsAPI = {
    getCharsets(countPage = 1) {
        return instance.get(`character/?page=${countPage}`);
    }
};
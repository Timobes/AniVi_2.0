import axios from "axios";

const BACKURL = 'http://localhost:8080/api/'

export class AnimeApi {
    async getOneAnime (id) {
        const res = await axios.get(`${BACKURL}anime/${id}`)

        return res.data
    }
}
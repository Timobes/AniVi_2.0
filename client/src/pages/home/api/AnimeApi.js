import axios from "axios";

const BACKURL = 'http://localhost:8080/api/'

export class AnimeApi {
    async getAllAnime () {
        const res = await axios.get(`${BACKURL}anime/`)

        return res.data
    }
}
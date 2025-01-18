import axios from "axios";

const BACKURL = 'http://localhost:8080/api/'

export class ProfileApi {
    async getProfile() {
        const res = await axios.get(`${BACKURL}auth/profile`,
        {
            withCredentials: true,
        })
        console.log('res = ',res.data)
        return res.data
    }

}
import axios from "axios";

const BACKURL = 'http://localhost:8080/api/'

export class AuthApi {
    async register(username, pass, repeatPass) {
        console.log('logs = ',username, pass, repeatPass)
        const res = await axios.post(`${BACKURL}auth/login`, {
            username, pass, repeatPass
        }, {
            withCredentials: true,
        })
        console.log('res = ',res)
        return res.data
    }

    async auth(username, pass) {
        console.log('logs = ',username, pass)

        const res = await axios.post(`${BACKURL}auth/auth`, {
            username, pass
        }, {
            withCredentials: true,
        })
        
        console.log('res = ',res)
        
        return res.data
    }

    async exit() {
        const res = await axios.get(`${BACKURL}auth/exit`, {
            withCredentials: true
        })

        console.log(res.data)

        return res.data
    }
}
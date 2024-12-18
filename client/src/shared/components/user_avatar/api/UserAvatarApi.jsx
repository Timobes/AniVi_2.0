'use server';

import axios from "axios";

const BACKURL = 'http://localhost:8080/api/'

export class AvatarUserApi {
    async getAvatar (id) {
        const res = await axios.get(`${BACKURL}user/avatar/${id}`, {
            withCredentials: true,
        })
        return res.data
    }

}

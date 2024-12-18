'use server';

import axios from "axios";

const BACKURL = 'http://localhost:8080/api/'

export class AvatarUserApi {
    async getMyAvatar () {
        const res = await axios.get(`${BACKURL}user/my/avatar/`, {
            withCredentials: true,
        })
        return res.data
    }

}

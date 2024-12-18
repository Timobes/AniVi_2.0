import { useEffect, useState } from "react";
import { AvatarUserApi } from "../api/UserAvatarApi";

import './style.css'

export const UserAvatar = () => {
    const [data, setData] = useState()
    
    const avatarApi = new AvatarUserApi()

    const userID = 27

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const res = await avatarApi.getAvatar(userID);
                setData(res.message)
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchAvatar()
    }, [])

    console.log(data)

    return (  
        <>
            <a href="/" className="avatar">
                <img src={data} alt="user logo" />
            </a>         
        </>
    );
}
 
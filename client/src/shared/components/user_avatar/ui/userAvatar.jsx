import { useEffect, useState } from "react";
import { AvatarUserApi } from "../api/UserAvatarApi";

import './style.css'
import { Link } from "react-router";
import { useAuthStore } from "../../../../app/state/store";

export const UserAvatar = () => {
    const [data, setData] = useState()
    
    const avatarApi = new AvatarUserApi()

    const stateAuth = useAuthStore((state) => state.isAuth)

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const res = await avatarApi.getMyAvatar();
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
            {
                stateAuth 
                    ?
                        <Link to={"/profile"} className="avatar">
                            <img src={data} alt="user logo" />
                        </Link>
                    :
                        <Link to={"/reg"}>
                            Зарегистрироваться!
                        </Link>
            }
            
        </>
    );
}
 
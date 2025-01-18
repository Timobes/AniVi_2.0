import { useEffect, useState } from "react";
import { ProfileApi } from "../api/ProfileApi";
import { ExitBtn } from "../../../features/auth/components/exitBtn";
import { useAuthStore } from "../../../app/state/store";

export const Profile = () => {
    const [data, setData] = useState([])

    const profileApi = new ProfileApi();

    const stateAuth = useAuthStore((state) => state.isAuth)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await profileApi.getProfile();
                setData([res.rows])
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile(); 
    }, [])

    console.log("data = ", data)

    return (  
        <div>
            {
                stateAuth 
                    ?
                        data.map((user) => (
                            <div key={user.user_id}>
                                Name = {user.username},
                                <br />
                                Bio = {user.bio},
                                <br />
                                Role = {user.role}
                                <br />
                                <ExitBtn />   
                            </div>
                        ))
                    :
                            <h1>Вы не вошли в аккаунт!</h1>
            }
        </div>
    );
}
 
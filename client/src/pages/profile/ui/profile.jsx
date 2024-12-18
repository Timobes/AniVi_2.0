import { useEffect, useState } from "react";
import { ProfileApi } from "../api/ProfileApi";

export const Profile = () => {
    const [data, setData] = useState([])

    const profileApi = new ProfileApi();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await profileApi.getProfile();
                setData(prevData => [...prevData, res.rows])
                console.log('response = ', res.rows);
                console.log('data = ', data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile(); 
    }, [])


    return (  
        <div>
            {
                data.map((user) => (
                    <div key={user.user_id}>
                        Name = {user.username},
                        <br />
                        Bio = {user.bio},
                        <br />
                        Role = {user.role}   
                    </div>
                ))
            }
        </div>
    );
}
 
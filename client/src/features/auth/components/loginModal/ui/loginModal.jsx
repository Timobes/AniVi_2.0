import { useState } from "react"
import { AuthApi } from "../../../api/authApi"

export const LoginModal = () => {
    
    const [data, setData] = useState([])

    const [nickname, setNickname] = useState()
    const [pass, setPass] = useState()

    const authApi = new AuthApi();
    
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await authApi.auth(nickname, pass);
            setData(response);
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }


    return (  
        <form onSubmit={submit}>
            <input type="text" placeholder="Никнэйм" onChange={e => setNickname(e.target.value)}/>
            <br />
            <input type="password" placeholder="Пароль" onChange={e => setPass(e.target.value)}/>
            <br />
            <button type="submit">Отправить</button>
        </form>
    );
}
 
import { useEffect, useState } from "react";
import { AuthApi } from "../../../api/authApi";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../../../../../app/state/store";

export const RegisterModal = () => {
    let navigate = useNavigate();

    const [data, setData] = useState([])

    const [nickname, setNickname] = useState()
    const [pass, setPass] = useState()
    const [rePass, setRePass] = useState()

    const stateAuth = useAuthStore((state) => state.isAuth)

    const authApi = new AuthApi();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await authApi.register(nickname, pass, rePass);
            setData(response);
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (stateAuth) {
            navigate('/')
        }
    }, [])

    return (  
        <form onSubmit={submit}> 
            <input type="text" placeholder="Никнэйм" onChange={e => setNickname(e.target.value)}/>
            <br />
            <input type="password" placeholder="Пароль" onChange={e => setPass(e.target.value)}/>
            <br />
            <input type="password" placeholder="Повторный пароль" onChange={e => setRePass(e.target.value)}/>
            <br />
            <button type="submit">Отправить</button>
            
            <br />
            Уже есть аккаунт?
            <br />
            <Link to={"/login"}>Войти</Link>
        </form>
    );
}
 
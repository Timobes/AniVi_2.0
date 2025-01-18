import { useEffect, useState } from "react"
import { AuthApi } from "../../../api/authApi"
import { useAuthStore } from "../../../../../app/state/store"
import { Link, useNavigate } from "react-router"

export const LoginModal = () => {
    let navigate = useNavigate();

    const [data, setData] = useState([])

    const [nickname, setNickname] = useState()
    const [pass, setPass] = useState()

    const stateAuth = useAuthStore((state) => state.isAuth)

    const setStateAuthIsLogin = useAuthStore((state) => state.auth)

    const authApi = new AuthApi();
    
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await authApi.auth(nickname, pass);
            setData(response);
            setStateAuthIsLogin()
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

    console.log(stateAuth)

    return (  
        <form onSubmit={submit}>
            <input type="text" placeholder="Никнэйм" onChange={e => setNickname(e.target.value)}/>
            <br />
            <input type="password" placeholder="Пароль" onChange={e => setPass(e.target.value)}/>
            <br />
            <button type="submit">Отправить</button>

            <br />
            Нет аккаунта?
            <br />
            <Link to={"/reg"}>Зарегистрироваться</Link>
        </form>
    );
}
 
import { useAuthStore } from "../../../../../app/state/store";
import { AuthApi } from "../../../api/authApi";

export const ExitBtn = () => {
    
    const authApi = new AuthApi()    

    const setStateAuthIsExit = useAuthStore((state) => state.resetAuth)

    const exit = async () => {
        let q = window.confirm('Вы уверены, что хотите выйти из аккаунта?')
        if (q) {
            const response = await authApi.exit()
            setStateAuthIsExit()
            console.log(response)
        }
    }

    return (  
        <>
            <button onClick={exit}>Выйти</button>    
        </>
    );
}
 
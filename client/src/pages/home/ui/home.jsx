import { LoginModal } from '../../../features/auth/components/loginModal';
import { RegisterModal } from '../../../features/auth/components/registerModal';
import { Header } from '../../../shared/components/header';
import { Profile } from '../../profile';
import './style.css'

export const HomePage = () => {
    return (  
        <>
            <Header />
            <main>
                <RegisterModal />
                <hr />
                <LoginModal />
                <hr />
                <hr />
                <hr />
                <hr />
                <Profile />
            </main>
        </>
    );
}


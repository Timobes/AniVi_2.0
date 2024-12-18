import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home";
import { Header } from "../../shared/components/header";
import { Profile } from "../../pages/profile";
import { RegisterModal } from "../../features/auth/components/registerModal";
import { LoginModal } from "../../features/auth/components/loginModal";

export const Router = () => {
    return (  
        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/profile" element={<Profile />} />

                {/* auth */}
                <Route path="/reg" element={<RegisterModal />} />
                <Route path="/login" element={<LoginModal />} />

                <Route path="*" element={<h1>Error!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
 
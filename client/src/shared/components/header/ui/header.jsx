import { Logo } from '../../logo';
import { UserAvatar } from '../../user_avatar';
import './style.css'

export const Header = () => {
    return (  
        <header className="header">
            <Logo link={"/"}/>

            <div>text1</div>

            <div>text2</div>

            <div>text3</div>

            <div>text4</div>

            {/* search */}

            {/* random anime btn */}

            {/* user nickname */}

            {/* user avatar */}
            <UserAvatar />
        </header>
    );
}
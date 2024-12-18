import logo from '../images/AniVi_logo.png'
import './style.css'

export const Logo = (props) => {
    return (
        <a href={props.link} className="img">
            <img src={logo} alt="logo" />
        </a>  
    );
}
 
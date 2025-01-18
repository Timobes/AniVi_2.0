import { Link } from 'react-router';
import logo from '../images/AniVi_logo.png'
import './style.css'

export const Logo = (props) => {
    return (
        <Link to={props.link}>    
            <img src={logo} alt="logo" />
        </Link>  
    );
}
 
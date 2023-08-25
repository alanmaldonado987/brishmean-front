import '../../styles/Narvbar.css';
import logo from '../../assets/logo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navbar = () =>{
    return(
        <>
            <div className='navbar'>
                <div className='img_container'>
                    <img src= {logo} className='logo' />
                </div>
                <div className='menu_container'>
                    <ul>
                        <li>Help</li>
                        <li>Contact Us</li>
                        <li>English <ArrowDropDownIcon/> </li>
                        <li>Sing Up</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
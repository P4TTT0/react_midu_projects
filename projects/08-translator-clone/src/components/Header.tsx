import './Header.css';
import MenuIcon from '@mui/icons-material/Menu'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import googleLogo from './../assets/google_logo.png';
import userImage from './../assets/user_default_image.jpeg';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

const Header = () => {
    return(
        <header>
            <div className='items'>
                <button>
                    <MenuIcon/>
                </button>
                <img src={googleLogo} alt="Google logo image" />
                <span className='header-span'>Traductor</span>
            </div>
            <div className='items'>
                <button>
                    <SettingsOutlinedIcon />
                </button>
                <button>
                    <AppsRoundedIcon/>
                </button>
                <button>
                    <img className='user-image' src={userImage} alt="" />
                </button>
            </div>
        </header>
    );
}

export default Header;
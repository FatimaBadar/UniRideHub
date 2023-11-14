import Navbar from "./Navbar";
import bgHeaderImg from '../assets/carpool-header.png'

const Header = (props) => {

    const links = ['Home']

    return (
        <>
            <Navbar links={links} button="Login" />
            <div className="d-flex align-items-center justify-content-center w-100">
                <img src={bgHeaderImg} alt="Carpool Background" className="img-fluid" />
            </div>
          
        </>
    )
}

export default Header;
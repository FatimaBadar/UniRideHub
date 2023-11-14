import { useEffect, useState } from "react";
import './css/navbar.css';

const Navbar = (props) => {
    
    const [navLinks, setNavlinks] = useState([]);
    const [navBtn, setNavBtn] = useState('');

    useEffect(() => {
        setNavlinks(props.links);
        setNavBtn(props.button);
    }, []);


    return (
        <nav className="navbar navbar-expand-sm sticky-top" style={{backgroundColor: '#219ebc', padding: '10px 15px'}}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">UniRideHub</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-5" id="navbarNav">
                <ul className="navbar-nav w-50 text-white">
                    
                    {
                        navLinks.map((link, key) => (
                            <li key={key} className="nav-item mx-2">
                                <a className="nav-link text-white active" aria-current="page" href="#" style={{fontFamily: 'Roboto, sans-serif'}}>{link}</a>
                            </li>
                        ))
                    }
                    
                    <li className="nav-item mx-2">
                        <a className="nav-link login-btn btn btn-primary" href="#" style={{backgroundColor: '#FFB703', padding: '5px 15px', fontFamily: 'Roboto, sans-serif', border: 'none'}}>{navBtn}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
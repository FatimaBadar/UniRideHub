import './css/hero.css';
import { useNavigate, Link } from 'react-router-dom';

const Hero = (props) => {
    const navigate = useNavigate();

    const {
        title, 
        subtitle, 
        description, 
        link,
        nav
    } = props;


    return (
        <div className="jumbotron shadow mb-5 bg-body rounded">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{subtitle}</p>
            <hr className="my-4" />
            <p>{description}</p>
            <p className="lead">
                {/* <a 
                    className="btn btn-main hero-btn" 
                    href="#" 
                    role="button"
                    // onClick={navigate(nav)}
                >
                    {link}
                </a> */}
                <Link to={nav} className='btn btn-main hero-btn'>{link}</Link>
            </p>
            {
                props.extraLink ?     
                <p className="lead">
                    <Link 
                        to={props.extranav} 
                        className='btn btn-primary hero-btn'
                    >
                        {props.extraLink}
                    </Link>
                    {/* <a 
                        className="btn btn-primary hero-btn" 
                        href="#" 
                        role="button"
                        // onClick={navigate(props.extranav)}
                    >
                            {props.extraLink}
                    </a> */}
                </p>
                : 
                null
            }
        </div>
    );
}

export default Hero;
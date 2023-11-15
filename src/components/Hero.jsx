import './css/hero.css';

const Hero = (props) => {

    const {
        title, 
        subtitle, 
        description, 
        link
    } = props;

    

    return (
        <div className="jumbotron shadow mb-5 bg-body rounded">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{subtitle}</p>
            <hr className="my-4" />
            <p>{description}</p>
            <p className="lead">
                <a className="btn btn-main hero-btn" href="#" role="button">{link}</a>
            </p>
            {
                props.extraLink ?     
                <p className="lead">
                    <a className="btn btn-primary hero-btn" href="#" role="button">{props.extraLink}</a>
                </p>
                : 
                null
            }
        </div>
    );
}

export default Hero;
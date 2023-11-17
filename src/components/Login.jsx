const Login = (props) => {

    return (
        <form>
            <h3 style={{textAlign: 'center', margin: '30px 0px'}}>Sign In</h3>
            <div className="mb-3">
                <label style={{width: '280px'}}>Phone number</label>
                <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label >Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="mb-3 d-flex justify-content-between align-center">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
                <p className="forgot-password">
                    <a href="#">Forgot password?</a>
                </p>
            </div>
            <div className="d-grid ">
                <button type="submit" className="btn btn-primary" style={{width: '120px'}}>
                    Submit
                </button>
            </div>
            
            <div className="d-grid mt-5">
                <a href="#" onClick={() => {
                    return props.handleRegister()
                }}>
                    Don't have an account? Create one
                </a>
            </div>


        </form>
    )
}

export default Login
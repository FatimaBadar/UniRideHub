const Signup = (props) => {

    return (
        <form>
            <h3 style={{textAlign: 'center', margin: '30px 0px'}}>Sign Up</h3>
            <div className="mb-3">
                <label style={{width: '280px'}}>Phone number</label>
                <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                />
            </div>
            <div className="mb-3">
                <label >First Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First name"
                />
                
                <label className='mt-2' >Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last name"
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
            <div className="mb-3">
                <label >Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Re enter password"
                />
            </div>
            <div className="d-grid mt-5">
                <button type="submit" className="btn btn-primary" style={{width: '120px'}}>
                    Submit
                </button>
            </div>
            
            <div className="d-grid mt-5">
                <a href="#" onClick={() => {
                    return props.handleRegister
                }}>
                    Already have an account? Sign in
                </a>
            </div>


        </form>
    )
}

export default Signup;
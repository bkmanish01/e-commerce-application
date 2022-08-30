import React from 'react';
import { NavLink }  from 'react-router-dom';

const Login = () => {
    return (
        <div className="container-fluid text-white py-lg-5">
            <NavLink to="/" className="btn ms-2">
                <i className="fa fa-arrow-left me-1 bg-dark text-white border py-2 px-3 rounded-pill"> Back To Home</i>
            </NavLink>
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark col-md-6">
                    <div className="card-header text-center fs-1 fw-bolder">
                       Login Here!
                    </div>
                    <div className="card-body py-5">
                        <form>
                            <div className="form-group col-md-6 ms-2">
                                <label for="inputEmail4">Email / Username</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6 ms-2">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6 ms-2">
                                <label for="inputPassword4">Confirm Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" className="btn btn-success my-3 ms-2">Submit</button>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                    <p className="text-white">Don't have an account?
                        <span>
                        <NavLink to="/signup">
                            <i className="text-white"> Create Here</i>
                        </NavLink>
                        </span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
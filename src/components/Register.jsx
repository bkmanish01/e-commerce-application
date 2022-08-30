import React from 'react';
import { NavLink }  from 'react-router-dom';

const Register = () => {
    return (
        <div className="container-fluid text-white py-lg-5">
            <NavLink to="/" className="btn ms-2">
                <i className="fa fa-arrow-left me-1 bg-dark text-white border py-2 px-3 rounded-pill"> Back To Home</i>
            </NavLink>
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark col-md-6">
                    <div className="card-header text-center fs-1 fw-bolder">
                        Create Account Here!
                    </div>
                    <div className="card-body py-5">
                        <form>
                            <div className="form-row d-flex">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6 ms-2">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-row d-flex my-3">
                                <div className="form-group col-md-6">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-group col-md-6 ms-2">
                                    <label for="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Denver" />
                                </div>
                            </div>
                            <div className="form-row my-3">
                                <div className="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <input type="text" className="form-control" id="inputState" placeholder="CO" />
                                </div>
                                <div className="form-group col-md-2  my-3">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" placeholder="88888" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                    <p className="text-white">Already have an account?
                        <span>
                        <NavLink to="/login">
                            <i className="text-white"> Log In</i>
                        </NavLink>
                        </span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

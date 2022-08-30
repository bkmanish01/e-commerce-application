import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid text-white text-center" id="footer">
            <div className="row">
                <div className="col-md-4 mt-3">
                <h6>Our Location:</h6>
                <p>2222 New York St, Suite 140 <br />Denver, Colorado, 20202</p>
                </div>
                <div className="col-md-4 mt-3">
                    <h6>Follow Us:</h6>
                    <i className="fa fa-google fs-5"></i>
                    <i className="fa fa-facebook fs-5 ms-3"></i>
                    <i className="fa fa-instagram fs-5 ms-3"></i>
                    <i className="fa fa-youtube fs-5 ms-3"></i>
                    <i className="fa fa-twitter fs-5 ms-3"></i>
                </div>
                <div className="col-md-4 mt-3">
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-white">Copyrights &copy; 2022 Global Mart | All Rights Reserved.</p>
        </div>
    );
};

export default Footer;

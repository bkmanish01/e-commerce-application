import React from 'react';


const Contact = () => {
    return (
       <div className="container-fluid text-white" id="contact">
        <div className="card bg-dark">
        <h1 className="display-6 fw-bolder text-center">Contact Us</h1>
        <hr />
        <div className="row d-flex justify-content-center pb-5">
            <div className="col-md-5 py-5">
                <img src="/images/google_map_01.jpg" alt="google map" />
            </div>
            <div className="col-md-4 py-5 my-4">
                <form>
                    <h5>Send us a message</h5>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="email" className="form-control" placeholder="999-888-7777" />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea className="form-control" rows="3" placeholder="type something..."></textarea>
                    </div>
                    <button className="btn btn-success my-2">Send</button>
                </form>
            </div>
        </div>            
        </div>
       </div>
    );
};

export default Contact;

import React from 'react';


const Contact = () => {
    return (
       <div className="container-fluid mb-3 text-white" id="contact">
            <div className="card bg-dark p-5">
            <h1 className="display-6 fw-bolder text-center">Contact Us</h1>
            <div className="row d-flex justify-content-center pb-5">
                <div className="col-md-5 py-5">
                    <img src={"./images/fall_collection_02.jpg"} alt="google map" style={{borderRadius:"20px"}}/>
                </div>
                <div className="col-md-4 p-5 my-4" style={{border:"1px solid black", borderRadius:"20px", letterSpacing:"2px"}}>
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

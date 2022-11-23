import React from 'react';



const About = () => {
    return (
       <div className="container-fluid text-white pb-3" id="about">
        <div className="card bg-dark p-5">
            <h1 className="display-6 fw-bolder text-center py-3">About Us</h1>
            <div className="row">
                <div className="col-md-6 py-5 text-center">
                    <img src={"./images/shopping_center.jpg"} alt="about-us" style={{borderRadius:"20px"}}/>
                </div>
                <div className="col-md-6 py-5 px-4">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nostrum tempora 
                        iusto accusantium sapiente eaque architecto delectus laborum libero sed veritatis, 
                        fugit autem quisquam error quos est, maiores quam asperiores?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat accusamus ratione maiores 
                        veniam? Vero labore rerum eaque fugiat nulla esse ducimus voluptates? Enim aspernatur deleniti, 
                        reprehenderit ullam ea assumenda!
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Obcaecati iste animi temporibus possimus tenetur esse commodi labore eos harum id!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat accusamus ratione maiores 
                        veniam? Vero labore rerum eaque fugiat nulla esse ducimus voluptates? Enim aspernatur deleniti, 
                        reprehenderit ullam ea assumenda!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 py-5 px-4">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nostrum tempora 
                        iusto accusantium sapiente eaque architecto delectus laborum libero sed veritatis, 
                        fugit autem quisquam error quos est, maiores quam asperiores?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat accusamus ratione maiores 
                        veniam? Vero labore rerum eaque fugiat nulla esse ducimus voluptates? Enim aspernatur deleniti, 
                        reprehenderit ullam ea assumenda!
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Obcaecati iste animi temporibus possimus tenetur esse commodi labore eos harum id!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat accusamus ratione maiores 
                        veniam? Vero labore rerum eaque fugiat nulla esse ducimus voluptates? Enim aspernatur deleniti, 
                        reprehenderit ullam ea assumenda!
                    </p>
                </div>
                <div className="col-md-6 py-5 text-center">
                    <img src={"./images/shoppings_center.jpg"} alt="about-us" style={{ borderRadius:"20px"}}/>
                </div>
            </div>
        </div>
       </div>
    );
};

export default About;

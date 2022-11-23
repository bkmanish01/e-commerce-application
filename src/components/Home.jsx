import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";


const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home" id="home">
      <div className="card bg-dark text-white border-0">
        <img src={"./images/fall_collection_01.jpg"} className="card-img" alt="home-background"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVAL IS HERE...</h5>
                <p className="card-text lead fs-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat, eos, sit eaque ad ratione 
                    veritatis voluptas nemo cumque atque suscipit temporibus officiis odit consequatur facilis nam id. Quo, molestias.
                </p>
            </div>
        </div>
      </div>
    </div>
    <Products />
    <About />
    <Contact />
    <Footer />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";



const Products = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState(false);




    useEffect(() => {
        const getData = async () => {
        setLoading(true);

        await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
                setFilter(res.data);
            })
            .catch((err) => {
                return err.message;
            })
            .finally(() => {
                setLoading(false);
            });
        };

        getData();

    }, []);

    const Loading = () => {
        return (
            <>
                <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        );
    };

    const DisplayProducts = () => { 
        
        const filterProducts = (cat) => {
            const updatedItems = products.filter((item) => item.category === cat);
            setFilter(updatedItems);
        };


        return (
            <>
                <div className="container d-flex justify-content-center ">
                    <button
                        type="buttons"
                        onClick={() => setFilter(products)}
                        className="btn btn-outline-warning me-2 text-white"
                    >
                        Show All
                    </button>
                    <button
                        type="buttons"
                        onClick={() => filterProducts("men's clothing")}
                        className="btn btn-outline-warning me-2 text-white"
                    >
                        Men's Wear
                    </button>
                    <button
                        type="buttons"
                        onClick={() => filterProducts("women's clothing")}
                        className="btn btn-outline-warning me-2 text-white"
                    >
                        Girl's Wear
                    </button>
                    <button
                        type="buttons"
                        onClick={() => filterProducts("jewelery")}
                        className="btn btn-outline-warning me-2 text-white"
                    >
                        Jewelery
                    </button>
                    <button
                        type="buttons"
                        onClick={() => filterProducts("electronics")}
                        className="btn btn-outline-warning me-2 text-white"
                    >
                        Electronics
                    </button>
                </div>

                {
                    filter.map((product) => {
                        return (   
                            <div className="col-md-2 m-3" key={product.id}>
                                <div className="card text-center text-dark p-4 product-box">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <Link to={`/products/${product.id}`}  className="btn btn-success buy-btn" >Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    };

    return (

        <>
        <div id="products">
            <div className="container-fluid text-white py-2">
                <div className="card bg-dark">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 fw-bolder text-center">
                            Our Latest Products
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center pb-5">
                        {loading ? <Loading /> : <DisplayProducts />}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Products;

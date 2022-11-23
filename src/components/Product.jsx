import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';
import { useParams } from 'react-router';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addItem(product));
    }


    useEffect(() => {
        const getProduct = async () => {
        setLoading(true);

        await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                return err.message;
            })
            .finally(() => {
                setLoading(false);
            });
        };

        getProduct();

    }, [id]);

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

    const DisplayItem = () => { 
        return (
            <>
                <Navbar />
                <div className="row" style={{letterSpacing:"2px", background:"#B2B2B2", height:"100vh"}}>
                <div className="col-md-6 d-flex justify-content-center py-3">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6 py-3">
                    <h4 className="text-uppercase">{product.category}</h4>
                    <h1 className="display-6">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}&nbsp;&nbsp; 
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bolder my-4">${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-warning text-white fw-bold" onClick={() => addProduct(product)}>Add To Cart</button>
                    <NavLink to="/">
                        <button className="btn btn-danger fw-bold ms-2">Go Back</button>
                    </NavLink>
                </div>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {loading ? <Loading/> : <DisplayItem/>}
                </div>
            </div>
        </div>
    );
};

export default Product;

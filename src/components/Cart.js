import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteItem, addItem, minusItem } from '../redux/action';
import { NavLink } from 'react-router-dom';


const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  
  const dispatch = useDispatch();

  const delProduct = (product) => {
      dispatch(deleteItem(product));
  }
  const addProduct = (product) => {
      dispatch(addItem(product));
  }
  const minusProduct = (product) => {
      dispatch(minusItem(product));
  }

  return (
    <div className="container-fluid py-5">
        <h1 className="text-center fw-bolder text-decoration-underline">Your Shopping Cart:</h1>
        <NavLink to="/" className="btn ms-2">
            <i className="fa fa-arrow-left me-1 bg-dark text-white border py-2 px-3 rounded-pill"> Back To Products</i>
        </NavLink>
        <NavLink to="#" className="btn float-end">
            <i className="fa fa-credit-card me-1 bg-dark text-white border py-2 px-3 rounded-pill"> Checkout</i>
        </NavLink>

      {
        state.length <= 0 ? <h2 className="text-center my-5">No item in the cart.</h2> :
        state.map((x) => {
            const total = (x.qty * x.price).toFixed(2);
            return (
                <div className="row py-3 my-4 bg-info" key={x.id}>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={x.image} alt={x.title} height="200px" width="200px"/>
                    </div>
                    <div className="col-md-5">
                        <h1 className="display-6">{x.title}</h1>
                        <h3 className="display-6">Price: ${x.price} <span className="ms-5">Qty: {x.qty}</span></h3>
                        <h3 className="display-6">Total: <span className="fw-bold">${total}</span></h3>
                        <button className="btn btn-success text-white fw-bold ms-2" onClick={() => addProduct(x)}><i className="fa fa-plus"></i></button>
                        <button className="btn btn-danger text-white fw-bold ms-2"  onClick={() => minusProduct(x)}><i className="fa fa-minus"></i></button>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-trash fs-4 ms-5 text-dark" onClick={() => delProduct(x)}></i>
                    </div>
                </div>
            );
        })
      }

    </div>
  );
};

export default Cart;

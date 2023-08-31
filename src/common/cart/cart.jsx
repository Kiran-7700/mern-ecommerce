import React, { useEffect, useState } from 'react'
import Layout from '../../Pages/pages';
import { useCart } from '../../context/cart';
import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css"

function Cart() {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem("cart")) || [];



  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInc = (pid) => {
    const updatedCart = carts?.map((item) => {
        if (item.id === pid) {      
           item.quantity= item.quantity + 1 
        }
        return item;
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate("/cart")
}

const handleDec = (pid) => {
    const updatedCart = carts?.map((item) => {
        if (item.id === pid) {
            return {
                
                quantity: item.quantity-1
            }
        }
        return item;
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate("/cart")
}

useEffect(() => {
  const total = carts.reduce((acc, item) => {
      return acc + (parseInt(item.price) * parseInt(item.quantity));
  }, 0)
  setTotal(total)
}, [carts])

  return (
    <Layout>
      <div className=" cart-page">
        <div className="name_and_cart_info">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ?
                  `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout !" 
                    
                  }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        
          <div className="carts_and_total">
            <div className="added_carts">
              {auth?.user && carts?.map((p) => (
                <div className="single_cart" key={p._id}>
                  <div className="">
                    <img
                      src={`https://ecom-back-1.onrender.com/api/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                  </div>
                  <div className="cart_right_side">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : ${p.price}</p>
                    <div className='inc_dec'>
                    <button className='inc_btn' onClick={() => handleInc(p._id)}>+</button>
                    <input value={p.quantity} className='show_product_count'/>
                    <button className='dec_btn'   onClick={() => handleDec(p._id)}>-</button>
                    </div>
                    <button
                      className="remove-cart-btn"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="price_related_info">
              <h2>Cart Summary</h2>
              <p>Total | Checkout </p>
              <hr />
              <h4>Total : {totalPrice()} </h4>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Cart;
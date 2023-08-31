import Layout from '../../../Pages/pages';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Ipad() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCat();
  });
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/product/get-product`
      );
      setProducts(data?.products);
      // setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {/* {products.filter((p)=>{ return p.category==="Mac"}).map((p) => (
        <div className="product-card" style={{ width: "18rem" }}>
          <img
            src={`http://localhost:5001/api/product/product-photo/${p._id}`}
            className="card-img-top"
            alt={p.name}
          />
          <hr />
          <div className="card-body">
            <div className="price_name_flex">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">$ {p.price}</p>
            </div>
            <p className="card-text">{p.description.substring(0, 30)}</p>
            <div className='cards-btn'>
              <button
                className='more-detail-btn'
             >More Details</button>
              <button className='add-to-cart-btn'>Add To Cart</button>
            </div>
          </div>
        </div>
      ))} */}
    </Layout>
  )
}

export default Ipad;
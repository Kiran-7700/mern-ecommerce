import React from 'react'
import Layout from './pages'
import { useSearch } from "../context/Search";
import { Link } from 'react-router-dom';

function Search() {
    const [values, setValues] = useSearch();
    return (
        <Layout title={"Search results"}>
      <div className="container">
        <div className="search_result_heading">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
                 <div className='show-all-products'>
            {values?.results.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="product-card" style={{ width: "18rem" }}>
                  <img
                    src={`https://ecom-back-1.onrender.com/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <hr />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                    <p className="card-text">$ {p.price}</p>
                    <div className='cards-btn'>
                      <button className='more-detail-btn'>More Details</button>
                      <button className='add-to-cart-btn'>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
    )
}

export default Search
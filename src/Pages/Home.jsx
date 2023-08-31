import React, { useState, useEffect } from 'react'
import Layout from './pages'
import Slider from '../components/Slider/Slider'
import { useAuth } from '../context/auth'
import "./Home.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Checkbox, Radio } from "antd";
import { Prices } from '../components/Prices'
import { AiOutlineReload } from "react-icons/ai";
import {useCart} from "../context/cart"
import { toast } from 'react-hot-toast'


function Home() {
  const [auth] = useAuth();
  const navigate = useNavigate();
   const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);



  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://ecom-back-1.onrender.com/api/category/get-category")
      if (data?.success) {
        setCategories(data?.category)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategory()
    getTotal()
  }, [])


  //get products
  const getAllProducts = async () => {
    try {
       setLoading(true);
      const { data } = await axios.get(`https://ecom-back-1.onrender.com/api/product/product-list/${page}`);
       setLoading(false);
      setProducts(data.products);
    } catch (error) {
       setLoading(false);
      console.log(error);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };


  //get filter product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("https://ecom-back-1.onrender.com/api/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);



  //getTotal Count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("https://ecom-back-1.onrender.com/api/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);


  //load more
 const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://ecom-back-1.onrender.com/api/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout title={"Home-E_commerce_app"}>
      <Slider />
      <div className='home-page-second-container'>
        <div className='filtaration'>
          {/* banner image */}
          <h4>Filter By Category</h4>
          <div className="all_category_column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          {/* price filter */}
          <div className="filter-price">
            <h4 className="">Filter By Price</h4>
            <div >
              <Radio.Group onChange={(e) => setRadio(e.target.value)} >
                {Prices?.map((p) => (
                  <div key={p._id} className='price-radio-btn'>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>

          <div className="reset-filter-btn">
            <button
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>




        {/* right side */}
        <div className='all-products-show'>
          <h1>All Products</h1>
          <div className='show-all-products'>
            {products?.map((p) => (
             
                <div className="product-card" style={{ width: "18rem" }}>
                  <img
                    src={`https://ecom-back-1.onrender.com/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <hr />
                  <div className="card-body">
                    <div className="price_name_flex">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">$ {p.price}</p>
                    </div>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                    <div className='cards-btn'>
                      <button 
                      className='more-detail-btn' 
                      onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                      <button className='add-to-cart-btn'  
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}>
                          Add To Cart
                          </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div>
          {products && products.length < total && (
              <button
                className="btn_load_more"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Load more <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
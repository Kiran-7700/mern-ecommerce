import React, { useState, useEffect } from "react";
import Layout from './pages'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Home.css"

function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);


    //initial p details
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);
    //getProduct
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
            `https://ecom-back-1.onrender.com/api/product/get-product/${params.slug}`
            );
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };
    //get similar product
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(
                `https://ecom-back-1.onrender.com/api/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>
            <div className="product-details">
                <div className="col-md-6">
                    <img
                        src={`https://ecom-back-1.onrender.com/api/product/product-photo/${product._id}`}
                        className="detail-img-top"
                        alt={product.name}

                    />
                </div>
                <div className="product-details-info">
                    <h1 className="text-center">Product Details</h1>
                    <hr />
                    <h6>Name : {product.name}</h6>
                    <h6>Description : {product.description}</h6>
                    <h6>
                        Price :
                        {product?.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </h6>
                    <h6>Category : {product?.category?.name}</h6>
                    <button class="add-to-cart-btn">ADD TO CART</button>
                </div>
            </div>
            <hr />
            <div className="similar_products">
                <h4>Similar Products ➡️</h4>
                {relatedProducts.length < 1 && (
                    <p className="no_product_found_text">No Similar Products found</p>
                )}
                <div className="show-all-products">
                    {relatedProducts?.map((p) => (
                        <div className="similar_product_card" key={p._id}>
                            <img
                                src={`https://ecom-back-1.onrender.com/api/product/product-photo/${p._id}`}
                                className="card-img-top"
                                alt={p.name}
                            />
                            <div className="card-body">
                                <div className="price_name_flex">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">
                                        {p.price.toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        })}
                                    </p>
                                </div>
                                <p className="card-text">
                                    {p.description.substring(0, 60)}...
                                </p>
                                <div className="product_detail_btn">
                                    <button
                                        className="more-detail-btn"
                                        onClick={() => navigate(`/product/${p.slug}`)}
                                    >
                                        More Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails
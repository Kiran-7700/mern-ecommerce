import React, { useState, useEffect } from "react";
import Layout from '../pages'
import AdminMenu from '../../common/AdminMenu'
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("https://ecom-back-1.onrender.com/api/product/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };

    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);
    return (
        <Layout>
            <div className='adminDashboardContainer'>
                <div className="admin-menu-div">
                <AdminMenu />
                </div>
                <div className='contentBox-product'>
                    <h1>All Product List</h1>
                    <div className="show-all-products">
                        {products?.map((p) => (
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
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.description}</p>
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

export default Products
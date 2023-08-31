import React, { useState, useEffect } from 'react'
import toast from "react-hot-toast";
import axios from "axios";
 import {  Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import AdminMenu from '../../common/AdminMenu';
import Layout from '../pages'
import { useAuth } from '../../context/auth';
const { Option } = Select;


function UpdateProduct () {
    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [photo, setPhoto] = useState("");
    const [id, setId] = useState("");
    const [auth] = useAuth();
  
    //get single product
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://ecom-back-1.onrender.com/api/product/get-product/${params.slug}`
        );
        setName(data.product.name);
        setId(data.product._id);
        setDescription(data.product.description);
        setPrice(data.product.price);
        setPrice(data.product.price);
        setQuantity(data.product.quantity);
        setShipping(data.product.shipping);
        setCategory(data.product.category._id);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getSingleProduct();
    }, []);


    //get all category
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("https://ecom-back-1.onrender.com/api/category/get-category");
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong in getting category");
      }
    };
  
    useEffect(() => {
      getAllCategory();
    }, []);
  
    //create product function
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const productData = new FormData();
        productData.append("name", name);
        productData.append("description", description);
        productData.append("price", price);
        productData.append("quantity", quantity);
        photo && productData.append("photo", photo);
        productData.append("category", category);
        const { data } = axios.put(
          `https://ecom-back-1.onrender.com/api/product/update-product/${id}`,
          productData,
          {
            headers:{
                'authorization': "Bearer " + auth?.token
            }
          }
        );
        if (data?.success) {
          toast.error(data?.message);
        } else {
          toast.success("Product Updated Successfully");
           navigate("/dashboard/admin/products");
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };
  
    //delete a product
    const handleDelete = async () => {
      try {
        let answer = window.prompt("Are You Sure want to delete this product ? ");
        if (!answer) return;
        const { data } = await axios.delete(
          `https://ecom-back-1.onrender.com/api/product/delete-product/${id}`
        );
        toast.success("Product Deleted Successfully");
        navigate("/dashboard/admin/products");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <Layout title={"Dashboard - Create Product"}>
    <div className="adminDashboardContainer">
          <AdminMenu />
        <div className="contentBox">
          <h1>Update Product</h1>
          <div >
            <Select
              bordered={false}
              placeholder="Select a category"
              size="large"
              showSearch
              className="categorySelect-box"
              onChange={(value) => {
                setCategory(value);
              }}
              value={category}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
            <div className="create-product-upload-photo">
              <label >
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>

            <div >
              {photo ? (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={`https://ecom-back-1.onrender.com/api/product/product-photo/${id}`}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              )}
            </div>

            <div className='create-product-addName'>
              <input
                type="text"
                value={name}
                placeholder="write a name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="create-product-addDesc">
              <textarea
                type="text"
                value={description}
                placeholder="write a description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="create-product-priceAdd">
              <input
                type="number"
                value={price}
                placeholder="write a Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="create-product-quantityAdd">
              <input
                type="number"
                value={quantity}
                placeholder="write a quantity"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div >
              <Select
                bordered={false}
                placeholder="Select Shipping "
                size="large"
                showSearch
                className="create-product-addShipping"
                onChange={(value) => {
                  setShipping(value);
                }}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
            </div>
            <div>
              <button className="create-product-btn" onClick={handleUpdate}>
                UPDATE PRODUCT
              </button>
            </div>
            <div>
              <button className="create-product-btn" onClick={handleDelete}>
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
  </Layout>
  )
}

export default UpdateProduct 
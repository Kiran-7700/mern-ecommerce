import React, { useEffect, useState } from 'react'
import Layout from '../pages'
import AdminMenu from '../../common/AdminMenu';
import "./Admindashboard.css";
import toast from 'react-hot-toast';
import axios from 'axios';
import "./Admindashboard.css";
import CategoryForm from '../../components/Form/CategoryForm';
import { useAuth } from '../../context/auth';
import { Modal } from "antd";

function CreateCategory() {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [auth] = useAuth();
  const [visible,setVisible]=useState(false)
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:5001/api/category/create-category", { name },{
        headers:{
            'authorization': "Bearer " + auth?.token
        }
      })
      if (data?.success) {
        toast.success(`${name} is created`)
        getAllCategory()
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input form")
    }
  }

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://ecom-back-1.onrender.com/api/category/get-category")
      if (data?.success) {
        setCategories(data?.category)
      }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong in getting category")
    }
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  //update category
  const handleUpdate=async(e)=>{
    e.preventDefault()
    try {
      const { data } = await axios.put(
        `http://localhost:5001/api/category/update-category/${selected._id}`,
        { name: updatedName },{
          headers:{
              'authorization': "Bearer " + auth?.token
          }
        }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `https://ecom-back-1.onrender.com/api/category/delete-category/${pId}`,
        {
          headers:{
              'authorization': "Bearer " + auth?.token
          }
        }
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className='adminDashboardContainer'>
        <AdminMenu />
        <div className='contentBox'>
          <h1>Manage Category</h1>
        </div>
        <div>
          <CategoryForm
            handleSubmit={handleSubmit}
            value={name}
            setValue={setName} />
        </div>
      </div>
      <div>
        <table className='category-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map(c => (
              <>
                <tr>
                  <td key={c._id}>{c.name}</td>
                  <td >
                    <button className='edit-btn' 
                    onClick={() => {
                      setVisible(true);
                      setUpdatedName(c.name);
                      setSelected(c);
                    }}>Edit</button>

                    <button 
                    className='delete-btn'
                    onClick={() => {
                      handleDelete(c._id);
                    }}>Delete</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <Modal 
      onCancel={()=>setVisible(false)} 
      footer={null}
      visible ={visible}>
        <CategoryForm 
        value={updatedName} 
        setValue={setUpdatedName} 
        handleSubmit={handleUpdate}/>
      </Modal>
      </div>
     
    </Layout>
  )
}

export default CreateCategory;
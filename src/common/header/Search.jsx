import React from 'react';
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import { useSearch } from "../../context/Search"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { useCart } from '../../context/cart';
import { Avatar, Badge } from 'antd';



function Search() {
  const [auth, setAuth] = useAuth()
  const [cart] = useCart()
  const [values, setValues] = useSearch();
  const navigate = useNavigate();


  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    })
    localStorage.removeItem("auth")
    toast.success("LogOut Successfully")
  }

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://ecom-back-1.onrender.com/api/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className='search active'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to="/"><h1> TrendyTech </h1></Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input
              type="search"
              placeholder="Search your fav..."
              aria-label="Search"
              value={values.keyword}
              onChange={(e) => setValues({ ...values, keyword: e.target.value })} />
            <span onClick={handleSubmit}>Search </span>
          </div>

          <div className='icon f_flex width'>
            {
              !auth.user ?
                (
                  <>
                    <Link to="/login"><i className='fa fa-user icon-circle'></i></Link>
                  </>
                )
                :
                (
                  <>
                    <Dropdown>
                      <TriggerButton>{auth?.user?.name}</TriggerButton>
                      <Menu slots={{ listbox: StyledListbox }}>
                        <Link
                          to={`dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} >
                          <StyledMenuItem onClick={createHandleMenuClick('Profile')}>
                            Profile
                          </StyledMenuItem>
                        </Link>
                        <Link onClick={handleLogOut} to="/login"><StyledMenuItem >
                          Log out
                        </StyledMenuItem>
                        </Link>
                      </Menu>
                    </Dropdown>
                  </>
                )
            }

            <div className='cart'>
              <Link to="/cart" className="nav-link">
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cart?.length === 0 ? "" : cart?.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search


const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 2px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 14px 0px 4px 0px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  height: 50px;
  font-size: 20px;
  border-bottom: 1px;
  text-align: center;

  &:last-of-type {
    border-bottom: 1px;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 50%;
  padding: 8px 14px;
  line-height: 1.5;
  margin-left: 10px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#f3f5f9'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);
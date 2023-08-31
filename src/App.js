import {Route ,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authorization/Login';
import Signup from './components/authorization/Signup';



import Mac from './common/dropdownPages/Store/mac';
import Ipad from './common/dropdownPages/Store/ipad';
import Applewatch from './common/dropdownPages/Store/Applewatch';
import Iphone14pro from './common/dropdownPages/Iphone/Iphone14pro';
import Accessories from './common/dropdownPages/Store/Accessories';
import Iphone14 from './common/dropdownPages/Iphone/Iphone14';
import Iphone13 from './common/dropdownPages/Iphone/Iphone13';
import Iphonese from './common/dropdownPages/Iphone/Iphonese';
import IPadpro from './common/dropdownPages/Ipad/Ipadpro';
import IPadAir from './common/dropdownPages/Ipad/Ipadair';
import IPadMini from './common/dropdownPages/Ipad/Ipadmini';
import ApplePencil from './common/dropdownPages/Ipad/Applepencil';
import Macbookair from './common/dropdownPages/mac/MacBookAir';
import Macbookpro from './common/dropdownPages/mac/MacBookPro';
import Imac from './common/dropdownPages/mac/IMac';
import Macmini from './common/dropdownPages/mac/MacMini';
import Macpro from './common/dropdownPages/mac/MacPro';
import AppleWatchUltra from './common/dropdownPages/Watch/AppleWatchUltra';
import AppleWatch8 from './common/dropdownPages/Watch/AppleWatch8';
import AppleWatchSe from './common/dropdownPages/Watch/AppleWatchSe';
import AppleWatchNike from './common/dropdownPages/Watch/AppleWatchNike';
import Appletv4k from './common/dropdownPages/TvHome/AppleTv4k';
import HomePod from './common/dropdownPages/TvHome/HomePod';
import HomePodMini from './common/dropdownPages/TvHome/HomePodMini';
import AllStore from './common/dropdownPages/All/AllStore';
import Alliphone from './common/dropdownPages/All/Alliphone';
import Allipads from './common/dropdownPages/All/Allipads';
import AllMacs from './common/dropdownPages/All/AllMacs';
import AllWatches from './common/dropdownPages/All/AllWatches';
import Allhome from './common/dropdownPages/All/Allhome';
import Home from './Pages/Home';
import Dashboard from './Pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './components/authorization/ForgotPasssword ';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import CreateCategory from './Pages/Admin/createCategory';
import CreateProduct from './Pages/Admin/createProduct';
import Users from './Pages/Admin/users';
import Orders from './Pages/user/Orders';
import Profile from './Pages/user/Profile';
import Products from './Pages/Admin/Products';
import UpdateProduct from './Pages/Admin/UpdateProduct ';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Cart from './common/cart/cart';

function App() {
  return (
    <>
    
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:slug' element={<ProductDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/forgot-Password' element={<ForgotPassword/>}/>

        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path='user' element={<Dashboard/>}/>
          <Route path='user/orders' element={<Orders/>}/>
          <Route path='user/profile' element={<Profile/>}/>
        </Route>

        <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}/>
            <Route path="admin/create-category" element={<CreateCategory/>}/>
            <Route path="admin/create-product" element={<CreateProduct/>}/>
            <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
            <Route path="admin/products" element={<Products/>}/>
            <Route path="admin/users" element={<Users/>}/>
        </Route>

            {/* dropdown Pages */}
         <Route path='/mac' element={<Mac/>}/>
         <Route path='/ipad' element={<Ipad/>}/>
         <Route path='/appleWatch' element={<Applewatch/>}/>
         <Route path='/accessories' element={<Accessories/>}/>
         <Route path='/iPhone14Pro' element={<Iphone14pro/>}/>
         <Route path='/iPhone14' element={<Iphone14/>}/>
         <Route path='/iPhone13' element={<Iphone13/>}/>
         <Route path='/iPhonese' element={<Iphonese/>}/>
         <Route path='/iPadPro' element={<IPadpro/>}/>
         <Route path='/iPadAir' element={<IPadAir/>}/>
         <Route path='/iPadmini' element={<IPadMini/>}/>
         <Route path='/ApplePencil' element={<ApplePencil/>}/>
         <Route path='/MacBookAir' element={<Macbookair/>}/>
         <Route path='/MacBookPro' element={<Macbookpro/>}/>
         <Route path='/iMac' element={<Imac/>}/>
         <Route path='/Macmini' element={<Macmini/>}/>
         <Route path='/MacPro' element={<Macpro/>}/>
         <Route path='/AppleWatchUltra' element={<AppleWatchUltra/>}/>
         <Route path='/AppleWatchSeries8' element={<AppleWatch8/>}/>
         <Route path='/AppleWatchSE' element={<AppleWatchSe/>}/>
         <Route path='/AppleWatchNike' element={<AppleWatchNike/>}/>
         <Route path='/AppleTV4K' element={<Appletv4k/>}/>
         <Route path='/HomePod' element={<HomePod/>}/>
         <Route path='/HomePodmini' element={<HomePodMini/>}/>
         <Route path='/store' element={<AllStore/>}/>
         <Route path='/alliphone' element={<Alliphone/>}/>
         <Route path='/allipads' element={<Allipads/>}/>
         <Route path='/allmacs' element={<AllMacs/>}/>
         <Route path='/watches' element={<AllWatches/>}/>
         <Route path='/tvs' element={<Allhome/>}/> 
         <Route path="*" element={<PageNotFound />} /> 
     </Routes>
     
    </>
  );
}

export default App;

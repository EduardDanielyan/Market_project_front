import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";
import Card from "../Pages/Card";
import Chat from "../Pages/Chat";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyProduct from "../Pages/MyProduct";
import OrderTable from "../Pages/OrderTable";
import ProductInfo from "../Pages/ProductInfo";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import UserChek from "../Pages/userChek";

const { BrowserRouter, Routes, Route } = require("react-router-dom");
const { default: Header } = require("../Components/Header");

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Header />}>
                        <Route path="/" element={<Home />} />
                        <Route path="registration" element={<Login />} />
                        <Route path="signin" element={<SignIn />} />
                        <Route path="" element={<UserChek/>}>
                            <Route path="profile" element={<Profile />} />
                            <Route path="addProduct" element={<AddProduct />} />
                            <Route path="myProduct" element={<MyProduct />} />
                            <Route path="productInfo/:id" element={<ProductInfo />} />
                            <Route path="showCard" element={<Card/>}/> 
                            <Route path="orderProducts" element={<OrderTable/>}/>
                            <Route path="chat" element={<Chat/>}/>
                        </Route>         
                        <Route path="allProducts" element={<AllProducts/>}/>  
                        <Route path="details/:id" element={<Details/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
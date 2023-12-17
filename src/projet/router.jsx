import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./home";
import Contact from "./contact";
import Navs from "./nav";
import Footer from "./footer";
import Login from "./login";



export default function Router(){
    return<> <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navs />}>
                <Route index element={<ProductList />}></Route>                               
                <Route path="contact" element={<Contact />}></Route>
                <Route path="login" element={<Login />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
}
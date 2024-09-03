import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from "./configs/AppContextProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./app/Error";
import routes from "./configs/route";
import Header from "./app/components/Header";
import BreadcrumbArea from "./app/components/BreadcrumbArea";
import TravelListOne from "./app/TravelListOne";
import TravelListTwo from "./app/TravelListTwo";
import TravelListGrid from "./app/TravelListGrid";
import SignUp from "./app/SignUp";
import Checkout from "./app/Checkout";
import CartList from "./app/CartList";
import Contact from "./app/Contact";
import Login from "./app/Login";
import AboutUs from "./app/AboutUs";
import AdventureDetailPart from "./app/adventure-detail/AdventureDetailPart";
import AdventureGridArea from "./app/adventure/AdventureGridArea";
import SubscribeArea from "./app/adventure/SubscribeArea";
import PartnerArea from "./app/components/PartnerArea";
import Footer from "./app/components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));


const compare = (a, b) => {
    if (a.sort < b.sort) {
        return -1;
    }
    if (a.sort > b.sort) {
        return 1;
    }
    return 0;
};

let role = "ADMIN"

if (localStorage.getItem("user_data"))
    role = JSON.parse(localStorage.getItem("user_data")).role


root.render(
    <AppContextProvider>
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <BreadcrumbArea/>
                <Routes>
                    {
                        routes.sort(compare).map((route, key) => (
                            route.auth.includes(role) ?
                                <Route key={key} path={route.path} element={<route.component {...route} />}/> : null
                        ))
                    }
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <PartnerArea/>
                <Footer/>
            </div>
        </BrowserRouter>
    </AppContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContextProvider from "./configs/AppContextProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./app/Error";
import routes from "./configs/route";
import Header from "./app/components/Header";
import BreadcrumbArea from "./app/components/BreadcrumbArea";


import PartnerArea from "./app/components/PartnerArea";
import Footer from "./app/components/Footer";
import App from "./App";
import BlankPage from "./BlankPage";

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
                                <Route key={key} path={route.path}
                                       element={<route.component {...route} />}/> : null
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



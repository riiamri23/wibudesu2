import React from 'react';
// import MangaListing from '../../../components/MangaListing';
import Navbar from '../../../components/navbar/Index';
import { Outlet } from "react-router-dom";

const ApiSetting = () => {

    return (<>
        <Navbar />
        <div className="container m-auto">
            <Outlet />
        </div>
        </>);
}

export default ApiSetting;
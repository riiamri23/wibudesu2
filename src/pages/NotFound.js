import React from 'react';
// import MangaListing from '../../../components/MangaListing';
import Navbar from '../components/navbar/Index';
// import { Outlet } from "react-router-dom";

const NotFound = () => {

    return (<>
        <Navbar />
        <div className="container m-auto">
            <h1>Not Found</h1>
        </div>
        </>);
}

export default NotFound;
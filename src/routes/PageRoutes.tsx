import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import NewsDetail from "../components/NewsDetail";
import Business from "../pages/Business";
import Entertainment from "../pages/Entertainment";
import Health from "../pages/Health";
import Home from "../pages/Home";
import Science from "../pages/Science";
import Sports from "../pages/Sports";
import Technology from "../pages/Technology";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="business" element={<Business />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="health" element={<Health />} />
            <Route path="science" element={<Science />} />
            <Route path="sports" element={<Sports />} />
            <Route path="technology" element={<Technology />} />
            <Route path="news" element={<NewsDetail />} />
        </Routes>
    );
}

export default PageRoutes;
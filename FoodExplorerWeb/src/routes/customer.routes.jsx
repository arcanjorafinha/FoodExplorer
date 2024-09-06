import { Routes, Route, Navigate } from "react-router-dom";

import { Details } from "../pages/Deatails";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";

export function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
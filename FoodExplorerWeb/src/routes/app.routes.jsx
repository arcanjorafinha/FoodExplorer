import { Routes, Route, Navigate } from "react-router-dom";

import { New } from "../pages/New";
import { Details } from "../pages/Deatails";
import { Home } from "../pages/Home";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/details/:id" element={<Details />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
import { Routes, Route, Navigate } from "react-router-dom";

import { New } from "../pages/New";
import { Delete } from "../pages/Delete"
import { Details } from "../pages/Deatails";
import { Home } from "../pages/Home";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/details" element={<Details />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
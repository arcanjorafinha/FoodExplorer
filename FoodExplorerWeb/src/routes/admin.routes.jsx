import { Routes, Route, Navigate } from "react-router-dom";

import { New } from "../pages/New";
import { Delete } from "../pages/Delete"
import { Details } from "../pages/Deatails";
import { Home } from "../pages/Home";
import { Edit } from "../pages/Edit";
import { Orders } from "../pages/Orders";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
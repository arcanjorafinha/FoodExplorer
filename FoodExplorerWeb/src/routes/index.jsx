import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth';

import { AppRoutes } from "./app.routes";
import { AppAuth } from "./auth.routes";

import { Home } from "../pages/Home";
import { Details } from "../pages/Deatails";
import { New } from "../pages/New";


export function Routes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            {user ? <AppRoutes /> : <New />}
        </BrowserRouter>
    )
}
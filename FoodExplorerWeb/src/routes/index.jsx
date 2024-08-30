import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth';
import { USER_ROLE } from "../utils/roles";

import { AdminRoutes } from "./admin.routes";
import { AppAuth } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes"


export function Routes() {
    const { user } = useAuth();

    const AccessRoute = {
        [USER_ROLE.ADMIN]: <AdminRoutes />,
        [USER_ROLE.CUSTOMER]: <CustomerRoutes />,
    };

    return (
        <BrowserRouter>
            {user ? AccessRoute[user.role] : <AppAuth />}
        </BrowserRouter>
    );
}
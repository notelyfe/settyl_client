import { useContext } from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Context from '../../Context/Context';

const RequireAuth = () => {

    const { userData } = useContext(Context)
    const location = useLocation()

    return (
        userData ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth
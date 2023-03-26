import { Navigate , Outlet} from "react-router-dom"


export   const ProtectedRoute = ({children, usuario}) =>{
    console.log(usuario);
if(!usuario){
    return <Navigate to="/login" />
} 

return children ? children : <Outlet />
}
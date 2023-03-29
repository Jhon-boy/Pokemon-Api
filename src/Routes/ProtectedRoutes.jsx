import { Navigate , Outlet} from "react-router-dom"
export   const ProtectedRoute = ({children, usuario}) =>{
   

if(!usuario){
    console.log("Protected Route: "+ usuario);
    return <Navigate to="/login" />
} 

return children ? children : <Outlet />
}
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const authenciate = useSelector((state) => state.auth.authenciate);

    return authenciate == true ? <ProductDetail></ProductDetail> : <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
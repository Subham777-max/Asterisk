import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ButtonPage from "../Pages/ButtonPage";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Buttons" element={<ButtonPage />} />
        </Routes>
    );
}
export default Routing;
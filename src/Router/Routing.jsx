import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ButtonPage from "../Pages/ButtonPage";
import DocsPage from "../Pages/DocsPage";
import CardPage from "../Pages/CardPage";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Buttons" element={<ButtonPage />} />
            <Route path="/Cards" element={<CardPage />} />
            <Route path="/Docs" element={<DocsPage />} />
        </Routes>
    );
}
export default Routing;
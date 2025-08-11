import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Components/Loadder/Loader";

const Home = lazy(() => import("../Pages/Home"));
const ButtonPage = lazy(() => import("../Pages/ButtonPage"));
const DocsPage = lazy(() => import("../Pages/DocsPage"));
const CardPage = lazy(() => import("../Pages/CardPage"));
const NavbarPage = lazy(() => import("../Pages/NaveBarPage"));

function Routing() {
  return (
    <Suspense
      fallback={<Loader />}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buttons" element={<ButtonPage />} />
        <Route path="/Cards" element={<CardPage />} />
        <Route path="/Navbars" element={<NavbarPage />} />
        <Route path="/Docs" element={<DocsPage />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;

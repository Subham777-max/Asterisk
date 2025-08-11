import { useState } from "react";
import NavAside from "../Components/NavComponents/NavAside";
import NavMain from "../Components/NavComponents/NavMain";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footter/Footer";

function NavbarPage(){
    const [menue, setMenue] = useState(false);
      const [navType, setNavType] = useState("Normal Navbars");
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                
                
                <div className="flex-1">
                    <NavMain menue={menue} setMenue={setMenue} cardType={navType} />
                    <NavAside menue={menue} setMenue={setMenue} setCardType={setNavType}/>
                </div>

                <Footer />
            </div>
        </>
    )
}
export default NavbarPage;
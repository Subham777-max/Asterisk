import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import CardMain from "../Components/CradComponents/CardMain";
import CardAside from "../Components/CradComponents/CardAside";
import Footer from "../Components/Footter/Footer";

function CardPage(){
    const [menue, setMenue] = useState(false);
      const [cardType, setCardType] = useState("Normal Cards");
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                
                
                <div className="flex-1">
                    <CardMain menue={menue} setMenue={setMenue} cardType={cardType} />
                    <CardAside menue={menue} setMenue={setMenue} setCardType={setCardType}/>
                </div>

                <Footer />
            </div>
        </>
    )
}
export default CardPage;
import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ButtonMain from "../Components/ButtonComponents/ButtonMain";
import ButtonAside from "../Components/ButtonComponents/ButtonAside";
import Footer from "../Components/Footter/Footer";

function ButtonPage() {
  const [menue, setMenue] = useState(false);
  const [buttonType, setButtonType] = useState("normal");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page content grows to fill available space */}
      <div className="flex-1">
        <ButtonMain menue={menue} setMenue={setMenue} buttonType={buttonType} />
        <ButtonAside menue={menue} setMenue={setMenue} setButtonType={setButtonType} />
      </div>

      <Footer />
    </div>
  );
}
export default ButtonPage;
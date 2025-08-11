
import { GiHamburgerMenu } from "react-icons/gi";
import NormalButton from "../ButtonTypes/NormalButton";
import GlowingButtons from "../GlowingButtons/GlowingButtons";
import AnimetedButtons from "../AnimatedButtons/AnimatedButtons"
import NormalCards from "../NormalCards/NormalCards";
import GlowingCard from "../GlowingCards/GlowingCards";
import SpecialCards from "../SpecialCards/SpecialCards";
import NormalNavbars from "../NormalNavbars/NormalNavbars";
import DarkNavbars from "../DarkNavbars/DarkNavbars";
import SpecialNavbars from "../SpecialNavbars/SpecialNavbars";

function MainComponent({menue,setMenue,type,selectedComponent }){
      
    return(
        <>
            <main className={` mb-4 w-[100vw]  lg:ml-[30vh] mt-[19vh] md:mt-[14vh] p-6 md:p-4 md:flex flex-col items-start gap-5`}>
                <button onClick={()=>setMenue(true)} className={`text-2xl z-40 fixed top-[14vh] left-4 bg-black p-4 rounded-xl lg:hidden ${menue?'hidden':""}`}><GiHamburgerMenu /></button>
                {selectedComponent==="Buttons" && <>
                    {type==='Normal Buttons' && <>
                    <NormalButton />
                    </>}
                    {type==='Glowing Buttons' && <>
                        <GlowingButtons />
                    </>}
                    {type==='Animated Buttons' && <>
                        <AnimetedButtons />
                    </>}
                </>}
                {selectedComponent==="Cards" && <>
                    {type==='Normal Cards' && <>
                    <NormalCards />
                    </>}
                    {type==='Glowing Cards' && <>
                        <GlowingCard />
                    </>}
                    {type==='Special Cards' && <>
                        <SpecialCards />
                    </>}
                </>}
                {selectedComponent==="Navbars" && <>
                    {type==='Normal Navbars' && <>
                        <NormalNavbars />
                    </>}
                    {type==='Dark Navbars' && <>
                        <DarkNavbars />
                    </>}
                    {type==='Special Navbars' && <>
                        <SpecialNavbars />
                    </>}
                    
                </>}
            </main>
            
        </>
    );
}
export default MainComponent;
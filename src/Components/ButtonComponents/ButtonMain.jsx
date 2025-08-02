
import { GiHamburgerMenu } from "react-icons/gi";
import NormalButton from "../ButtonTypes/NormalButton";

function ButtonMain({menue,setMenue,buttonType}){
    return(
        <>
            <main className={` mb-4 w-[100vw]  lg:ml-[30vh] mt-[19vh] md:mt-[14vh] p-6 md:p-4 md:flex flex-col items-start gap-5`}>
                <button onClick={()=>setMenue(true)} className={`text-2xl fixed top-[14vh] left-4 bg-black p-4 rounded-xl lg:hidden ${menue?'hidden':""}`}><GiHamburgerMenu /></button>
                {buttonType==='normal' && <>
                    <NormalButton />
                </>}
            </main>
            
        </>
    );
}
export default ButtonMain;
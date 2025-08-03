
import AsideComponent from "../AsideComponent/AsideComponent";
function ButtonAside({menue,setMenue,setButtonType}){
    return (
        <>
            <AsideComponent menue={menue} setMenue={setMenue} setType={setButtonType} text1={"Normal Buttons"} text2={"Glowing Buttons"} text3={"Animated Buttons"} />
        </>
    );
}
export default ButtonAside;
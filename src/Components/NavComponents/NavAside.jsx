import AsideComponent from "../AsideComponent/AsideComponent";
function NavAside({menue,setMenue,setCardType}){
    return (
        <>
            <AsideComponent menue={menue} setMenue={setMenue} setType={setCardType} text1={"Normal Navbars"} text2={"Dark Navbars"} text3={"Special Navbars"} />
        </>
    );
}
export default NavAside;
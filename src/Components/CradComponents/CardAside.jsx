import AsideComponent from "../AsideComponent/AsideComponent";
function CardAside({menue,setMenue,setCardType}){
    return (
        <>
            <AsideComponent menue={menue} setMenue={setMenue} setType={setCardType} text1={"Normal Cards"} text2={"Glowing Cards"} text3={"Special Cards"} />
        </>
    );
}
export default CardAside;
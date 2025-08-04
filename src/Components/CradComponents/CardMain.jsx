import MainComponent from "../MainComponent/MainComponent";

function CardMain({menue,setMenue,cardType}){
    return(
        <>
            <MainComponent menue={menue} setMenue={setMenue} selectedComponent={"Cards"} type={cardType} />
        </>
    );
}
export default CardMain;
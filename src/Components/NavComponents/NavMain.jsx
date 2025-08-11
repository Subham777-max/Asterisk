import MainComponent from "../MainComponent/MainComponent";

function NavMain({menue,setMenue,cardType}){
    return(
        <>
            <MainComponent menue={menue} setMenue={setMenue} selectedComponent={"Navbars"} type={cardType} />
        </>
    );
}
export default NavMain;
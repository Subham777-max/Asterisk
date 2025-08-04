
import MainComponent from "../MainComponent/MainComponent";

function ButtonMain({menue,setMenue,buttonType}){
    return(
        <>
            <MainComponent menue={menue} setMenue={setMenue} selectedComponent={"Buttons"} type={buttonType} />
        </>
    );
}
export default ButtonMain;
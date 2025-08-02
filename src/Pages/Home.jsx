import AfterHero from "../Components/AfterHero/AfterHero";
import Footer from "../Components/Footter/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";

function Home(){
    return(
        <>
            <Navbar />
            <Hero />
            <AfterHero />
            <Footer />
        </>
    );
}
export default Home;
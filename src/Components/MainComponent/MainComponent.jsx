import { GiHamburgerMenu } from "react-icons/gi";
import { Suspense, lazy } from "react";
import Loader from "../Loadder/Loader";

const NormalButton = lazy(() => import("../ButtonTypes/NormalButton"));
const GlowingButtons = lazy(() => import("../GlowingButtons/GlowingButtons"));
const AnimatedButtons = lazy(() => import("../AnimatedButtons/AnimatedButtons"));
const NormalCards = lazy(() => import("../NormalCards/NormalCards"));
const GlowingCard = lazy(() => import("../GlowingCards/GlowingCards"));
const SpecialCards = lazy(() => import("../SpecialCards/SpecialCards"));
const NormalNavbars = lazy(() => import("../NormalNavbars/NormalNavbars"));
const DarkNavbars = lazy(() => import("../DarkNavbars/DarkNavbars"));
const SpecialNavbars = lazy(() => import("../SpecialNavbars/SpecialNavbars"));

function MainComponent({ menue, setMenue, type, selectedComponent }) {
  return (
    <main
      className={`mb-4 w-[100vw] lg:ml-[30vh] mt-[19vh] md:mt-[14vh] p-6 md:p-4 md:flex flex-col items-start gap-5`}
    >
      <button
        onClick={() => setMenue(true)}
        className={`text-2xl z-40 fixed top-[14vh] left-4 bg-black p-4 rounded-xl lg:hidden ${
          menue ? "hidden" : ""
        }`}
      >
        <GiHamburgerMenu />
      </button>

      <Suspense fallback={<Loader />}>
        {selectedComponent === "Buttons" && (
          <>
            {type === "Normal Buttons" && <NormalButton />}
            {type === "Glowing Buttons" && <GlowingButtons />}
            {type === "Animated Buttons" && <AnimatedButtons />}
          </>
        )}

        {selectedComponent === "Cards" && (
          <>
            {type === "Normal Cards" && <NormalCards />}
            {type === "Glowing Cards" && <GlowingCard />}
            {type === "Special Cards" && <SpecialCards />}
          </>
        )}

        {selectedComponent === "Navbars" && (
          <>
            {type === "Normal Navbars" && <NormalNavbars />}
            {type === "Dark Navbars" && <DarkNavbars />}
            {type === "Special Navbars" && <SpecialNavbars />}
          </>
        )}
      </Suspense>
    </main>
  );
}

export default MainComponent;

import { useState, useEffect } from "react";
import CodePlate from "../CodePlate/CodePlate";
import { Nav1, Nav2, Nav3 } from "./Navs";

function NormalNavbars() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-[#1E1E1E] text-gray-300 p-6 rounded-lg shadow-lg max-w-[30rem] w-[90%] relative border border-[#3B4451]">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute text-xl text-gray-400 top-2 right-3 hover:text-white"
                        >
                            ✖
                        </button>
                        <p className="text-sm font-medium leading-relaxed sm:text-base md:text-lg">
                            All of the navbars are responsive. To verify this, please reduce your screen size.
                            <br className="hidden sm:block" />
                            We recommend using a larger screen to choose the navbar design, because on smaller
                            screens they may look similar.
                        </p>
                    </div>
                </div>
            )}

            <div className="font-mono lg:ml-[10rem]">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    Normal Navbars:
                </h1>

                <section>
                    <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                        1{") "}Navbar 1:
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full gap-5">
                        <div className="w-full md:w-[50rem]">
                            <CodePlate
                                preview={<Nav1 />}
                            />
                        </div>
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                        2{") "}Navbar 2:
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full gap-5">
                        <div className="w-full md:w-[50rem]">
                            <CodePlate
                                preview={<Nav2 />}
                            />
                        </div>
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                        3{") "}Navbar  3:
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full gap-5">
                        <div className="w-full md:w-[50rem]">
                            <CodePlate
                                preview={<Nav3 />}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default NormalNavbars;

import { useState } from "react";
import CodePlate from "../CodePlate/CodePlate";
import { buttonArrGlow1 } from "./GlowButtonsSet1";
import { Glow1code, Glow2code, Glow3code } from "./GlowCode";
import { buttonArrGlow2 } from "./GlowingButtonsSet2";
import { buttonArrGlow3 } from "./GlowingButtonsSet3";

function GlowingButtons(){
    const [index1,setIndex1]=useState(0);
    const [index2,setIndex2]=useState(0);
    const [index3,setIndex3]=useState(0);
    return(
        <>
            <div className="font-mono lg:ml-[10rem]">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                Glowing Buttons:
            </h1>
            <section>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    1{") "}Primary and Secondary Type:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={buttonArrGlow1[index1]}
                            htmlCode={Glow1code[index1].html}
                            cssCode={Glow1code[index1].css}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if(index1===0) setIndex1(buttonArrGlow1.length-1);
                                else setIndex1(index1-1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if(index1===buttonArrGlow1.length-1) setIndex1(0);
                                else setIndex1(index1+1);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    2{")"}Sign In & Sign Up:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={buttonArrGlow2[index2]}
                            htmlCode={Glow2code[index2].html}
                            cssCode={Glow2code[index2].css}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if(index2===0) setIndex2(buttonArrGlow2.length-1);
                                else setIndex2(index2-1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if(index2===buttonArrGlow2.length-1) setIndex2(0);
                                else setIndex2(index2+1);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    3{")"}Submit :
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={buttonArrGlow3[index3]}
                            htmlCode={Glow3code[index3].html}
                            cssCode={Glow3code[index3].css}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if(index3===0) setIndex3(buttonArrGlow3.length-1);
                                else setIndex3(index3-1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if(index3===buttonArrGlow3.length-1) setIndex3(0);
                                else setIndex3(index3+1);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
export default GlowingButtons;
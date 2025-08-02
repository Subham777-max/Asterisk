import { useState } from "react";
import CodePlate from "../CodePlate/CodePlate";
import { buttonArr1 } from "./ButtonSet1";
import { buttonArr2 } from "./ButtonSet2";
import { buttonCodeArr1, buttonCodeArr2, buttonCodeArr3 } from "./ButtonCodeArr";
import { buttonArr3 } from "./ButtonSet3";

function NormalButton() {
    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);

    return (
        <div className="font-mono lg:ml-[10rem]">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                Normal Buttons:
            </h1>
            <section>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    1{") "}Primary and Secondary Type:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={<div>{buttonArr1[index]}</div>}
                            htmlCode={buttonCodeArr1[index].html}
                            cssCode={buttonCodeArr1[index].css}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if (index > 0) setIndex(index - 1);
                                else setIndex(buttonArr1.length - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if (index < buttonArr1.length - 1) setIndex(index + 1);
                                else setIndex(0);
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
                            preview={<div>{buttonArr2[index2]}</div>}
                            htmlCode={buttonCodeArr2[index2].html}
                            cssCode={buttonCodeArr2[index2].css}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if (index2 > 0) setIndex2(index2 - 1);
                                else setIndex2(buttonArr1.length - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if (index2 < buttonArr1.length - 1) setIndex2(index2 + 1);
                                else setIndex2(0);
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
                            preview={<div>{buttonArr3[index3]}</div>}
                            htmlCode={buttonCodeArr3[index3].html}
                            cssCode={buttonCodeArr3[index3].css}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if (index3 > 0) setIndex3(index3 - 1);
                                else setIndex3(buttonArr3.length - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
                            onClick={() => {
                                if (index3 < buttonArr3.length - 1) setIndex3(index3 + 1);
                                else setIndex3(0);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NormalButton;

import CodePlate from "../CodePlate/CodePlate";
import { SpecialCard1, SpecialCard2, SpecialCard3 } from "./Spcards";
import { spcodes } from "./spcodes";

function SpecialCards(){
    return(
        <>
            <div className="font-mono lg:ml-[10rem]">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                Specisl Cards:
            </h1>
            <section>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    1{") "}Special Card 1:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={<SpecialCard1 />}
                            htmlCode={spcodes[0].html}
                            cssCode={spcodes[0].css}
                            jsCode={spcodes[0].js}
                        />
                    </div>
                    
                </div>
                <p className="m-4 text-xl">Click on see details</p>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    2{") "}Special Card 2:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={<SpecialCard2 />}
                            htmlCode={spcodes[1].html}
                            cssCode={spcodes[1].css}
                            jsCode={spcodes[1].js}
                        />
                    </div>
                    
                </div>
                <p className="m-4 text-xl">Click on the card</p>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    3{") "}Special Card 3:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={<SpecialCard3 />}
                            htmlCode={spcodes[2].html}
                            cssCode={spcodes[2].css}
                            jsCode={spcodes[2].js}
                        />
                    </div>
                    
                </div>
                <p className="m-4 text-xl">Click on see details</p>
            </section>
        </div>
        </>
    )
}

export default SpecialCards;
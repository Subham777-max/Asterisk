import CodePlate from "../CodePlate/CodePlate";
import {AddToCartButton, MorphingButton,MorphingSubmitButton} from "./AnimatedButtonSet";
import { buttonCodes } from "./ButtonCodes";

function AnimatedButtons(){
    return(
        <>
            <div className="font-mono lg:ml-[10rem]">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    Animated Buttons:
                </h1>
                <section>
                    <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                        1{") "}Animated Button 1:
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full gap-5">
                        <div className="w-full md:w-[50rem]">
                            <CodePlate 
                                preview={<MorphingButton />}
                                htmlCode={buttonCodes[0].html}
                                cssCode={buttonCodes[0].css}
                                jsCode={buttonCodes[0].js}
                            />
                        </div>
                        
                    </div>
                    <p className="m-4">Recomentation: Dont forget to Download the check icon</p>
                    <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                        2{")"}Animated Button 2:
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full gap-5">
                        <div className="w-full md:w-[50rem]">
                            <CodePlate 
                                preview={<MorphingSubmitButton />}
                                htmlCode={buttonCodes[1].html}
                                cssCode={buttonCodes[1].css}
                                jsCode={buttonCodes[1].js}
                            />
                        </div>
                    </div>
                    <p className="m-4">Recomentation: Dont forget to Download the check icon</p>
                    <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                        3{")"}Animated Button 3:
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full gap-5">
                        <div className="w-full md:w-[50rem]">
                            <CodePlate 
                                preview={<AddToCartButton />}
                            />
                        </div>
                    </div>
                </section>
        </div>
        </>
    )
}

export default AnimatedButtons;
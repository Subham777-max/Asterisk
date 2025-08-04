import CodePlate from "../CodePlate/CodePlate";
import { GlowCard1, GlowCard2, GlowCard3 } from "./GlowCard";

function GlowingCard(){
    return(
        <>
            <div className="font-mono lg:ml-[10rem]">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                Normal Cards:
            </h1>
            <section>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    1{") "}Glowing Card 1:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={<GlowCard1 />}
                        />
                    </div>
                    
                </div>
                <p className="m-4 text-xl">Click on Inspire me and see .</p>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                    2{")"}Glowing Card 2:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[53rem]">
                        <CodePlate 
                          preview={<GlowCard2 />}
                        />
                    </div>
                    
                </div>

                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                    3{")"}Glowing Card 3 :
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                           preview={<GlowCard3 />}
                        />
                    </div>
                 
                </div>
            </section>
        </div>
        </>
    )
}
export default GlowingCard;
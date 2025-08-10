import CodePlate from "../CodePlate/CodePlate";
import { EcommerceCard, NatureCard, ProfileCard, SignInSignUpCard } from "./Cards";
import { nccodes } from "./nccodes";

function NormalCards(){
    return(
        <>
            <div className="font-mono lg:ml-[10rem]">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                Normal Cards:
            </h1>
            <section>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2">
                    1{") "}Profile Card:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                            preview={<ProfileCard />}
                            htmlCode={nccodes[0].html}
                            cssCode={nccodes[0].css}
                            jsCode={nccodes[0].js}
                        />
                    </div>
                    
                </div>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                    2{")"}E-Commerce:
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                           preview={<EcommerceCard />}
                           htmlCode={nccodes[1].html}
                            cssCode={nccodes[1].css}
                            jsCode={nccodes[1].js}
                        />
                    </div>
                    
                </div>

                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                    3{")"}Blog Card :
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                           preview={<NatureCard />}
                           htmlCode={nccodes[2].html}
                            cssCode={nccodes[2].css}
                            jsCode={nccodes[2].js}
                        />
                    </div>
                 
                </div>
                <h1 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4">
                    4{")"}SignIn & SignUp :
                </h1>
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <div className="w-full md:w-[50rem]">
                        <CodePlate 
                           preview={<SignInSignUpCard />}
                           htmlCode={nccodes[3].html}
                            cssCode={nccodes[3].css}
                            jsCode={nccodes[3].js}
                        />
                    </div>
                 
                </div>
            </section> 
        </div>
        </>
    );
}

export default NormalCards;




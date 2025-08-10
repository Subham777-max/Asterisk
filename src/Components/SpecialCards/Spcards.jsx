import { useState } from 'react';
import img1 from '../../Img/img (1).png';
export function SpecialCard1() {
    const [isOn, setIsOn] = useState(true);
    const [isOn2, setIsOn2] = useState(false);

    function handleClick() {
        setIsOn(false);
        setIsOn2(true);
        setTimeout(() => {
            setIsOn(true);
            setIsOn2(false);
        }, 5000);
    }

    return (
        <div className="bg-gray-900 text-white w-[15rem] h-[18rem] mt-10 relative flex flex-col p-4 items-center justify-center rounded-xl">
            <div
                className={`h-[7rem] w-[10rem] absolute top-1/2 left-1/2 transition-all duration-[1s] ease -translate-x-1/2 ${
                    isOn2 ? '-translate-y-[11.5rem] -rotate-45' : '-translate-y-20'
                }`}
            >
                <img src={img1} alt="" className="w-full h-full" />
            </div>

            
            <div
                className={`text-xl text-center transition-all delay-[0.5s] duration-[0.5s] ease overflow-hidden ${
                    isOn2 ? 'opacity-100 max-w-[10rem]' : 'opacity-0 max-w-0'
                }`}
            >
                <p>
                    Shoe: <span className="font-bold text-yellow-500">Nike</span>
                </p>
                <p>
                    Price: <span className="font-bold text-yellow-500">$49</span>
                </p>
            </div>

            {/* Buttons */}
            <div className="absolute top-[12rem] bottom-5">
                {isOn && (
                    <button
                        onClick={handleClick}
                        className="px-4 py-2 font-semibold text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600"
                    >
                        See details
                    </button>
                )}
                {isOn2 && (
                    <button className="px-4 py-2 font-semibold text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600">
                        Buy Now
                    </button>
                )}
            </div>
        </div>
    );
}


export function SpecialCard2() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            onClick={() => setShowDetails(!showDetails)}
            className="bg-gray-800 text-white w-[17rem] overflow-hidden h-[23rem]  rounded-xl cursor-pointer shadow-lg transition-transform hover:scale-105"
        >
            
            <div
                className={`w-full transition-all duration-700 ease-in-out ${
                    showDetails ? 'h-[50%]' : 'h-full'
                }`}
            >
                <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="object-cover w-full h-full"
                />
            </div>

            
            <div
                className={`transition-all duration-700 ease-in-out px-4 ${
                    showDetails ? 'opacity-100 h-[50%] py-4' : 'opacity-0 h-0'
                }`}
            >
                <h2 className="text-xl font-bold">David Johnson</h2>
                <p className="text-yellow-400">UI/UX Designer</p>
                <p className="mt-2 text-sm text-gray-300">
                    Passionate about crafting user-friendly digital experiences.
                </p>
                <div className="flex gap-2 mt-4">
                    <button className="px-3 py-1 transition bg-yellow-500 rounded hover:bg-yellow-600">
                        Message
                    </button>
                    <button className="px-3 py-1 transition bg-gray-600 rounded hover:bg-gray-700">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}




export function SpecialCard3() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-[18rem] h-[24rem] perspective">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute flex flex-col w-full h-full overflow-hidden text-white bg-gray-800 border border-gray-700 shadow-lg backface-hidden rounded-xl">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg"
            alt="Course"
            className="w-full h-[12rem] object-cover"
          />
          <div className="flex flex-col flex-1 gap-3 px-4 py-4">
            <h2 className="text-xl font-bold text-center">Intro to Web Development</h2>
            <p className="text-sm text-center text-gray-300">
              Start your journey in web development
            </p>
            <div className="flex justify-center mt-auto">
              <button
                onClick={() => setFlipped(true)}
                className="px-6 py-2 font-semibold text-gray-900 transition-colors rounded-lg bg-amber-400 hover:bg-amber-500"
              >
                See Details
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute flex flex-col w-full h-full p-5 text-white bg-gray-800 border border-gray-700 shadow-lg backface-hidden rounded-xl rotate-y-180">
          <h2 className="mb-4 text-xl font-bold text-center">Course Details</h2>
          <div className="space-y-3 text-sm">
            <p className="text-center">
              <span className="text-gray-400">Instructor:</span>{' '}
              <span className="font-semibold text-amber-400">John Doe</span>
            </p>
            <p className="text-center">
              <span className="text-gray-400">Duration:</span>{' '}
              <span className="font-semibold text-amber-400">6 Weeks</span>
            </p>
            <p className="mt-4 text-center text-gray-300">
              Learn HTML, CSS, and JavaScript to create responsive, modern websites from scratch.
            </p>
          </div>
          <div className="flex justify-center mt-auto">
            <button
              onClick={() => setFlipped(false)}
              className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Extra CSS for flip effect */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
}


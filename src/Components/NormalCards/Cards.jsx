import React, { useState } from "react";
import profileImg from '../../Img/profileImg.jpg';
import headPhone from '../../Img/headPhone.jpg'

export function ProfileCard() {
    return (
        <>
            <div className="w-[20rem] h-[22rem] flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-500 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                
                {/* Top Section */}
                <div className="w-full h-[50%] flex flex-col items-center justify-center bg-blue-500 rounded-bl-3xl relative">
                    <div className="p-1 transition-transform duration-300 border-2 border-white rounded-full shadow-md hover:scale-105">
                        <img
                            src={profileImg}
                            alt=""
                            className="h-[5rem] w-[5rem] rounded-full"
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full h-[50%] bg-white rounded-tr-3xl text-center flex flex-col items-center justify-evenly text-gray-900 px-4 py-5 gap-3">
                    <h1 className="text-[1.4rem] font-extrabold tracking-wide text-gray-800">
                        David Cell
                    </h1>
                    <p className="text-[0.9rem] text-gray-500 leading-snug">
                        Passionate developer crafting sleek interfaces with precision.
                    </p>
                    <button className="px-5 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow hover:bg-blue-600 hover:shadow-md">
                        View More
                    </button>
                </div>
            </div>
        </>
    );
}

export function EcommerceCard(){
    return(
        <>
            <div className="flex flex-col items-center justify-center w-[18rem] h-[23rem]  rounded-xl overflow-hidden  shadow-lg hover:shadow-2xl duration-300">
                <div className="w-full h-[50%]">
                    <img src={headPhone} alt="Headphone" className="object-cover w-full h-full" />
                </div>

                
                <div className="w-full h-[50%] bg-gray-900 px-4 py-5 flex flex-col items-center justify-between text-white">
                    
                    <h1 className="text-lg font-bold tracking-wide">
                        Price: <span className="text-purple-400">$49.99</span>
                    </h1>

                    
                    <div className="mt-2 space-y-1 text-center">
                        <h2 className="font-semibold text-white text-md">Wireless Headphones</h2>
                        <p className="text-sm text-gray-400">Immersive sound. Sleek design. Long-lasting battery.</p>
                    </div>

                    
                    <button className="px-6 py-2 mt-4 font-semibold text-white  duration-300 hover:translate-y-[-2px] transition-all bg-purple-500 rounded-full shadow-md hover:bg-purple-600 hover:shadow-lg">
                        Buy Now
                    </button>
                </div>

            </div>

        </>
    );
}

export function NatureCard(){
    return (
        <>
            <div className="max-w-sm overflow-hidden transition-all duration-300 bg-white shadow-xl rounded-xl hover:shadow-xl">
                
                <img 
                    className="object-cover w-full h-48" 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
                    alt="Beautiful sunset at beach" 
                />
                
                
                <div className="px-6 py-4">
                    <h2 className="mb-2 text-xl font-bold text-gray-800">Beautiful Sunset</h2>
                    <p className="text-base text-gray-600">
                    Experience the most breathtaking sunsets from our exclusive locations around the world. 
                    Perfect for romantic evenings or peaceful moments alone.
                    </p>
                </div>
                
                
                <div className="flex items-center justify-between px-6 pt-2 pb-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #Travel
                    </span>
                    <button 
                    className="px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-[1.02] bg-purple-500 rounded hover:bg-purple-600"
                    >
                     Read More...
                    </button>
                </div>
            </div>
        </>
    );
}



export  function SignInSignUpCard() {
  const [mode, setMode] = useState("signin");

  return (
    
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </h2>
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-sm text-blue-600 hover:underline"
          >
            {mode === "signin" ? "Create Account" : "Sign In"}
          </button>
        </div>

        <form className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {mode === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg"
            />
          )}

          <button
            type="button"
            className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-500">
          {mode === "signin" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("signin")}
                className="text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    
  );
}
  
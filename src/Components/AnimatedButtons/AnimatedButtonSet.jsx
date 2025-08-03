import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export  function MorphingButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false); // revert after 2 seconds
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-700 ease-in-out flex items-center justify-center
        px-6 py-3 rounded-full font-semibold shadow-md
        ${clicked 
          ? "bg-green-500 text-white w-40 animate-pulse scale-110" 
          : "bg-indigo-600 text-white hover:bg-indigo-700 w-32"
        }`}
    >
      {clicked ? (
        <>
          <FaCheck className="mr-2 animate-bounce" />
          Success!
        </>
      ) : (
        "Click Me"
      )}
    </button>
  );
}


export function MorphingSubmitButton() {
  const [state, setState] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleClick = () => {
    if (state !== "idle") return;
    setState("loading");

    // Simulate async process
    setTimeout(() => {
      setState("success");
      setTimeout(() => setState("idle"), 2500); // Reset to idle after success
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={state !== "idle"}
      className={`
        relative flex items-center justify-center 
        px-6 py-3 rounded-full font-semibold text-white 
        transition-all duration-500 ease-in-out overflow-hidden
        ${state === "idle" ? "bg-blue-600 hover:bg-blue-700" : ""}
        ${state === "loading" ? "bg-yellow-500 w-12 h-12 p-0 rounded-full" : ""}
        ${state === "success" ? "bg-green-600 w-40 scale-105" : ""}
        shadow-lg
      `}
    >
      {/* Text */}
      {state === "idle" && <span className="z-10">Submit</span>}

      {/* Spinner */}
      {state === "loading" && (
        <div className="z-10 w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent" />
      )}

      {/* Success Checkmark */}
      {state === "success" && (
        <div className="z-10 flex items-center gap-2">
          <FaCheck className="animate-bounce" />
          <span>Done</span>
        </div>
      )}
    </button>
  );
}


export  function AddToCartButton() {
  const [state, setState] = useState("idle"); // 'idle' | 'loading' | 'added'

  const handleClick = () => {
    if (state !== "idle") return;
    setState("loading");

    // Simulate add to cart delay
    setTimeout(() => {
      setState("added");
      setTimeout(() => setState("idle"), 2500); // Reset after 2.5s
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={state !== "idle"}
      className={`
        relative flex items-center justify-center gap-2 
        font-semibold rounded-full overflow-hidden 
        transition-all duration-500 ease-in-out 
        shadow-lg text-white
        ${state === "idle" && "bg-purple-600 px-6 py-3 hover:bg-purple-700"}
        ${state === "loading" && "bg-yellow-500 w-12 h-12 p-0 rounded-full"}
        ${state === "added" && "bg-green-600 px-5 py-3"}
      `}
    >
      {/* Idle state */}
      {state === "idle" && (
        <>
          <FaShoppingCart />
          <span>Add to Cart</span>
        </>
      )}

      {/* Loading state */}
      {state === "loading" && (
        <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent" />
      )}

      {/* Added state */}
      {state === "added" && (
        <>
          <FaCheck className="animate-bounce" />
          <span>Added!</span>
        </>
      )}
    </button>
  );
}

import React, { useState } from "react";

function CodePlate({ preview, htmlCode, cssCode, jsCode=undefined }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    let codeToCopy = "";
    if (activeTab === "html") codeToCopy = htmlCode;
    else if (activeTab === "css") codeToCopy = cssCode;
    else if (activeTab === "js") codeToCopy = jsCode;

    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-[#191E24] w-full sm:w-[90%] lg:w-[80%] mx-auto p-4 rounded-lg min-h-[380px] relative overflow-auto border border-gray-700 shadow-md">
      
      
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      
        <ul className="flex gap-4 pb-2 border-b border-gray-700">
            {["preview", "html", "css", ...(jsCode ? ["js"] : [])].map((tab) => (
                <li
                key={tab}
                className={`px-3 py-1 text-sm font-medium text-white bg-[#2A303C] rounded-full shadow-md hover:bg-green-500 transition-all duration-200 cursor-pointer ${
                    activeTab === tab ? "bg-green-500 text-black" : ""
                }`}
                onClick={() => setActiveTab(tab)}
                >
                {tab.toUpperCase()}
                </li>
            ))}
        </ul>

      {["html", "css", "js"].includes(activeTab) && (
        <button
          onClick={handleCopy}
          className="absolute flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition-all duration-300 bg-gray-800 rounded-md top-4 right-4 hover:bg-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {copied ? "Copied!" : "Copy"}
        </button>
      )}

      {/* Code / Preview Section */}
      <div className="w-full mt-4 flex justify-center items-center overflow-auto bg-[#1f2937] p-4 rounded-lg min-h-[250px] text-white text-sm font-mono">
        {activeTab === "preview" && <div>{preview}</div>}
        {activeTab === "html" && <pre>{htmlCode}</pre>}
        {activeTab === "css" && <pre>{cssCode}</pre>}
        {activeTab === "js" && <pre>{jsCode}</pre>}
      </div>
    </div>
  );
}

export default CodePlate;

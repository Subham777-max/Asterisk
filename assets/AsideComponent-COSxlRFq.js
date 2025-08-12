import{r as n,j as e}from"./index-Boo50CUz.js";import{G as y}from"./Navbar-DH_0uCag.js";function I(o){return y({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(o)}function s({preview:o,htmlCode:t,cssCode:r,jsCode:i=void 0}){const[a,l]=n.useState("preview"),[v,h]=n.useState(!1),w=()=>{let b="";a==="html"?b=t:a==="css"?b=r:a==="js"&&(b=i),navigator.clipboard.writeText(b).then(()=>{h(!0),setTimeout(()=>h(!1),2e3)})};return e.jsxs("div",{className:"bg-[#191E24] w-full sm:w-[90%] lg:w-[80%] mx-auto p-4 rounded-lg min-h-[380px] relative overflow-auto border border-gray-700 shadow-md",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"})]}),e.jsx("ul",{className:"flex gap-4 pb-2 border-b border-gray-700",children:["preview","html","css",...i?["js"]:[]].map(b=>e.jsx("li",{className:`px-3 py-1 text-sm font-medium text-white bg-[#2A303C] rounded-full shadow-md hover:bg-green-500 transition-all duration-200 cursor-pointer ${a===b?"bg-green-500 text-black":""}`,onClick:()=>l(b),children:b.toUpperCase()},b))}),["html","css","js"].includes(a)&&e.jsxs("button",{onClick:w,className:"absolute flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition-all duration-300 bg-gray-800 rounded-md top-4 right-4 hover:bg-green-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"})}),v?"Copied!":"Copy"]}),e.jsxs("div",{className:"w-full mt-4 flex justify-center items-center overflow-auto bg-[#1f2937] p-4 rounded-lg min-h-[250px] text-white text-sm font-mono",children:[a==="preview"&&e.jsx("div",{children:o}),a==="html"&&e.jsx("pre",{children:t}),a==="css"&&e.jsx("pre",{children:r}),a==="js"&&e.jsx("pre",{children:i})]})]})}const D=[{primary:"bg-[#070709] hover:bg-[#1a1a1a]",secondary:"bg-[#161A20] hover:bg-[#2c2f36]"},{primary:"bg-blue-600 hover:bg-blue-700",secondary:"bg-blue-300 text-blue-900 hover:bg-blue-400"},{primary:"bg-green-600 hover:bg-green-700",secondary:"bg-green-300 text-green-900 hover:bg-green-400"},{primary:"bg-purple-600 hover:bg-purple-700",secondary:"bg-purple-300 text-purple-900 hover:bg-purple-400"},{primary:"bg-pink-600 hover:bg-pink-700",secondary:"bg-pink-300 text-pink-900 hover:bg-pink-400"}],f=D.map((o,t)=>e.jsxs("div",{className:"flex gap-4 mb-3",children:[e.jsx("button",{className:`${o.primary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`,children:"Primary"}),e.jsx("button",{className:`${o.secondary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`,children:"Secondary"})]},t)),A=[{primary:"bg-[#070709] hover:bg-[#1a1a1a]",secondary:"border border-gray-400 text-gray-200 hover:bg-[#1a1a1a]"},{primary:"bg-indigo-600 hover:bg-indigo-700",secondary:"border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"},{primary:"bg-emerald-600 hover:bg-emerald-700",secondary:"border border-emerald-600 text-emerald-600 bg-white hover:bg-emerald-50"},{primary:"bg-rose-600 hover:bg-rose-700",secondary:"border border-rose-600 text-rose-600 bg-white hover:bg-rose-50"},{primary:"bg-orange-600 hover:bg-orange-700",secondary:"border border-orange-600 text-orange-600 bg-white hover:bg-orange-50"}],P=A.map((o,t)=>e.jsxs("div",{className:"flex gap-4 mb-3",children:[e.jsx("button",{className:`${o.primary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`,children:"Sign Up"}),e.jsx("button",{className:`${o.secondary} font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-lg`,children:"Sign In"})]},t)),C=[{id:1,html:`<button class="primary">Primary</button> <!-- Dark Primary Button -->
<button class="secondary">Secondary</button> <!-- Dark Secondary Button -->`,css:`/* Primary Button - Dark Theme */
.primary {
  background-color: #070709; /* Very dark background */
  color: white; /* White text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Soft shadow */
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.primary:hover {
  background-color: #1a1a1a; /* Slightly lighter on hover */
  transform: translateY(-2px); /* Lift on hover */
  box-shadow: 0 10px 15px rgba(0,0,0,0.3); /* Stronger shadow on hover */
}

/* Secondary Button - Dark Theme */
.secondary {
  background-color: #161A20; /* Dark gray-blue background */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.secondary:hover {
  background-color: #2c2f36;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}`},{id:2,html:`<button class="primary">Primary</button> <!-- Blue Primary Button -->
<button class="secondary">Secondary</button> <!-- Blue Secondary Button -->`,css:`/* Primary Button - Blue Theme */
.primary {
  background-color: #2563eb; /* Strong blue */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.primary:hover {
  background-color: #1d4ed8; /* Darker blue on hover */
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - Blue Theme */
.secondary {
  background-color: #93c5fd; /* Light blue */
  color: #1e3a8a; /* Dark blue text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.secondary:hover {
  background-color: #60a5fa;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}`},{id:3,html:`<button class="primary">Primary</button> <!-- Green Primary Button -->
<button class="secondary">Secondary</button> <!-- Green Secondary Button -->`,css:`/* Primary Button - Green Theme */
.primary {
  background-color: #16a34a; /* Medium green */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.primary:hover {
  background-color: #15803d; /* Darker green on hover */
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - Green Theme */
.secondary {
  background-color: #86efac; /* Light mint green */
  color: #166534; /* Dark green text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.secondary:hover {
  background-color: #4ade80;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}`},{id:4,html:`<button class="primary">Primary</button> <!-- Purple Primary Button -->
<button class="secondary">Secondary</button> <!-- Purple Secondary Button -->`,css:`/* Primary Button - Purple Theme */
.primary {
  background-color: #7e22ce; /* Strong purple */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.primary:hover {
  background-color: #6b21a8; /* Darker purple on hover */
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - Purple Theme */
.secondary {
  background-color: #d8b4fe; /* Light lavender */
  color: #6b21a8; /* Deep purple text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.secondary:hover {
  background-color: #c084fc;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}`},{id:5,html:`<button class="primary">Primary</button> <!-- Pink Primary Button -->
<button class="secondary">Secondary</button> <!-- Pink Secondary Button -->`,css:`/* Primary Button - Pink Theme */
.primary {
  background-color: #db2777; /* Strong pink */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.primary:hover {
  background-color: #be185d; /* Darker pink on hover */
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - Pink Theme */
.secondary {
  background-color: #f9a8d4; /* Soft pink */
  color: #831843; /* Dark rose text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.secondary:hover {
  background-color: #f472b6;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}`}],_=[{id:1,html:`
<!-- Dark theme: Sign Up and Sign In buttons -->
<button class="primary">Sign Up</button>
<button class="secondary">Sign In</button>
`,css:`
/* Primary Button - Dark background */
.primary {
  background-color: #070709; /* Almost black */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out; /* Smooth hover effect */
}
.primary:hover {
  background-color: #1a1a1a; /* Slightly lighter black */
  transform: translateY(-2px); /* Button lift on hover */
  box-shadow: 0 8px 15px rgba(0,0,0,0.3); /* Enhanced shadow */
}

/* Secondary Button - Transparent */
.secondary {
  background-color: transparent;
  border: 1px solid #ccc; /* Light grey border */
  color: #e5e5e5;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: #1a1a1a; /* Darker background on hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.2);
}`},{id:2,html:`
<!-- Indigo theme: Sign Up and Sign In buttons -->
<button class="primary">Sign Up</button>
<button class="secondary">Sign In</button>
`,css:`
/* Primary Button - Indigo */
.primary {
  background-color: #4f46e5; /* Indigo blue */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: #4338ca; /* Deeper indigo */
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - White background with indigo border */
.secondary {
  background-color: white;
  border: 1px solid #4f46e5;
  color: #4f46e5; /* Indigo text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: #eef2ff; /* Light indigo tint on hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.2);
}`},{id:3,html:`
<!-- Green theme: Sign Up and Sign In buttons -->
<button class="primary">Sign Up</button>
<button class="secondary">Sign In</button>
`,css:`
/* Primary Button - Emerald Green */
.primary {
  background-color: #059669;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: #047857;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - White with emerald border */
.secondary {
  background-color: white;
  border: 1px solid #059669;
  color: #059669;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: #ecfdf5; /* Pale green on hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.2);
}`},{id:4,html:`
<!-- Red theme: Sign Up and Sign In buttons -->
<button class="primary">Sign Up</button>
<button class="secondary">Sign In</button>
`,css:`
/* Primary Button - Rose Red */
.primary {
  background-color: #e11d48;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: #be123c; /* Darker rose */
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - White with rose border */
.secondary {
  background-color: white;
  border: 1px solid #e11d48;
  color: #e11d48;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: #ffe4e6; /* Light rose tint on hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.2);
}`},{id:5,html:`
<!-- Orange theme: Sign Up and Sign In buttons -->
<button class="primary">Sign Up</button>
<button class="secondary">Sign In</button>
`,css:`
/* Primary Button - Vibrant Orange */
.primary {
  background-color: #ea580c;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: #c2410c; /* Darker orange */
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.3);
}

/* Secondary Button - White with orange border */
.secondary {
  background-color: white;
  border: 1px solid #ea580c;
  color: #ea580c;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: #fff7ed; /* Light orange on hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.2);
}`}],T=[{id:1,html:`
<!-- Primary action button -->
<button class="primary">Submit</button>

<!-- Secondary action button -->
<button class="secondary">Reset</button>
`,css:`
/* Primary Button Styling */
.primary {
  background-color: rgba(7,7,9,0.9); /* Dark background */
  color: white; /* White text */
  font-weight: 600; /* Semi-bold text */
  padding: 10px 20px; /* Inner spacing */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0,0,0,0.2); /* Soft shadow */
  border: 1px solid rgba(255,255,255,0.1); /* Subtle white border */
  transition: all 0.3s ease-in-out; /* Smooth hover effects */
}

/* Hover effect for primary button */
.primary:hover {
  background-color: rgba(26,26,26,0.9); /* Slightly lighter dark */
  transform: translateY(-2px); /* Raise button slightly */
  box-shadow: 0 8px 15px rgba(0,0,0,0.4); /* Stronger shadow */
}

/* Secondary Button Styling */
.secondary {
  background-color: rgba(255,255,255,0.1); /* Transparent white */
  color: #e5e5e5; /* Light grey text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(6px); /* Glassmorphism effect */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}

/* Hover effect for secondary button */
.secondary:hover {
  background-color: rgba(255,255,255,0.2);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}`},{id:2,html:`
<!-- Primary action button -->
<button class="primary">Submit</button>

<!-- Secondary action button -->
<button class="secondary">Reset</button>
`,css:`
/* Primary Button - Indigo Theme */
.primary {
  background-color: rgba(99,102,241,0.9); /* Indigo background */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(165,180,252,0.3); /* Soft indigo border */
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: rgba(79,70,229,0.9); /* Darker on hover */
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.4);
}

/* Secondary Button - Light Indigo */
.secondary {
  background-color: rgba(238,242,255,0.2);
  color: #3730a3; /* Dark Indigo Text */
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(165,180,252,0.3);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: rgba(238,242,255,0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}`},{id:3,html:`
<!-- Primary action button -->
<button class="primary">Submit</button>

<!-- Secondary action button -->
<button class="secondary">Reset</button>
`,css:`
/* Primary Button - Emerald Theme */
.primary {
  background-color: rgba(5,150,105,0.9); /* Emerald green */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(110,231,183,0.3);
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: rgba(4,120,87,0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.4);
}

/* Secondary Button - Soft Emerald */
.secondary {
  background-color: rgba(236,253,245,0.2);
  color: #065f46;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(110,231,183,0.3);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: rgba(236,253,245,0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}`},{id:4,html:`
<!-- Primary action button -->
<button class="primary">Submit</button>

<!-- Secondary action button -->
<button class="secondary">Reset</button>
`,css:`
/* Primary Button - Rose Theme */
.primary {
  background-color: rgba(225,29,72,0.9); /* Rose red */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(251,113,133,0.3);
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: rgba(190,18,60,0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.4);
}

/* Secondary Button - Soft Pink */
.secondary {
  background-color: rgba(255,228,230,0.2);
  color: #9f1239;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(251,113,133,0.3);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: rgba(255,228,230,0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}`},{id:5,html:`
<!-- Primary action button -->
<button class="primary">Submit</button>

<!-- Secondary action button -->
<button class="secondary">Reset</button>
`,css:`
/* Primary Button - Orange Theme */
.primary {
  background-color: rgba(234,88,12,0.9); /* Vibrant orange */
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(253,186,116,0.3);
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.primary:hover {
  background-color: rgba(194,65,12,0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.4);
}

/* Secondary Button - Soft Orange */
.secondary {
  background-color: rgba(255,247,237,0.2);
  color: #9a3412;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(253,186,116,0.3);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
}
.secondary:hover {
  background-color: rgba(255,247,237,0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}`}],z=[{primary:"bg-[#070709]/90 hover:bg-[#1a1a1a]/90 ring-1 ring-white/10",secondary:"bg-white/10 text-gray-200 border border-white/20 backdrop-blur-md hover:bg-white/20"},{primary:"bg-indigo-600/90 hover:bg-indigo-700/90 ring-1 ring-indigo-300/30",secondary:"bg-indigo-50/20 text-indigo-700 border border-indigo-300/30 backdrop-blur-md hover:bg-indigo-100/30"},{primary:"bg-emerald-600/90 hover:bg-emerald-700/90 ring-1 ring-emerald-300/30",secondary:"bg-emerald-50/20 text-emerald-700 border border-emerald-300/30 backdrop-blur-md hover:bg-emerald-100/30"},{primary:"bg-rose-600/90 hover:bg-rose-700/90 ring-1 ring-rose-300/30",secondary:"bg-rose-50/20 text-rose-700 border border-rose-300/30 backdrop-blur-md hover:bg-rose-100/30"},{primary:"bg-orange-600/90 hover:bg-orange-700/90 ring-1 ring-orange-300/30",secondary:"bg-orange-50/20 text-orange-700 border border-orange-300/30 backdrop-blur-md hover:bg-orange-100/30"}],j=z.map((o,t)=>e.jsxs("div",{className:"flex gap-4 mb-3",children:[e.jsx("button",{className:`${o.primary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`,children:"Submit"}),e.jsx("button",{className:`${o.secondary} font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-lg`,children:"Reset"})]},t));function H(){const[o,t]=n.useState(0),[r,i]=n.useState(0),[a,l]=n.useState(0);return e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Normal Buttons:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Primary and Secondary Type:"]}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:[e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx("div",{children:f[o]}),htmlCode:C[o].html,cssCode:C[o].css})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{o>0?t(o-1):t(f.length-1)},children:"Prev"}),e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{o<f.length-1?t(o+1):t(0)},children:"Next"})]})]}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["2",")","Sign In & Sign Up:"]}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:[e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx("div",{children:P[r]}),htmlCode:_[r].html,cssCode:_[r].css})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{r>0?i(r-1):i(f.length-1)},children:"Prev"}),e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{r<f.length-1?i(r+1):i(0)},children:"Next"})]})]}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["3",")","Submit :"]}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:[e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx("div",{children:j[a]}),htmlCode:T[a].html,cssCode:T[a].css})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{a>0?l(a-1):l(j.length-1)},children:"Prev"}),e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{a<j.length-1?l(a+1):l(0)},children:"Next"})]})]})]})]})}const O=[{primary:"bg-red-700 text-white shadow-[0_0_10px_rgba(185,28,28,0.6)] hover:shadow-[0_0_18px_rgba(185,28,28,0.9)]",secondary:"bg-red-200 text-red-900 shadow-[0_0_10px_rgba(254,202,202,0.4)] hover:shadow-[0_0_18px_rgba(254,202,202,0.7)]"},{primary:"bg-orange-600 text-white shadow-[0_0_10px_rgba(234,88,12,0.6)] hover:shadow-[0_0_18px_rgba(234,88,12,0.9)]",secondary:"bg-orange-200 text-orange-900 shadow-[0_0_10px_rgba(254,215,170,0.4)] hover:shadow-[0_0_18px_rgba(254,215,170,0.7)]"},{primary:"bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.6)] hover:shadow-[0_0_18px_rgba(234,179,8,0.9)]",secondary:"bg-yellow-100 text-yellow-900 shadow-[0_0_10px_rgba(254,243,199,0.4)] hover:shadow-[0_0_18px_rgba(254,243,199,0.7)]"},{primary:"bg-teal-600 text-white shadow-[0_0_10px_rgba(13,148,136,0.6)] hover:shadow-[0_0_18px_rgba(13,148,136,0.9)]",secondary:"bg-teal-200 text-teal-900 shadow-[0_0_10px_rgba(153,246,228,0.4)] hover:shadow-[0_0_18px_rgba(153,246,228,0.7)]"},{primary:"bg-amber-700 text-white shadow-[0_0_10px_rgba(180,83,9,0.6)] hover:shadow-[0_0_18px_rgba(180,83,9,0.9)]",secondary:"bg-amber-200 text-amber-900 shadow-[0_0_10px_rgba(254,243,199,0.4)] hover:shadow-[0_0_18px_rgba(254,243,199,0.7)]"}],k=O.map((o,t)=>e.jsxs("div",{className:"flex gap-4 mb-3",children:[e.jsx("button",{className:`${o.primary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`,children:"Primary"}),e.jsx("button",{className:`${o.secondary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`,children:"Secondary"})]},t)),M=[{id:1,html:`
<!-- Red Glowing Buttons -->
<div class="flex gap-4 mb-3">
  <button class="btn-red-primary">Primary</button>
  <button class="btn-red-secondary">Secondary</button>
</div>
    `.trim(),css:`
/* Red Primary Button */
.btn-red-primary {
  background-color: #b91c1c; /* Tailwind: bg-red-700 */
  color: white;
  box-shadow: 0 0 10px rgba(185, 28, 28, 0.6);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem; /* Tailwind: px-5 py-2.5 */
  font-weight: 600; /* Tailwind: font-semibold */
  border-radius: 0.75rem; /* Tailwind: rounded-xl */
}
.btn-red-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(185, 28, 28, 0.9);
}

/* Red Secondary Button */
.btn-red-secondary {
  background-color: #fecaca; /* Tailwind: bg-red-200 */
  color: #7f1d1d; /* Tailwind: text-red-900 */
  box-shadow: 0 0 10px rgba(254, 202, 202, 0.4);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-red-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(254, 202, 202, 0.7);
}
    `.trim()},{id:2,html:`
<!-- Orange Glowing Buttons -->
<div class="flex gap-4 mb-3">
  <button class="btn-orange-primary">Primary</button>
  <button class="btn-orange-secondary">Secondary</button>
</div>
    `.trim(),css:`
/* Orange Primary Button */
.btn-orange-primary {
  background-color: #ea580c;
  color: white;
  box-shadow: 0 0 10px rgba(234, 88, 12, 0.6);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-orange-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(234, 88, 12, 0.9);
}

/* Orange Secondary Button */
.btn-orange-secondary {
  background-color: #fed7aa;
  color: #7c2d12;
  box-shadow: 0 0 10px rgba(254, 215, 170, 0.4);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-orange-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(254, 215, 170, 0.7);
}
    `.trim()},{id:3,html:`
<!-- Yellow Glowing Buttons -->
<div class="flex gap-4 mb-3">
  <button class="btn-yellow-primary">Primary</button>
  <button class="btn-yellow-secondary">Secondary</button>
</div>
    `.trim(),css:`
/* Yellow Primary Button */
.btn-yellow-primary {
  background-color: #eab308;
  color: black;
  box-shadow: 0 0 10px rgba(234, 179, 8, 0.6);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-yellow-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(234, 179, 8, 0.9);
}

/* Yellow Secondary Button */
.btn-yellow-secondary {
  background-color: #fef3c7;
  color: #78350f;
  box-shadow: 0 0 10px rgba(254, 243, 199, 0.4);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-yellow-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(254, 243, 199, 0.7);
}
    `.trim()},{id:4,html:`
<!-- Teal Glowing Buttons -->
<div class="flex gap-4 mb-3">
  <button class="btn-teal-primary">Primary</button>
  <button class="btn-teal-secondary">Secondary</button>
</div>
    `.trim(),css:`
/* Teal Primary Button */
.btn-teal-primary {
  background-color: #0d9488;
  color: white;
  box-shadow: 0 0 10px rgba(13, 148, 136, 0.6);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-teal-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(13, 148, 136, 0.9);
}

/* Teal Secondary Button */
.btn-teal-secondary {
  background-color: #99f6e4;
  color: #134e4a;
  box-shadow: 0 0 10px rgba(153, 246, 228, 0.4);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-teal-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(153, 246, 228, 0.7);
}
    `.trim()},{id:5,html:`
<!-- Amber Glowing Buttons -->
<div class="flex gap-4 mb-3">
  <button class="btn-amber-primary">Primary</button>
  <button class="btn-amber-secondary">Secondary</button>
</div>
    `.trim(),css:`
/* Amber Primary Button */
.btn-amber-primary {
  background-color: #b45309;
  color: white;
  box-shadow: 0 0 10px rgba(180, 83, 9, 0.6);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-amber-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(180, 83, 9, 0.9);
}

/* Amber Secondary Button */
.btn-amber-secondary {
  background-color: #fef3c7;
  color: #78350f;
  box-shadow: 0 0 10px rgba(254, 243, 199, 0.4);
  transition: all 0.3s ease-in-out;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
}
.btn-amber-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 18px rgba(254, 243, 199, 0.7);
}
    `.trim()}],L=[{id:"glow-indigo",html:`
<!-- Indigo button pair -->
<div class="flex gap-4 mb-3">
  <button class="btn-indigo-primary">Sign Up</button>
  <button class="btn-indigo-secondary">Sign In</button>
</div>`,css:`
/* Indigo Primary Button */
.btn-indigo-primary {
  background-color: #4f46e5; /* Indigo base */
  color: white;
  padding: 0.625rem 1.25rem; /* px-5 py-2.5 */
  border-radius: 0.75rem; /* rounded-xl */
  font-weight: 600; /* font-semibold */
  box-shadow: 0 0 12px rgba(79, 70, 229, 0.6); /* glow */
  transition: all 0.3s ease-in-out;
}
.btn-indigo-primary:hover {
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.9);
  transform: translateY(-2px);
}

/* Indigo Secondary Button */
.btn-indigo-secondary {
  background-color: #c7d2fe; /* Light indigo */
  color: #3730a3;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(199, 210, 254, 0.4);
  transition: all 0.3s ease-in-out;
}
.btn-indigo-secondary:hover {
  box-shadow: 0 0 20px rgba(199, 210, 254, 0.7);
  transform: translateY(-2px);
}`},{id:"glow-rose",html:`
<!-- Rose button pair -->
<div class="flex gap-4 mb-3">
  <button class="btn-rose-primary">Sign Up</button>
  <button class="btn-rose-secondary">Sign In</button>
</div>`,css:`
/* Rose Primary Button */
.btn-rose-primary {
  background-color: #e11d48;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(225, 29, 72, 0.6);
  transition: all 0.3s ease-in-out;
}
.btn-rose-primary:hover {
  box-shadow: 0 0 20px rgba(225, 29, 72, 0.9);
  transform: translateY(-2px);
}

/* Rose Secondary Button */
.btn-rose-secondary {
  background-color: #fbcfe8;
  color: #881337;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(251, 207, 232, 0.4);
  transition: all 0.3s ease-in-out;
}
.btn-rose-secondary:hover {
  box-shadow: 0 0 20px rgba(251, 207, 232, 0.7);
  transform: translateY(-2px);
}`},{id:"glow-emerald",html:`
<!-- Emerald button pair -->
<div class="flex gap-4 mb-3">
  <button class="btn-emerald-primary">Sign Up</button>
  <button class="btn-emerald-secondary">Sign In</button>
</div>`,css:`
/* Emerald Primary Button */
.btn-emerald-primary {
  background-color: #059669;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(5, 150, 105, 0.6);
  transition: all 0.3s ease-in-out;
}
.btn-emerald-primary:hover {
  box-shadow: 0 0 20px rgba(5, 150, 105, 0.9);
  transform: translateY(-2px);
}

/* Emerald Secondary Button */
.btn-emerald-secondary {
  background-color: #d1fae5;
  color: #065f46;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(209, 250, 229, 0.4);
  transition: all 0.3s ease-in-out;
}
.btn-emerald-secondary:hover {
  box-shadow: 0 0 20px rgba(209, 250, 229, 0.7);
  transform: translateY(-2px);
}`},{id:"glow-sky",html:`
<!-- Sky button pair -->
<div class="flex gap-4 mb-3">
  <button class="btn-sky-primary">Sign Up</button>
  <button class="btn-sky-secondary">Sign In</button>
</div>`,css:`
/* Sky Primary Button */
.btn-sky-primary {
  background-color: #0284c7;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(2, 132, 199, 0.6);
  transition: all 0.3s ease-in-out;
}
.btn-sky-primary:hover {
  box-shadow: 0 0 20px rgba(2, 132, 199, 0.9);
  transform: translateY(-2px);
}

/* Sky Secondary Button */
.btn-sky-secondary {
  background-color: #bae6fd;
  color: #0c4a6e;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(186, 230, 253, 0.4);
  transition: all 0.3s ease-in-out;
}
.btn-sky-secondary:hover {
  box-shadow: 0 0 20px rgba(186, 230, 253, 0.7);
  transform: translateY(-2px);
}`},{id:"glow-fuchsia",html:`
<!-- Fuchsia button pair -->
<div class="flex gap-4 mb-3">
  <button class="btn-fuchsia-primary">Sign Up</button>
  <button class="btn-fuchsia-secondary">Sign In</button>
</div>`,css:`
/* Fuchsia Primary Button */
.btn-fuchsia-primary {
  background-color: #a21caf;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(162, 28, 175, 0.6);
  transition: all 0.3s ease-in-out;
}
.btn-fuchsia-primary:hover {
  box-shadow: 0 0 20px rgba(162, 28, 175, 0.9);
  transform: translateY(-2px);
}

/* Fuchsia Secondary Button */
.btn-fuchsia-secondary {
  background-color: #f5d0fe;
  color: #701a75;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(245, 208, 254, 0.4);
  transition: all 0.3s ease-in-out;
}
.btn-fuchsia-secondary:hover {
  box-shadow: 0 0 20px rgba(245, 208, 254, 0.7);
  transform: translateY(-2px);
}`}],E=[{id:"glow-orange",html:`<div class="glow-container">
  <button class="btn-orange-primary">Submit</button>
  <button class="btn-orange-secondary">Reset</button>
</div>`,css:`.glow-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.btn-orange-primary {
  background-color: #ea580c;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 14px rgba(234, 88, 12, 0.7);
}
.btn-orange-primary:hover {
  box-shadow: 0 0 26px rgba(234, 88, 12, 1);
  transform: translateY(-2px);
}
.btn-orange-secondary {
  background-color: #ffedd5;
  color: #7c2d12;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(255, 237, 213, 0.4);
}
.btn-orange-secondary:hover {
  box-shadow: 0 0 20px rgba(255, 237, 213, 0.6);
  transform: translateY(-2px);
}`},{id:"glow-teal",html:`<div class="glow-container">
  <button class="btn-teal-primary">Submit</button>
  <button class="btn-teal-secondary">Reset</button>
</div>`,css:`.btn-teal-primary {
  background-color: #0f766e;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 14px rgba(15, 118, 110, 0.7);
}
.btn-teal-primary:hover {
  box-shadow: 0 0 26px rgba(15, 118, 110, 1);
  transform: translateY(-2px);
}
.btn-teal-secondary {
  background-color: #ccfbf1;
  color: #134e4a;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(204, 251, 241, 0.4);
}
.btn-teal-secondary:hover {
  box-shadow: 0 0 20px rgba(204, 251, 241, 0.6);
  transform: translateY(-2px);
}`},{id:"glow-yellow",html:`<div class="glow-container">
  <button class="btn-yellow-primary">Submit</button>
  <button class="btn-yellow-secondary">Reset</button>
</div>`,css:`.btn-yellow-primary {
  background-color: #eab308;
  color: black;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 14px rgba(234, 179, 8, 0.6);
}
.btn-yellow-primary:hover {
  box-shadow: 0 0 26px rgba(234, 179, 8, 0.95);
  transform: translateY(-2px);
}
.btn-yellow-secondary {
  background-color: #fef9c3;
  color: #713f12;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(254, 249, 195, 0.4);
}
.btn-yellow-secondary:hover {
  box-shadow: 0 0 20px rgba(254, 249, 195, 0.7);
  transform: translateY(-2px);
}`},{id:"glow-cyan",html:`<div class="glow-container">
  <button class="btn-cyan-primary">Submit</button>
  <button class="btn-cyan-secondary">Reset</button>
</div>`,css:`.btn-cyan-primary {
  background-color: #0891b2;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 14px rgba(8, 145, 178, 0.6);
}
.btn-cyan-primary:hover {
  box-shadow: 0 0 26px rgba(8, 145, 178, 0.95);
  transform: translateY(-2px);
}
.btn-cyan-secondary {
  background-color: #cffafe;
  color: #155e75;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(207, 250, 254, 0.4);
}
.btn-cyan-secondary:hover {
  box-shadow: 0 0 20px rgba(207, 250, 254, 0.7);
  transform: translateY(-2px);
}`},{id:"glow-lime",html:`<div class="glow-container">
  <button class="btn-lime-primary">Submit</button>
  <button class="btn-lime-secondary">Reset</button>
</div>`,css:`.btn-lime-primary {
  background-color: #65a30d;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 14px rgba(101, 163, 13, 0.6);
}
.btn-lime-primary:hover {
  box-shadow: 0 0 26px rgba(101, 163, 13, 1);
  transform: translateY(-2px);
}
.btn-lime-secondary {
  background-color: #ecfccb;
  color: #365314;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(236, 252, 203, 0.4);
}
.btn-lime-secondary:hover {
  box-shadow: 0 0 20px rgba(236, 252, 203, 0.7);
  transform: translateY(-2px);
}`}],Y=[{primary:"bg-indigo-700 text-white shadow-[0_0_12px_rgba(79,70,229,0.6)] hover:shadow-[0_0_20px_rgba(79,70,229,0.9)]",secondary:"bg-indigo-200 text-indigo-900 shadow-[0_0_12px_rgba(199,210,254,0.4)] hover:shadow-[0_0_20px_rgba(199,210,254,0.7)]"},{primary:"bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.6)] hover:shadow-[0_0_20px_rgba(225,29,72,0.9)]",secondary:"bg-rose-200 text-rose-900 shadow-[0_0_12px_rgba(251,207,232,0.4)] hover:shadow-[0_0_20px_rgba(251,207,232,0.7)]"},{primary:"bg-emerald-600 text-white shadow-[0_0_12px_rgba(5,150,105,0.6)] hover:shadow-[0_0_20px_rgba(5,150,105,0.9)]",secondary:"bg-emerald-200 text-emerald-900 shadow-[0_0_12px_rgba(209,250,229,0.4)] hover:shadow-[0_0_20px_rgba(209,250,229,0.7)]"},{primary:"bg-sky-600 text-white shadow-[0_0_12px_rgba(2,132,199,0.6)] hover:shadow-[0_0_20px_rgba(2,132,199,0.9)]",secondary:"bg-sky-200 text-sky-900 shadow-[0_0_12px_rgba(186,230,253,0.4)] hover:shadow-[0_0_20px_rgba(186,230,253,0.7)]"},{primary:"bg-fuchsia-700 text-white shadow-[0_0_12px_rgba(162,28,175,0.6)] hover:shadow-[0_0_20px_rgba(162,28,175,0.9)]",secondary:"bg-fuchsia-200 text-fuchsia-900 shadow-[0_0_12px_rgba(245,208,254,0.4)] hover:shadow-[0_0_20px_rgba(245,208,254,0.7)]"}],N=Y.map((o,t)=>e.jsxs("div",{className:"flex gap-4 mb-3",children:[e.jsx("button",{className:`${o.primary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`,children:"Sign Up"}),e.jsx("button",{className:`${o.secondary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`,children:"Sign In"})]},t)),U=[{primary:"bg-orange-600 text-white shadow-[0_0_14px_rgba(234,88,12,0.7)] hover:shadow-[0_0_26px_rgba(234,88,12,1)]",secondary:"bg-orange-100 text-orange-900 shadow-[0_0_10px_rgba(255,237,213,0.4)] hover:shadow-[0_0_20px_rgba(255,237,213,0.6)]"},{primary:"bg-teal-700 text-white shadow-[0_0_14px_rgba(15,118,110,0.7)] hover:shadow-[0_0_26px_rgba(15,118,110,1)]",secondary:"bg-teal-100 text-teal-900 shadow-[0_0_10px_rgba(204,251,241,0.4)] hover:shadow-[0_0_20px_rgba(204,251,241,0.6)]"},{primary:"bg-yellow-500 text-black shadow-[0_0_14px_rgba(234,179,8,0.6)] hover:shadow-[0_0_26px_rgba(234,179,8,0.95)]",secondary:"bg-yellow-100 text-yellow-900 shadow-[0_0_10px_rgba(254,249,195,0.4)] hover:shadow-[0_0_20px_rgba(254,249,195,0.7)]"},{primary:"bg-cyan-600 text-white shadow-[0_0_14px_rgba(8,145,178,0.6)] hover:shadow-[0_0_26px_rgba(8,145,178,0.95)]",secondary:"bg-cyan-100 text-cyan-900 shadow-[0_0_10px_rgba(207,250,254,0.4)] hover:shadow-[0_0_20px_rgba(207,250,254,0.7)]"},{primary:"bg-lime-600 text-white shadow-[0_0_14px_rgba(101,163,13,0.6)] hover:shadow-[0_0_26px_rgba(101,163,13,1)]",secondary:"bg-lime-100 text-lime-900 shadow-[0_0_10px_rgba(236,252,203,0.4)] hover:shadow-[0_0_20px_rgba(236,252,203,0.7)]"}],S=U.map((o,t)=>e.jsxs("div",{className:"flex gap-4 mb-3",children:[e.jsx("button",{className:`${o.primary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`,children:"Submit"}),e.jsx("button",{className:`${o.secondary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`,children:"Reset"})]},t));function G(){const[o,t]=n.useState(0),[r,i]=n.useState(0),[a,l]=n.useState(0);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Glowing Buttons:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Primary and Secondary Type:"]}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:[e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:k[o],htmlCode:M[o].html,cssCode:M[o].css})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{t(o===0?k.length-1:o-1)},children:"Prev"}),e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{o===k.length-1?t(0):t(o+1)},children:"Next"})]})]}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["2",")","Sign In & Sign Up:"]}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:[e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:N[r],htmlCode:L[r].html,cssCode:L[r].css})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{i(r===0?N.length-1:r-1)},children:"Prev"}),e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{r===N.length-1?i(0):i(r+1)},children:"Next"})]})]}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["3",")","Submit :"]}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:[e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:S[a],htmlCode:E[a].html,cssCode:E[a].css})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{l(a===0?S.length-1:a-1)},children:"Prev"}),e.jsx("button",{className:"px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600",onClick:()=>{a===S.length-1?l(0):l(a+1)},children:"Next"})]})]})]})]})})}function B(o){return y({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(o)}function R(o){return y({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(o)}function F(){const[o,t]=n.useState(!1),r=()=>{t(!0),setTimeout(()=>{t(!1)},2e3)};return e.jsx("button",{onClick:r,className:`transition-all duration-700 ease-in-out flex items-center justify-center
        px-6 py-3 rounded-full font-semibold shadow-md
        ${o?"bg-green-500 text-white w-40 animate-pulse scale-110":"bg-indigo-600 text-white hover:bg-indigo-700 w-32"}`,children:o?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"mr-2 animate-bounce"}),"Success!"]}):"Click Me"})}function $(){const[o,t]=n.useState("idle"),r=()=>{o==="idle"&&(t("loading"),setTimeout(()=>{t("success"),setTimeout(()=>t("idle"),2500)},2e3))};return e.jsxs("button",{onClick:r,disabled:o!=="idle",className:`
        relative flex items-center justify-center 
        px-6 py-3 rounded-full font-semibold text-white 
        transition-all duration-500 ease-in-out overflow-hidden
        ${o==="idle"?"bg-blue-600 hover:bg-blue-700":""}
        ${o==="loading"?"bg-yellow-500 w-12 h-12 p-0 rounded-full":""}
        ${o==="success"?"bg-green-600 w-40 scale-105":""}
        shadow-lg
      `,children:[o==="idle"&&e.jsx("span",{className:"z-10",children:"Submit"}),o==="loading"&&e.jsx("div",{className:"z-10 w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"}),o==="success"&&e.jsxs("div",{className:"z-10 flex items-center gap-2",children:[e.jsx(B,{className:"animate-bounce"}),e.jsx("span",{children:"Done"})]})]})}function V(){const[o,t]=n.useState("idle"),r=()=>{o==="idle"&&(t("loading"),setTimeout(()=>{t("added"),setTimeout(()=>t("idle"),2500)},1500))};return e.jsxs("button",{onClick:r,disabled:o!=="idle",className:`
        relative flex items-center justify-center gap-2 
        font-semibold rounded-full overflow-hidden 
        transition-all duration-500 ease-in-out 
        shadow-lg text-white
        ${o==="idle"&&"bg-purple-600 px-6 py-3 hover:bg-purple-700"}
        ${o==="loading"&&"bg-yellow-500 w-12 h-12 p-0 rounded-full"}
        ${o==="added"&&"bg-green-600 px-5 py-3"}
      `,children:[o==="idle"&&e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx("span",{children:"Add to Cart"})]}),o==="loading"&&e.jsx("div",{className:"w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"}),o==="added"&&e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"animate-bounce"}),e.jsx("span",{children:"Added!"})]})]})}const g=[{html:`<div class="container">
                <button id="morphButton" class="btn">
                    Click Me
                </button>
                </div>
                `,css:`  .container {
                text-align: center;
                }

                .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 12px 24px;
                background-color: #4f46e5; /* indigo-600 */
                color: white;
                border: none;
                border-radius: 9999px;
                font-size: 16px;
                font-weight: 600;
                width: 130px;
                transition: all 0.7s ease;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                }

                .btn:hover {
                background-color: #4338ca; /* indigo-700 */
                }

                .btn.success {
                background-color: #22c55e; /* green-500 */
                color: white;
                width: 160px;
                transform: scale(1.1);
                animation: pulse 2s infinite;
                }

                .btn i {
                margin-right: 8px;
                animation: bounce 1s infinite;
                }

                /* Pulse animation */
                @keyframes pulse {
                0%, 100% {
                    box-shadow: 0 0 0px rgba(34, 197, 94, 0.7);
                }
                50% {
                    box-shadow: 0 0 20px rgba(34, 197, 94, 0.9);
                }
                }

                /* Bounce animation */
                @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-5px);
                }
                }
                `,js:`
    const button = document.getElementById("morphButton");

    button.addEventListener("click", () => {
      // Change to success state
      button.classList.add("success");
      button.innerHTML = \`<i class="fas fa-check"></i>Success!\`;

      // Revert after 2 seconds
      setTimeout(() => {
        button.classList.remove("success");
        button.innerHTML = "Click Me";
      }, 2000);
    });
  `},{html:`
    <div class="container">
      <button id="submitBtn" class="btn idle">
        <span class="btn-text">Submit</span>
      </button>
    </div>
  `,css:`
    .container {
      text-align: center;
    }

    .btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.5s ease;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    }

    .btn.idle {
      background-color: #2563eb;
      padding: 12px 24px;
      width: auto;
    }

    .btn.idle:hover {
      background-color: #1d4ed8;
    }

    .btn.loading {
      background-color: #eab308;
      width: 48px;
      height: 48px;
      padding: 0;
      border-radius: 9999px;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid white;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      z-index: 10;
    }

    .btn.success {
      background-color: #16a34a;
      width: 160px;
      transform: scale(1.05);
    }

    .btn-text {
      z-index: 10;
    }

    .btn-success-content {
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 10;
      animation: bounce 0.6s infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
  `,js:`
    const button = document.getElementById("submitBtn");

    function setIdle() {
      button.className = "btn idle";
      button.innerHTML = \`<span class="btn-text">Submit</span>\`;
      button.disabled = false;
    }

    function setLoading() {
      button.className = "btn loading";
      button.innerHTML = \`<div class="spinner"></div>\`;
      button.disabled = true;
    }

    function setSuccess() {
      button.className = "btn success";
      button.innerHTML = \`
        <div class="btn-success-content">
          <i class="fas fa-check"></i>
          <span>Done</span>
        </div>
      \`;
    }

    button.addEventListener("click", () => {
      if (button.disabled) return;

      setLoading();

      setTimeout(() => {
        setSuccess();

        setTimeout(() => {
          setIdle();
        }, 2500);
      }, 2000);
    });
  `}];function J(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Animated Buttons:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Animated Button 1:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(F,{}),htmlCode:g[0].html,cssCode:g[0].css,jsCode:g[0].js})})}),e.jsx("p",{className:"m-4",children:"Recomentation: Dont forget to Download the check icon"}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["2",")","Animated Button 2:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx($,{}),htmlCode:g[1].html,cssCode:g[1].css,jsCode:g[1].js})})}),e.jsx("p",{className:"m-4",children:"Recomentation: Dont forget to Download the check icon"}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["3",")","Animated Button 3:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(V,{})})})})]})]})})}const W="/Asterisk/assets/profileImg-DD_VNbDi.jpg",K="/Asterisk/assets/headPhone-CuB7i_YV.jpg";function q(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-[20rem] h-[22rem] flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-500 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300",children:[e.jsx("div",{className:"w-full h-[50%] flex flex-col items-center justify-center bg-blue-500 rounded-bl-3xl relative",children:e.jsx("div",{className:"p-1 transition-transform duration-300 border-2 border-white rounded-full shadow-md hover:scale-105",children:e.jsx("img",{src:W,alt:"",className:"h-[5rem] w-[5rem] rounded-full"})})}),e.jsxs("div",{className:"w-full h-[50%] bg-white rounded-tr-3xl text-center flex flex-col items-center justify-evenly text-gray-900 px-4 py-5 gap-3",children:[e.jsx("h1",{className:"text-[1.4rem] font-extrabold tracking-wide text-gray-800",children:"David Cell"}),e.jsx("p",{className:"text-[0.9rem] text-gray-500 leading-snug",children:"Passionate developer crafting sleek interfaces with precision."}),e.jsx("button",{className:"px-5 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow hover:bg-blue-600 hover:shadow-md",children:"View More"})]})]})})}function X(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-[18rem] h-[23rem]  rounded-xl overflow-hidden  shadow-lg hover:shadow-2xl duration-300",children:[e.jsx("div",{className:"w-full h-[50%]",children:e.jsx("img",{src:K,alt:"Headphone",className:"object-cover w-full h-full"})}),e.jsxs("div",{className:"w-full h-[50%] bg-gray-900 px-4 py-5 flex flex-col items-center justify-between text-white",children:[e.jsxs("h1",{className:"text-lg font-bold tracking-wide",children:["Price: ",e.jsx("span",{className:"text-purple-400",children:"$49.99"})]}),e.jsxs("div",{className:"mt-2 space-y-1 text-center",children:[e.jsx("h2",{className:"font-semibold text-white text-md",children:"Wireless Headphones"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Immersive sound. Sleek design. Long-lasting battery."})]}),e.jsx("button",{className:"px-6 py-2 mt-4 font-semibold text-white  duration-300 hover:translate-y-[-2px] transition-all bg-purple-500 rounded-full shadow-md hover:bg-purple-600 hover:shadow-lg",children:"Buy Now"})]})]})})}function Q(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"max-w-sm overflow-hidden transition-all duration-300 bg-white shadow-xl rounded-xl hover:shadow-xl",children:[e.jsx("img",{className:"object-cover w-full h-48",src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",alt:"Beautiful sunset at beach"}),e.jsxs("div",{className:"px-6 py-4",children:[e.jsx("h2",{className:"mb-2 text-xl font-bold text-gray-800",children:"Beautiful Sunset"}),e.jsx("p",{className:"text-base text-gray-600",children:"Experience the most breathtaking sunsets from our exclusive locations around the world. Perfect for romantic evenings or peaceful moments alone."})]}),e.jsxs("div",{className:"flex items-center justify-between px-6 pt-2 pb-6",children:[e.jsx("span",{className:"inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full",children:"#Travel"}),e.jsx("button",{className:"px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-[1.02] bg-purple-500 rounded hover:bg-purple-600",children:"Read More..."})]})]})})}function Z(){const[o,t]=n.useState("signin");return e.jsxs("div",{className:"w-full max-w-md p-8 bg-white shadow-lg rounded-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:o==="signin"?"Sign In":"Sign Up"}),e.jsx("button",{onClick:()=>t(o==="signin"?"signup":"signin"),className:"text-sm text-blue-600 hover:underline",children:o==="signin"?"Create Account":"Sign In"})]}),e.jsxs("form",{className:"space-y-4",children:[o==="signup"&&e.jsx("input",{type:"text",placeholder:"Full Name",className:"w-full px-4 py-2 border rounded-lg"}),e.jsx("input",{type:"email",placeholder:"Email",className:"w-full px-4 py-2 border rounded-lg"}),e.jsx("input",{type:"password",placeholder:"Password",className:"w-full px-4 py-2 border rounded-lg"}),o==="signup"&&e.jsx("input",{type:"password",placeholder:"Confirm Password",className:"w-full px-4 py-2 border rounded-lg"}),e.jsx("button",{type:"button",className:"w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700",children:o==="signin"?"Sign In":"Sign Up"})]}),e.jsx("div",{className:"mt-6 text-sm text-center text-gray-500",children:o==="signin"?e.jsxs(e.Fragment,{children:["Don't have an account?"," ",e.jsx("button",{onClick:()=>t("signup"),className:"text-blue-600 hover:underline",children:"Sign Up"})]}):e.jsxs(e.Fragment,{children:["Already have an account?"," ",e.jsx("button",{onClick:()=>t("signin"),className:"text-blue-600 hover:underline",children:"Sign In"})]})})]})}const c=[{html:`
    <div class="profile-card">
      
      <!-- Top Section -->
      <div class="profile-top">
        <div class="profile-img-wrapper">
          <img 
            src="https://via.placeholder.com/80" 
            alt="Profile" 
            class="profile-img"
          />
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="profile-bottom">
        <h1 class="profile-name">David Cell</h1>
        <p class="profile-desc">
          Passionate developer crafting sleek interfaces with precision.
        </p>
        <button class="profile-btn">View More</button>
      </div>

    </div>
  `,css:`
    body {
      background-color: #f3f4f6; /* Light gray background */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      width: 20rem;
      height: 22rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, white, #3b82f6); /* from-white to-blue-500 */
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }

    .profile-card:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }

    /* Top Section */
    .profile-top {
      width: 100%;
      height: 50%;
      background-color: #3b82f6; /* blue-500 */
      border-bottom-left-radius: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .profile-img-wrapper {
      padding: 0.25rem;
      border: 2px solid white;
      border-radius: 50%;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }

    .profile-img-wrapper:hover {
      transform: scale(1.05);
    }

    .profile-img {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    /* Bottom Section */
    .profile-bottom {
      width: 100%;
      height: 50%;
      background-color: white;
      border-top-right-radius: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      color: #111827; /* gray-900 */
      padding: 1.25rem;
      gap: 0.75rem;
    }

    .profile-name {
      font-size: 1.4rem;
      font-weight: 800;
      color: #1f2937; /* gray-800 */
      letter-spacing: 0.05rem;
    }

    .profile-desc {
      font-size: 0.9rem;
      color: #6b7280; /* gray-500 */
      line-height: 1.4;
    }

    .profile-btn {
      padding: 0.5rem 1.25rem;
      font-weight: 600;
      color: white;
      background-color: #3b82f6; /* blue-500 */
      border: none;
      border-radius: 9999px; /* fully rounded */
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .profile-btn:hover {
      background-color: #2563eb; /* blue-600 */
      box-shadow: 0 3px 8px rgba(0,0,0,0.3);
    }
  `,js:`
    // No JS required for this card unless you want click handling
    const btn = document.querySelector('.profile-btn');
    btn.addEventListener('click', () => {
      alert('View More clicked!');
    });
  `},{html:`
    <div class="ecommerce-card">
      
      <!-- Top Section -->
      <div class="ecommerce-img-wrapper">
        <img 
          src="https://via.placeholder.com/300x200?text=Headphones" 
          alt="Headphone" 
          class="ecommerce-img"
        />
      </div>

      <!-- Bottom Section -->
      <div class="ecommerce-details">
        <h1 class="ecommerce-price">
          Price: <span>$49.99</span>
        </h1>

        <div class="ecommerce-info">
          <h2 class="ecommerce-title">Wireless Headphones</h2>
          <p class="ecommerce-desc">Immersive sound. Sleek design. Long-lasting battery.</p>
        </div>

        <button class="ecommerce-btn">Buy Now</button>
      </div>

    </div>
  `,css:`
    body {
      background-color: #f3f4f6; /* light gray */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .ecommerce-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 18rem;
      height: 23rem;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: box-shadow 0.3s ease;
      background-color: white;
    }

    .ecommerce-card:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }

    /* Top Image Section */
    .ecommerce-img-wrapper {
      width: 100%;
      height: 50%;
    }

    .ecommerce-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Bottom Details Section */
    .ecommerce-details {
      width: 100%;
      height: 50%;
      background-color: #111827; /* gray-900 */
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: white;
    }

    .ecommerce-price {
      font-size: 1.125rem;
      font-weight: bold;
      letter-spacing: 0.05rem;
    }

    .ecommerce-price span {
      color: #a78bfa; /* purple-400 */
    }

    .ecommerce-info {
      margin-top: 0.5rem;
      text-align: center;
    }

    .ecommerce-title {
      font-weight: 600;
      font-size: 1rem;
    }

    .ecommerce-desc {
      font-size: 0.875rem;
      color: #9ca3af; /* gray-400 */
      margin-top: 0.25rem;
    }

    /* Button */
    .ecommerce-btn {
      padding: 0.5rem 1.5rem;
      font-weight: 600;
      background-color: #a855f7; /* purple-500 */
      color: white;
      border: none;
      border-radius: 9999px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      margin-top: 1rem;
    }

    .ecommerce-btn:hover {
      background-color: #9333ea; /* purple-600 */
      transform: translateY(-2px);
      box-shadow: 0 3px 8px rgba(0,0,0,0.3);
    }
  `,js:`
    const buyBtn = document.querySelector('.ecommerce-btn');
    buyBtn.addEventListener('click', () => {
      alert('Thanks for your purchase!');
    });
  `},{html:`
    <div class="nature-card">
      
      <!-- Image -->
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
        alt="Beautiful sunset at beach" 
        class="nature-img"
      />

      <!-- Text Content -->
      <div class="nature-content">
        <h2 class="nature-title">Beautiful Sunset</h2>
        <p class="nature-desc">
          Experience the most breathtaking sunsets from our exclusive locations around the world.
          Perfect for romantic evenings or peaceful moments alone.
        </p>
      </div>

      <!-- Tags & Button -->
      <div class="nature-footer">
        <span class="nature-tag">#Travel</span>
        <button class="nature-btn">Read More...</button>
      </div>

    </div>
  `,css:`
    body {
      background-color: #f3f4f6; /* light gray */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .nature-card {
      max-width: 20rem;
      background-color: white;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
    }

    .nature-card:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    .nature-img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }

    .nature-content {
      padding: 1.5rem;
    }

    .nature-title {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1f2937; /* gray-800 */
      margin-bottom: 0.5rem;
    }

    .nature-desc {
      font-size: 1rem;
      color: #4b5563; /* gray-600 */
      line-height: 1.4;
    }

    .nature-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.5rem 1.5rem 1.5rem;
    }

    .nature-tag {
      background-color: #e5e7eb; /* gray-200 */
      color: #374151; /* gray-700 */
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
    }

    .nature-btn {
      background-color: #8b5cf6; /* purple-500 */
      color: white;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .nature-btn:hover {
      background-color: #7c3aed; /* purple-600 */
      transform: scale(1.02);
    }
  `,js:`
    const natureBtn = document.querySelector('.nature-btn');
    natureBtn.addEventListener('click', () => {
      alert('Redirecting to full article...');
    });
  `},{html:`
    <div class="auth-card">
      <div class="auth-header">
        <h2 id="auth-title">Sign In</h2>
        <button id="toggle-btn" class="toggle-link">Create Account</button>
      </div>

      <form class="auth-form">
        <div id="signup-name-field" class="form-group hidden">
          <input type="text" placeholder="Full Name" />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div id="signup-confirm-field" class="form-group hidden">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button type="button" class="auth-btn" id="submit-btn">Sign In</button>
      </form>

      <div class="auth-footer" id="auth-footer">
        Don't have an account? <button id="switch-btn" class="footer-link">Sign Up</button>
      </div>
    </div>
  `,css:`
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .auth-card {
      width: 100%;
      max-width: 400px;
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .auth-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .auth-header h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .toggle-link {
      background: none;
      border: none;
      font-size: 0.875rem;
      color: #2563eb;
      cursor: pointer;
      text-decoration: underline;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group input {
      width: 100%;
      padding: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid #d1d5db;
      font-size: 1rem;
    }

    .auth-btn {
      width: 100%;
      padding: 0.75rem;
      background-color: #2563eb;
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .auth-btn:hover {
      background-color: #1d4ed8;
    }

    .auth-footer {
      margin-top: 1.5rem;
      text-align: center;
      font-size: 0.875rem;
      color: #6b7280;
    }

    .footer-link {
      background: none;
      border: none;
      color: #2563eb;
      cursor: pointer;
      text-decoration: underline;
      font-size: 0.875rem;
    }

    .hidden {
      display: none;
    }
  `,js:`
    let mode = "signin";

    const authTitle = document.getElementById('auth-title');
    const toggleBtn = document.getElementById('toggle-btn');
    const signupNameField = document.getElementById('signup-name-field');
    const signupConfirmField = document.getElementById('signup-confirm-field');
    const submitBtn = document.getElementById('submit-btn');
    const authFooter = document.getElementById('auth-footer');
    const switchBtn = document.getElementById('switch-btn');

    function updateMode(newMode) {
      mode = newMode;
      if (mode === "signin") {
        authTitle.textContent = "Sign In";
        toggleBtn.textContent = "Create Account";
        submitBtn.textContent = "Sign In";
        signupNameField.classList.add("hidden");
        signupConfirmField.classList.add("hidden");
        authFooter.innerHTML = \`Don't have an account? <button id="switch-btn" class="footer-link">Sign Up</button>\`;
      } else {
        authTitle.textContent = "Sign Up";
        toggleBtn.textContent = "Sign In";
        submitBtn.textContent = "Sign Up";
        signupNameField.classList.remove("hidden");
        signupConfirmField.classList.remove("hidden");
        authFooter.innerHTML = \`Already have an account? <button id="switch-btn" class="footer-link">Sign In</button>\`;
      }

      // rebind footer button event
      document.getElementById('switch-btn').addEventListener('click', () => {
        updateMode(mode === "signin" ? "signup" : "signin");
      });
    }

    toggleBtn.addEventListener('click', () => {
      updateMode(mode === "signin" ? "signup" : "signin");
    });

    document.getElementById('switch-btn').addEventListener('click', () => {
      updateMode(mode === "signin" ? "signup" : "signin");
    });
  `}];function ee(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Normal Cards:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Profile Card:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(q,{}),htmlCode:c[0].html,cssCode:c[0].css,jsCode:c[0].js})})}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["2",")","E-Commerce:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(X,{}),htmlCode:c[1].html,cssCode:c[1].css,jsCode:c[1].js})})}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["3",")","Blog Card :"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(Q,{}),htmlCode:c[2].html,cssCode:c[2].css,jsCode:c[2].js})})}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["4",")","SignIn & SignUp :"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(Z,{}),htmlCode:c[3].html,cssCode:c[3].css,jsCode:c[3].js})})})]})]})})}const x=[{html:`
    <!-- Glow Card Container -->
    <div id="glow-card" class="glow-card">
      <!-- Card Title -->
      <h2 id="glow-title" class="glow-title">"Hover to Awaken"</h2>
      
      <!-- Card Text -->
      <p id="glow-text" class="glow-text">
        The future belongs to those who dare to imagine the impossible — and build it anyway.
      </p>

      <!-- Action Button -->
      <button id="glow-btn" class="glow-btn">
        Inspire Me
      </button>
    </div>
  `,css:`
    /* Base Page Styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    /* Card Container */
    .glow-card {
      width: 16rem;
      height: 18rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 0.75rem;
      border: 1px solid #6D28D9;
      padding: 1.5rem 1rem;
      gap: 1rem;
      background-color: transparent;
      color: white;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(109,40,217,0.4);
    }

    /* Hover Glow State */
    .glow-card:hover {
      background-color: #6D28D9;
      box-shadow: 0 0 40px rgba(109,40,217,0.9);
    }

    /* Active "Inspired" State */
    .inspired {
      background-color: #b91c1c; /* red-700 */
      border-color: #ef4444;     /* red-500 */
      box-shadow: 0 0 25px rgba(239,68,68,0.7);
    }

    /* Title Styling */
    .glow-title {
      font-size: 1.125rem;
      font-weight: bold;
      color: #c4b5fd; /* purple-200 */
      transition: color 0.3s ease;
    }

    /* Inspired Title Color */
    .inspired-title {
      color: #fee2e2; /* red-100 */
    }

    /* Text Styling */
    .glow-text {
      color: #d8b4fe; /* purple-300 */
      transition: color 0.3s ease;
    }

    /* Inspired Text Color */
    .inspired-text {
      color: #fecaca; /* red-200 */
    }

    /* Button Styling */
    .glow-btn {
      margin-top: 0.5rem;
      padding: 0.25rem 1rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: bold;
      border: none;
      background-color: white;
      color: #6D28D9;
      cursor: pointer;
      transition: filter 0.2s ease;
    }

    /* Button Hover */
    .glow-btn:hover {
      filter: brightness(1.1);
    }

    /* Inspired Button Colors */
    .inspired-btn {
      color: #b91c1c;
    }
  `,js:`
    // Get DOM Elements
    const glowCard = document.getElementById('glow-card');
    const glowTitle = document.getElementById('glow-title');
    const glowText = document.getElementById('glow-text');
    const glowBtn = document.getElementById('glow-btn');

    // Click Event for "Inspire Me" Button
    glowBtn.addEventListener('click', () => {
      // Add "inspired" styles
      glowCard.classList.add('inspired');
      glowTitle.classList.add('inspired-title');
      glowText.classList.add('inspired-text');
      glowBtn.classList.add('inspired-btn');

      // Change content to inspired message
      glowTitle.textContent = '🔥 Awakened 🔥';
      glowText.textContent = 'Believe in yourself so fiercely that even doubt surrenders.';

      // Reset after 3 seconds
      setTimeout(() => {
        glowCard.classList.remove('inspired');
        glowTitle.classList.remove('inspired-title');
        glowText.classList.remove('inspired-text');
        glowBtn.classList.remove('inspired-btn');

        glowTitle.textContent = '"Hover to Awaken"';
        glowText.textContent = 'The future belongs to those who dare to imagine the impossible — and build it anyway.';
      }, 3000);
    });
  `},{html:`
    <!-- Glow Card Container -->
    <div class="glow-card2">
      
      <!-- Rotating Gradient Border Layer -->
      <div class="glow-border">
        <!-- Empty oversized div to ensure smooth rotation coverage -->
        <div class="glow-border-fill"></div>
      </div>

      <!-- Inner Content Area -->
      <div class="glow-content">
        <h2 class="glow-title">Magic In Border</h2>
        <p class="glow-text">
          You may have tried to made it now here it is.
        </p>
      </div>

    </div>
  `,css:`
    /* Page Styling for Demo */
    body {
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* Outer Container with fixed size */
    .glow-card2 {
      position: relative;
      width: 18rem;
      height: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.375rem; /* rounded-md */
    }

    /* Rotating Gradient Border Layer */
    .glow-border {
      position: absolute;
      width: 30rem;
      border-radius: 0.75rem; /* rounded-xl */
      overflow: hidden;
      padding: 3px;
      background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6); /* pink → purple → blue */
      animation: spin-slow 8s linear infinite;
      z-index: 0;
    }

    /* Large fill div to cover rotation edges */
    .glow-border-fill {
      width: 100rem;
      height: 100rem;
    }

    /* Inner Content Card */
    .glow-content {
      position: relative;
      z-index: 10;
      width: calc(100% - 6px);  /* leaves border visible */
      height: calc(100% - 6px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1.5rem 1rem;
      text-align: center;
      background-color: #111827; /* gray-900 */
      color: white;
      border-radius: 0.5rem; /* rounded-lg */
    }

    /* Title Styling */
    .glow-title {
      font-size: 1.125rem; /* text-lg */
      font-weight: bold;
    }

    /* Description Text Styling */
    .glow-text {
      font-size: 0.875rem; /* text-sm */
      color: #d1d5db; /* gray-300 */
    }

    /* Slow spin animation */
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `},{html:`
    <!-- Glassy Glow Card -->
    <div class="glow-card3">
      <!-- Title -->
      <h2 class="glow-card3-title">Glassy Card</h2>

      <!-- Description -->
      <p class="glow-card3-text">
        This is a modern glassy card with a glowing gradient shadow on hover.
      </p>
    </div>
  `,css:`
    /* Page styling for demo */
    body {
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* Glassy Glow Card */
    .glow-card3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      position: relative;
      padding: 1.5rem; /* p-6 */
      width: 18rem;
      height: 20rem;

      border-radius: 0.75rem; /* rounded-xl */
      background: rgba(255, 255, 255, 0.1); /* bg-white/10 */
      border: 1px solid rgba(255, 255, 255, 0.2); /* border-white/20 */

      backdrop-filter: blur(8px); /* backdrop-blur-md */
      color: white;

      transition: all 0.5s ease; /* duration-500 */
    }

    /* Hover effect: glowing purple shadow */
    .glow-card3:hover {
      box-shadow: 0 0 30px 5px rgba(109, 40, 217, 0.5);
    }

    /* Title styling */
    .glow-card3-title {
      font-size: 1.25rem; /* text-xl */
      font-weight: 600; /* font-semibold */
      margin-bottom: 0.5rem; /* mb-2 */
    }

    /* Description text */
    .glow-card3-text {
      font-size: 0.875rem; /* text-sm */
      opacity: 0.8; /* opacity-80 */
    }
  `}];function oe(){const[o,t]=n.useState(!1);function r(){t(!0),setTimeout(()=>{t(!1)},3e3)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`w-[16rem] h-[18rem] flex flex-col items-center justify-center text-white text-center text-sm font-medium rounded-xl 
                border 
                px-4 py-6 gap-4 transition-all duration-300 
                ${o?"bg-red-700 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.7)]":"bg-transparent border-[#6D28D9] hover:bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,0.4)] hover:shadow-[0_0_40px_rgba(109,40,217,0.9)]"}`,children:[e.jsx("h2",{className:`text-lg font-bold ${o?"text-red-100":"text-purple-200"}`,children:o?"🔥 Awakened 🔥":'"Hover to Awaken"'}),e.jsx("p",{className:o?"text-red-200":"text-purple-300",children:o?"Believe in yourself so fiercely that even doubt surrenders.":"The future belongs to those who dare to imagine the impossible — and build it anyway."}),e.jsx("button",{onClick:r,className:`mt-2 px-4 py-1 rounded-full text-xs font-bold shadow transition duration-200 ${o?"bg-white text-red-600 hover:brightness-110":"bg-white text-[#6D28D9] hover:brightness-110"}`,children:"Inspire Me"})]})})}function te(){return e.jsxs("div",{className:"relative w-[18rem] h-[20rem] flex items-center justify-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"absolute  w-[30rem]  rounded-xl overflow-hidden p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow z-0",children:e.jsx("div",{className:"w-[100rem] h-[100rem]"})}),e.jsxs("div",{className:"relative z-10 w-[calc(100%-6px)] h-[calc(100%-6px)] flex flex-col items-center justify-center gap-4 px-4 py-6 text-center text-white bg-gray-900 rounded-lg",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Magic In Border"}),e.jsx("p",{className:"text-sm text-gray-300",children:"You may have tried to made it now here it is."})]})]})}function re(){return e.jsx(e.Fragment,{children:e.jsxs("div",{class:"flex items-center justify-center flex-col text-center relative p-6 rounded-xl bg-white/10 backdrop-blur-md border w-[18rem] h-[20rem] border-white/20 text-white transition-all duration-500 hover:shadow-[0_0_30px_5px] hover:shadow-[rgba(109,40,217,0.5)]",children:[e.jsx("h2",{class:"text-xl font-semibold mb-2",children:"Glassy Card"}),e.jsx("p",{class:"text-sm opacity-80",children:"This is a modern glassy card with a glowing gradient shadow on hover."})]})})}function ne(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Normal Cards:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Glowing Card 1:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(oe,{}),htmlCode:x[0].html,cssCode:x[0].css,jsCode:x[0].js})})}),e.jsx("p",{className:"m-4 text-xl",children:"Click on Inspire me and see ."}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["2",")","Glowing Card 2:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[53rem]",children:e.jsx(s,{preview:e.jsx(te,{}),htmlCode:x[1].html,cssCode:x[1].css})})}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2 mt-4",children:["3",")","Glowing Card 3 :"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(re,{}),htmlCode:x[2].html,cssCode:x[2].css})})})]})]})})}const ae="/Asterisk/assets/img%20(1)-BOHfiSEo.png";function se(){const[o,t]=n.useState(!0),[r,i]=n.useState(!1);function a(){t(!1),i(!0),setTimeout(()=>{t(!0),i(!1)},5e3)}return e.jsxs("div",{className:"bg-gray-900 text-white w-[15rem] h-[18rem] mt-10 relative flex flex-col p-4 items-center justify-center rounded-xl",children:[e.jsx("div",{className:`h-[7rem] w-[10rem] absolute top-1/2 left-1/2 transition-all duration-[1s] ease -translate-x-1/2 ${r?"-translate-y-[11.5rem] -rotate-45":"-translate-y-20"}`,children:e.jsx("img",{src:ae,alt:"",className:"w-full h-full"})}),e.jsxs("div",{className:`text-xl text-center transition-all delay-[0.5s] duration-[0.5s] ease overflow-hidden ${r?"opacity-100 max-w-[10rem]":"opacity-0 max-w-0"}`,children:[e.jsxs("p",{children:["Shoe: ",e.jsx("span",{className:"font-bold text-yellow-500",children:"Nike"})]}),e.jsxs("p",{children:["Price: ",e.jsx("span",{className:"font-bold text-yellow-500",children:"$49"})]})]}),e.jsxs("div",{className:"absolute top-[12rem] bottom-5",children:[o&&e.jsx("button",{onClick:a,className:"px-4 py-2 font-semibold text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600",children:"See details"}),r&&e.jsx("button",{className:"px-4 py-2 font-semibold text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600",children:"Buy Now"})]})]})}function ie(){const[o,t]=n.useState(!1);return e.jsxs("div",{onClick:()=>t(!o),className:"bg-gray-800 text-white w-[17rem] overflow-hidden h-[23rem]  rounded-xl cursor-pointer shadow-lg transition-transform hover:scale-105",children:[e.jsx("div",{className:`w-full transition-all duration-700 ease-in-out ${o?"h-[50%]":"h-full"}`,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Profile",className:"object-cover w-full h-full"})}),e.jsxs("div",{className:`transition-all duration-700 ease-in-out px-4 ${o?"opacity-100 h-[50%] py-4":"opacity-0 h-0"}`,children:[e.jsx("h2",{className:"text-xl font-bold",children:"David Johnson"}),e.jsx("p",{className:"text-yellow-400",children:"UI/UX Designer"}),e.jsx("p",{className:"mt-2 text-sm text-gray-300",children:"Passionate about crafting user-friendly digital experiences."}),e.jsxs("div",{className:"flex gap-2 mt-4",children:[e.jsx("button",{className:"px-3 py-1 transition bg-yellow-500 rounded hover:bg-yellow-600",children:"Message"}),e.jsx("button",{className:"px-3 py-1 transition bg-gray-600 rounded hover:bg-gray-700",children:"Follow"})]})]})]})}function le(){const[o,t]=n.useState(!1);return e.jsxs("div",{className:"w-[18rem] h-[24rem] perspective",children:[e.jsxs("div",{className:`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${o?"rotate-y-180":""}`,children:[e.jsxs("div",{className:"absolute flex flex-col w-full h-full overflow-hidden text-white bg-gray-800 border border-gray-700 shadow-lg backface-hidden rounded-xl",children:[e.jsx("img",{src:"https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",alt:"Course",className:"w-full h-[12rem] object-cover"}),e.jsxs("div",{className:"flex flex-col flex-1 gap-3 px-4 py-4",children:[e.jsx("h2",{className:"text-xl font-bold text-center",children:"Intro to Web Development"}),e.jsx("p",{className:"text-sm text-center text-gray-300",children:"Start your journey in web development"}),e.jsx("div",{className:"flex justify-center mt-auto",children:e.jsx("button",{onClick:()=>t(!0),className:"px-6 py-2 font-semibold text-gray-900 transition-colors rounded-lg bg-amber-400 hover:bg-amber-500",children:"See Details"})})]})]}),e.jsxs("div",{className:"absolute flex flex-col w-full h-full p-5 text-white bg-gray-800 border border-gray-700 shadow-lg backface-hidden rounded-xl rotate-y-180",children:[e.jsx("h2",{className:"mb-4 text-xl font-bold text-center",children:"Course Details"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"text-gray-400",children:"Instructor:"})," ",e.jsx("span",{className:"font-semibold text-amber-400",children:"John Doe"})]}),e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"text-gray-400",children:"Duration:"})," ",e.jsx("span",{className:"font-semibold text-amber-400",children:"6 Weeks"})]}),e.jsx("p",{className:"mt-4 text-center text-gray-300",children:"Learn HTML, CSS, and JavaScript to create responsive, modern websites from scratch."})]}),e.jsx("div",{className:"flex justify-center mt-auto",children:e.jsx("button",{onClick:()=>t(!1),className:"px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700",children:"Join Now"})})]})]}),e.jsx("style",{children:`
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
        `})]})}const m=[{html:`
    <div class="card">
      <!-- Image section -->
      <div class="card-image">
        <img src="shoe.png" alt="Shoe" />
      </div>

      <!-- Details section -->
      <div class="card-details">
        <p>Shoe: <span>Nike</span></p>
        <p>Price: <span>$49</span></p>
      </div>

      <!-- Buttons -->
      <div class="card-buttons">
        <button id="seeDetailsBtn">See details</button>
        <button id="buyNowBtn">Buy Now</button>
      </div>
    </div>
  `,css:`
    body {
      background-color: #111827; /* bg-gray-900 */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* ===== Card Styles ===== */
    .card {
      position: relative;
      background: #111827;
      color: white;
      width: 15rem;
      height: 18rem;
      margin-top: 2.5rem;
      border-radius: 0.75rem; /* rounded-xl */
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* ===== Image Styles ===== */
    .card-image {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10rem;
      height: 7rem;
      transform: translate(-50%, -5rem);
      transition: all 1s ease;
    }

    .card-image img {
      width: 100%;
      height: 100%;
    }

    /* ===== Details Styles ===== */
    .card-details {
      text-align: center;
      font-size: 1.25rem;
      overflow: hidden;
      opacity: 0;
      max-width: 0;
      transition: all 0.5s ease 0.5s;
    }

    .card-details span {
      font-weight: bold;
      color: #facc15; /* text-yellow-500 */
    }

    /* ===== Button Container ===== */
    .card-buttons {
      position: absolute;
      top: 12rem;
    }

    /* ===== Buttons ===== */
    .card-buttons button {
      padding: 0.5rem 1rem;
      font-weight: 600;
      color: white;
      background: #facc15;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      transition: background 0.3s;
    }

    .card-buttons button:hover {
      background: #eab308;
    }

    /* ===== Active States ===== */
    .card.active .card-image {
      transform: translate(-50%, -11.5rem) rotate(-45deg);
    }

    .card.active .card-details {
      opacity: 1;
      max-width: 10rem;
    }
  `,js:`
    const card = document.querySelector('.card');
    const seeDetailsBtn = document.getElementById('seeDetailsBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');

    // Initial state: hide Buy Now button
    buyNowBtn.style.display = 'none';

    seeDetailsBtn.addEventListener('click', () => {
      // Activate animation
      card.classList.add('active');

      // Toggle buttons
      seeDetailsBtn.style.display = 'none';
      buyNowBtn.style.display = 'inline-block';

      // Reverse after 5 seconds
      setTimeout(() => {
        card.classList.remove('active');
        seeDetailsBtn.style.display = 'inline-block';
        buyNowBtn.style.display = 'none';
      }, 5000);
    });
  `},{html:`
    <div class="profile-card" id="profileCard">
      <!-- Image Section -->
      <div class="profile-image">
        <img 
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop" 
          alt="Profile" 
        />
      </div>

      <!-- Details Section -->
      <div class="profile-details">
        <h2>David Johnson</h2>
        <p class="role">UI/UX Designer</p>
        <p class="description">
          Passionate about crafting user-friendly digital experiences.
        </p>
        <div class="buttons">
          <button class="btn message">Message</button>
          <button class="btn follow">Follow</button>
        </div>
      </div>
    </div>
  `,css:`
    body {
      background-color: #1f2937; /* bg-gray-800 */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* ===== Card Container ===== */
    .profile-card {
      background: #1f2937;
      color: white;
      width: 17rem;
      height: 23rem;
      border-radius: 0.75rem;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      transition: transform 0.3s;
    }

    .profile-card:hover {
      transform: scale(1.05);
    }

    /* ===== Image Section ===== */
    .profile-image {
      width: 100%;
      height: 100%;
      transition: all 0.7s ease-in-out;
    }

    .profile-image img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    /* ===== Details Section ===== */
    .profile-details {
      padding: 0 1rem;
      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: all 0.7s ease-in-out;
    }

    .profile-details h2 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .profile-details .role {
      color: #facc15; /* text-yellow-400 */
    }

    .profile-details .description {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #d1d5db; /* text-gray-300 */
    }

    .profile-details .buttons {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .btn {
      padding: 0.25rem 0.75rem;
      border-radius: 0.375rem;
      border: none;
      cursor: pointer;
      transition: background 0.3s;
    }

    .btn.message {
      background: #facc15;
      color: white;
    }

    .btn.message:hover {
      background: #eab308;
    }

    .btn.follow {
      background: #4b5563; /* bg-gray-600 */
      color: white;
    }

    .btn.follow:hover {
      background: #374151; /* bg-gray-700 */
    }

    /* ===== Active State ===== */
    .profile-card.active .profile-image {
      height: 50%;
    }

    .profile-card.active .profile-details {
      opacity: 1;
      height: 50%;
      padding: 1rem;
    }
  `,js:`
    const profileCard = document.getElementById('profileCard');

    profileCard.addEventListener('click', () => {
      profileCard.classList.toggle('active');
    });
  `},{html:`
    <div class="card-container" id="flipCard">
      <div class="card-inner">
        
        <!-- Front Side -->
        <div class="card-front">
          <img 
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" 
            alt="Course" 
          />
          <div class="card-front-content">
            <h2>Intro to Web Development</h2>
            <p>Start your journey in web development</p>
            <button class="btn see-details">See Details</button>
          </div>
        </div>
        
        <!-- Back Side -->
        <div class="card-back">
          <h2>Course Details</h2>
          <div class="course-info">
            <p><span class="label">Instructor:</span> <span class="highlight">John Doe</span></p>
            <p><span class="label">Duration:</span> <span class="highlight">6 Weeks</span></p>
            <p class="description">
              Learn HTML, CSS, and JavaScript to create responsive, modern websites from scratch.
            </p>
          </div>
          <button class="btn join-now">Join Now</button>
        </div>

      </div>
    </div>
  `,css:`
    body {
      background-color: #1f2937; /* bg-gray-800 */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* ===== Card Container ===== */
    .card-container {
      width: 18rem;
      height: 24rem;
      perspective: 1000px;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.7s;
      transform-style: preserve-3d;
    }

    .card-container.flipped .card-inner {
      transform: rotateY(180deg);
    }

    /* ===== Front & Back Common ===== */
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #1f2937;
      border: 1px solid #374151; /* border-gray-700 */
      border-radius: 0.75rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      color: white;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ===== Front ===== */
    .card-front img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }

    .card-front-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      text-align: center;
    }

    .card-front-content h2 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .card-front-content p {
      font-size: 0.875rem;
      color: #d1d5db; /* text-gray-300 */
    }

    /* ===== Back ===== */
    .card-back {
      padding: 1.25rem;
      transform: rotateY(180deg);
    }

    .card-back h2 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-align: center;
    }

    .course-info {
      flex: 1;
      font-size: 0.875rem;
      text-align: center;
    }

    .label {
      color: #9ca3af; /* text-gray-400 */
    }

    .highlight {
      font-weight: bold;
      color: #fbbf24; /* text-amber-400 */
    }

    .description {
      margin-top: 1rem;
      color: #d1d5db;
    }

    /* ===== Buttons ===== */
    .btn {
      padding: 0.5rem 1.5rem;
      font-weight: bold;
      border-radius: 0.5rem;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s;
    }

    .see-details {
      background: #fbbf24; /* amber-400 */
      color: #1f2937;
    }

    .see-details:hover {
      background: #f59e0b; /* amber-500 */
    }

    .join-now {
      background: #059669; /* emerald-600 */
      color: white;
    }

    .join-now:hover {
      background: #047857; /* emerald-700 */
    }
  `,js:`
    const flipCard = document.getElementById('flipCard');
    const seeDetailsBtn = flipCard.querySelector('.see-details');
    const joinNowBtn = flipCard.querySelector('.join-now');

    seeDetailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flipCard.classList.add('flipped');
    });

    joinNowBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flipCard.classList.remove('flipped');
    });
  `}];function de(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Specisl Cards:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Special Card 1:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(se,{}),htmlCode:m[0].html,cssCode:m[0].css,jsCode:m[0].js})})}),e.jsx("p",{className:"m-4 text-xl",children:"Click on see details"}),e.jsx("p",{className:"m-4 text-xs",children:"Recomentation: If you are not using a shoe image then remove the rotate property from css"}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["2",") ","Special Card 2:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(ie,{}),htmlCode:m[1].html,cssCode:m[1].css,jsCode:m[1].js})})}),e.jsx("p",{className:"m-4 text-xl",children:"Click on the card"}),e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["3",") ","Special Card 3:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(le,{}),htmlCode:m[2].html,cssCode:m[2].css,jsCode:m[2].js})})}),e.jsx("p",{className:"m-4 text-xl",children:"Click on see details"})]})]})})}function ce(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-black bg-white rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-bold",children:e.jsx("h1",{className:"cursor-pointer select-none",children:"Logo"})}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"About"}),e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"Service"})]}),e.jsx("button",{className:"hidden px-1 py-2 text-sm text-white bg-blue-500 rounded-md md:block hover:bg-blue-600",children:"Sign Up / Login"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full bg-white rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600",children:"Sign Up / Login"})]})]})}function be(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-black bg-white rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-bold",children:e.jsx("h1",{className:"cursor-pointer select-none",children:"Logo"})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"About"}),e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"Service"})]}),e.jsx("button",{className:"hidden px-1 py-2 text-sm text-white bg-blue-500 rounded-md md:block hover:bg-blue-600",children:"Sign Up / Login"})]}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full bg-white rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600",children:"Sign Up / Login"})]})]})}function me(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-black bg-white rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsxs("div",{className:"flex items-center gap-2 text-2xl font-bold",children:[e.jsx("h1",{className:"cursor-pointer select-none",children:"Logo"}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"About"}),e.jsx("li",{className:"cursor-pointer hover:text-blue-600",children:"Service"})]})]}),e.jsx("button",{className:"hidden px-1 py-2 text-sm text-white bg-blue-500 rounded-md md:block hover:bg-blue-600",children:"Sign Up / Login"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full bg-white rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-600",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600",children:"Sign Up / Login"})]})]})}const u=[{id:"nav1",html:`
    <!-- Responsive Navbar -->
    <nav class="navbar">
      <!-- Logo -->
      <div class="navbar-logo">Logo</div>

      <!-- Desktop Navigation Links -->
      <ul class="navbar-links" id="navLinks">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Sign Up/Login Button -->
      <button class="navbar-btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu (hidden by default) -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="navbar-btn">Sign Up / Login</button>
      </div>
    </nav>
  `,css:`
    /* Navbar Container */
    .navbar {
      width: 100%;
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: relative;
      border-radius: 6px;
    }

    /* Logo Styling */
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Navigation Links (Desktop) */
    .navbar-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effect for Links */
    .navbar-links li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .navbar-links li:hover {
      color: #2563eb; /* blue-600 */
    }

    /* Sign Up/Login Button */
    .navbar-btn {
      background: #3b82f6; /* blue-500 */
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s;
    }

    .navbar-btn:hover {
      background: #2563eb; /* blue-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none; /* Hidden on mobile */
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      z-index: 100;
    }

    /* Mobile Menu Links */
    .mobile-menu a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #2563eb;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .navbar-links {
        display: flex; /* Show links on desktop */
      }
      .desktop-btn {
        display: block; /* Show button on desktop */
      }
      .menu-toggle {
        display: none; /* Hide toggle on desktop */
      }
      .mobile-menu {
        display: none !important; /* Always hidden on desktop */
      }
    }
  `,js:`
    // Run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle"); // Hamburger button
      const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu container

      // Toggle mobile menu visibility on click
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰"; // Change icon back to hamburger
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖"; // Change icon to close
        }
      });
    });
  `},{id:"nav2",html:`
    <!-- Responsive Navbar -->
    <nav class="navbar">
      <!-- Logo -->
      <div class="navbar-logo">Logo</div>

      <!-- Desktop Links + Button Group -->
      <div class="navbar-group">
        <ul class="navbar-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
        <button class="navbar-btn desktop-btn">Sign Up / Login</button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="navbar-btn">Sign Up / Login</button>
      </div>
    </nav>
  `,css:`
    /* Navbar Container */
    .navbar {
      width: 100%;
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: relative;
      border-radius: 6px;
    }

    /* Logo Styling */
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Group for Links + Button */
    .navbar-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Desktop Navigation Links */
    .navbar-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effect for Links */
    .navbar-links li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .navbar-links li:hover {
      color: #2563eb; /* blue-600 */
    }

    /* Sign Up/Login Button */
    .navbar-btn {
      background: #3b82f6; /* blue-500 */
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s;
    }

    .navbar-btn:hover {
      background: #2563eb; /* blue-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none; /* Hidden on mobile */
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      z-index: 100;
    }

    /* Mobile Menu Links */
    .mobile-menu a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #2563eb;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .navbar-links {
        display: flex; /* Show links on desktop */
      }
      .desktop-btn {
        display: block; /* Show button on desktop */
      }
      .menu-toggle {
        display: none; /* Hide toggle on desktop */
      }
      .mobile-menu {
        display: none !important; /* Always hidden on desktop */
      }
    }
  `,js:`
    // Run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle"); // Hamburger button
      const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu container

      // Toggle mobile menu visibility on click
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰"; // Hamburger icon
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖"; // Close icon
        }
      });
    });
  `},{id:"nav3",html:`
    <!-- Responsive Navbar -->
    <nav class="navbar">
      <!-- Left Section: Logo + Links -->
      <div class="navbar-left">
        <div class="navbar-logo">Logo</div>
        <ul class="navbar-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>

      <!-- Desktop Sign Up/Login Button -->
      <button class="navbar-btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="navbar-btn">Sign Up / Login</button>
      </div>
    </nav>
  `,css:`
    /* Navbar Container */
    .navbar {
      width: 100%;
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: relative;
      border-radius: 6px;
    }

    /* Left Section: Logo + Links */
    .navbar-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Logo Styling */
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Desktop Navigation Links */
    .navbar-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effect for Links */
    .navbar-links li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .navbar-links li:hover {
      color: #2563eb; /* blue-600 */
    }

    /* Sign Up/Login Button */
    .navbar-btn {
      background: #3b82f6; /* blue-500 */
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s;
    }

    .navbar-btn:hover {
      background: #2563eb; /* blue-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none; /* Hidden on mobile */
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      z-index: 100;
    }

    /* Mobile Menu Links */
    .mobile-menu a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #2563eb;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .navbar-links {
        display: flex; /* Show links on desktop */
      }
      .desktop-btn {
        display: block; /* Show button on desktop */
      }
      .menu-toggle {
        display: none; /* Hide toggle on desktop */
      }
      .mobile-menu {
        display: none !important; /* Always hidden on desktop */
      }
    }
  `,js:`
    // Run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle"); // Hamburger button
      const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu container

      // Toggle mobile menu visibility on click
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰"; // Hamburger icon
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖"; // Close icon
        }
      });
    });
  `}];function ue(){const[o,t]=n.useState(!1);return n.useEffect(()=>{t(!0)},[]),e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:e.jsxs("div",{className:"bg-[#1E1E1E] text-gray-300 p-6 rounded-lg shadow-lg max-w-[30rem] w-[90%] relative border border-[#3B4451]",children:[e.jsx("button",{onClick:()=>t(!1),className:"absolute text-xl text-gray-400 top-2 right-3 hover:text-white",children:"✖"}),e.jsxs("p",{className:"text-sm font-medium leading-relaxed sm:text-base md:text-lg",children:["All of the navbars are responsive. To verify this, please reduce your screen size.",e.jsx("br",{className:"hidden sm:block"}),"We recommend using a larger screen to choose the navbar design, because on smaller screens they may look similar."]})]})}),e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Normal Navbars:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Navbar 1:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(ce,{}),htmlCode:u[0].html,cssCode:u[0].css,jsCode:u[0].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["2",") ","Navbar 2:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(be,{}),htmlCode:u[1].html,cssCode:u[1].css,jsCode:u[1].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["3",") ","Navbar  3:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(me,{}),htmlCode:u[2].html,cssCode:u[2].css,jsCode:u[2].js})})})]})]})]})}function pe(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-white bg-[#1E1E1E] rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-bold",children:e.jsx("h1",{className:"cursor-pointer select-none",children:"Logo"})}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Home"}),e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"About"}),e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Service"})]}),e.jsx("button",{className:"hidden px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:block hover:from-blue-600 hover:to-purple-600",children:"Sign Up / Login"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full bg-[#1E1E1E] rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Home"}),e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"About"}),e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",children:"Sign Up / Login"})]})]})}function xe(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-white bg-[#1E1E1E] rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-bold",children:e.jsx("h1",{className:"cursor-pointer select-none",children:"Logo"})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Home"}),e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"About"}),e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Service"})]}),e.jsx("button",{className:"hidden px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:block hover:from-blue-600 hover:to-purple-600",children:"Sign Up / Login"})]}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full bg-[#1E1E1E] rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Home"}),e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"About"}),e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",children:"Sign Up / Login"})]})]})}function ge(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-white bg-[#1E1E1E] rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsxs("div",{className:"flex items-center gap-2 text-2xl font-bold",children:[e.jsx("h1",{className:"cursor-pointer select-none",children:"Logo"}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Home"}),e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"About"}),e.jsx("li",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Service"})]})]}),e.jsx("button",{className:"hidden px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:block hover:from-blue-600 hover:to-purple-600",children:"Sign Up / Login"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full bg-[#1E1E1E] rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Home"}),e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"About"}),e.jsx("a",{className:"transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",children:"Sign Up / Login"})]})]})}const p=[{html:`
    <!-- Dark Theme Responsive Navbar -->
    <nav class="navbar-dark">
      <!-- Logo -->
      <div class="logo">Logo</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links" id="navLinks">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Sign Up/Login Button -->
      <button class="btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="btn">Sign Up / Login</button>
      </div>
    </nav>
  `,css:`
    /* Navbar Container */
    .navbar-dark {
      width: 100%;
      background: #1E1E1E;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12vh;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: relative;
    }

    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Navigation Links (Desktop) */
    .nav-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effects for Links */
    .nav-links li,
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s;
    }

    .nav-links li:hover,
    .mobile-menu a:hover {
      color: #60a5fa; /* blue-400 */
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Sign Up/Login Button */
    .btn {
      background: linear-gradient(to right, #3b82f6, #8b5cf6); /* blue-500 to purple-500 */
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    .btn:hover {
      background: linear-gradient(to right, #2563eb, #7c3aed); /* blue-600 to purple-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none;
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    /* Mobile Menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #1E1E1E;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 50;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
      .desktop-btn {
        display: block;
      }
      .menu-toggle {
        display: none;
      }
      .mobile-menu {
        display: none !important;
      }
    }
  `,js:`
    // Wait until DOM is loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");

      // Toggle menu visibility
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰";
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖";
        }
      });
    });
  `},{html:`
    <!-- Dark Theme Navbar (DarkNav2) -->
    <nav class="navbar-dark">
      
      <!-- Logo -->
      <div class="logo">Logo</div>

      <!-- Desktop Navigation Links + Button Container -->
      <div class="nav-actions">
        <ul class="nav-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>

        <!-- Sign Up/Login Button -->
        <button class="btn desktop-btn">Sign Up / Login</button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="btn">Sign Up / Login</button>
      </div>
    </nav>
  `,css:`
    /* Navbar Container */
    .navbar-dark {
      width: 100%;
      background: #1E1E1E;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12vh;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: relative;
    }

    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Flex container for links + button */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* Navigation Links (Desktop) */
    .nav-links {
      display: none; /* Mobile hidden */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover styles for links */
    .nav-links li,
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s;
    }

    .nav-links li:hover,
    .mobile-menu a:hover {
      color: #60a5fa; /* blue-400 */
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Gradient Button */
    .btn {
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    .btn:hover {
      background: linear-gradient(to right, #2563eb, #7c3aed);
    }

    /* Desktop button visibility */
    .desktop-btn {
      display: none;
    }

    /* Mobile menu toggle button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    /* Mobile dropdown menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #1E1E1E;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 50;
    }

    /* Show desktop layout at 768px and above */
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
      .desktop-btn {
        display: block;
      }
      .menu-toggle {
        display: none;
      }
      .mobile-menu {
        display: none !important;
      }
    }
  `,js:`
    // Toggle mobile menu visibility
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");

      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰";
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖";
        }
      });
    });
  `},{html:`
    <!-- Dark Theme Navbar (DarkNav3) -->
    <nav class="navbar-dark">
      
      <!-- Logo + Inline Navigation Links -->
      <div class="logo-section">
        <div class="logo">Logo</div>
        <ul class="nav-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>

      <!-- Sign Up/Login Button (Desktop) -->
      <button class="btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="btn">Sign Up / Login</button>
      </div>
    </nav>
  `,css:`
    /* Navbar Container */
    .navbar-dark {
      width: 100%;
      background: #1E1E1E;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12vh;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: relative;
    }

    /* Logo + inline nav container */
    .logo-section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Navigation Links (Desktop) */
    .nav-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover effect for links */
    .nav-links li,
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s;
    }

    .nav-links li:hover,
    .mobile-menu a:hover {
      color: #60a5fa; /* blue-400 */
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Gradient Button */
    .btn {
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    .btn:hover {
      background: linear-gradient(to right, #2563eb, #7c3aed);
    }

    /* Desktop-only button */
    .desktop-btn {
      display: none;
    }

    /* Mobile menu toggle */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    /* Mobile dropdown menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #1E1E1E;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 50;
    }

    /* Desktop view */
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
      .desktop-btn {
        display: block;
      }
      .menu-toggle {
        display: none;
      }
      .mobile-menu {
        display: none !important;
      }
    }
  `,js:`
    // Mobile menu toggle functionality
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");

      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰";
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖";
        }
      });
    });
  `}];function he(){const[o,t]=n.useState(!1);return n.useEffect(()=>{t(!0)},[]),e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:e.jsxs("div",{className:"bg-[#1E1E1E] text-gray-300 p-6 rounded-lg shadow-lg max-w-[30rem] w-[90%] relative border border-[#3B4451]",children:[e.jsx("button",{onClick:()=>t(!1),className:"absolute text-xl text-gray-400 top-2 right-3 hover:text-white",children:"✖"}),e.jsxs("p",{className:"text-sm font-medium leading-relaxed sm:text-base md:text-lg",children:["All of the navbars are responsive. To verify this, please reduce your screen size.",e.jsx("br",{className:"hidden sm:block"}),"We recommend using a larger screen to choose the navbar design, because on smaller screens they may look similar."]})]})}),e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Dark Navbars:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Navbar 1:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(pe,{}),htmlCode:p[0].html,cssCode:p[0].css,jsCode:p[0].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["2",") ","Navbar 2:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(xe,{}),htmlCode:p[1].html,cssCode:p[1].css,jsCode:p[1].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["3",") ","Navbar  3:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(ge,{}),htmlCode:p[2].html,cssCode:p[2].css,jsCode:p[2].js})})})]})]})]})}function fe(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-md shadow-lg flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-bold cursor-pointer",children:"GlassyNav"}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"transition cursor-pointer hover:text-blue-300",children:"Home"}),e.jsx("li",{className:"transition cursor-pointer hover:text-blue-300",children:"About"}),e.jsx("li",{className:"transition cursor-pointer hover:text-blue-300",children:"Service"})]}),e.jsx("button",{className:"hidden px-3 py-2 text-sm text-white transition rounded-md bg-blue-500/70 backdrop-blur-sm md:block hover:bg-blue-400/70",children:"Sign Up"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full animate-slideDown backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-md shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"cursor-pointer hover:text-blue-300",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-300",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-300",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm text-white rounded-md bg-blue-500/70 backdrop-blur-sm hover:bg-blue-400/70",children:"Sign Up"})]})]})}function ve(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md shadow-lg flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-extrabold tracking-wide cursor-pointer",children:"GlowNav"}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-semibold md:flex",children:[e.jsx("li",{className:"cursor-pointer hover:drop-shadow-[0_0_10px_#fff] transition",children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:drop-shadow-[0_0_10px_#fff] transition",children:"About"}),e.jsx("li",{className:"cursor-pointer hover:drop-shadow-[0_0_10px_#fff] transition",children:"Service"})]}),e.jsx("button",{className:"hidden px-4 py-2 text-sm text-white bg-black/30 border border-white/30 rounded-md md:block hover:bg-white/20 hover:drop-shadow-[0_0_5px_#fff] transition",children:"Join Now"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full animate-slideDown bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-b-md shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"cursor-pointer hover:drop-shadow-[0_0_10px_#fff]",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:drop-shadow-[0_0_10px_#fff]",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:drop-shadow-[0_0_10px_#fff]",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm text-white bg-black/30 border border-white/30 rounded-md hover:bg-white/20 hover:drop-shadow-[0_0_5px_#fff]",children:"Join Now"})]})]})}function we(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full h-[12vh] px-4 flex items-center justify-between rounded-md shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl font-bold tracking-wide cursor-pointer",children:"Aurora"}),e.jsxs("ul",{className:"hidden gap-4 font-medium md:flex",children:[e.jsx("li",{className:"px-3 py-1 transition rounded-full cursor-pointer hover:bg-white hover:text-indigo-600",children:"Home"}),e.jsx("li",{className:"px-3 py-1 transition rounded-full cursor-pointer hover:bg-white hover:text-indigo-600",children:"Features"}),e.jsx("li",{className:"px-3 py-1 transition rounded-full cursor-pointer hover:bg-white hover:text-indigo-600",children:"Contact"})]}),e.jsx("button",{className:"hidden px-4 py-2 font-semibold text-indigo-600 transition bg-white rounded-full md:block hover:bg-indigo-100",children:"Join Now"}),e.jsx("button",{className:"text-3xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),e.jsxs("div",{className:`fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-md shadow-lg text-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ${o?"translate-x-0":"translate-x-full"}`,children:[e.jsx("button",{className:"self-end text-3xl",onClick:()=>t(!1),children:"✖"}),e.jsx("a",{className:"cursor-pointer hover:text-indigo-200",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:text-indigo-200",children:"Features"}),e.jsx("a",{className:"cursor-pointer hover:text-indigo-200",children:"Contact"}),e.jsx("button",{className:"px-4 py-2 font-semibold text-indigo-600 transition bg-white rounded-full hover:bg-indigo-100",children:"Join Now"})]})]})}function ye(){const[o,t]=n.useState(!1);return e.jsxs("nav",{className:"w-[30rem] max-w-full text-white bg-[#222] font-mono rounded-md shadow-[0_0_0_3px_#ffcc00] flex justify-between items-center h-[12vh] p-2 md:p-4 relative",children:[e.jsx("div",{className:"text-2xl font-bold tracking-tight cursor-pointer",children:"PixelNav"}),e.jsxs("ul",{className:"hidden gap-5 text-sm font-bold uppercase md:flex",children:[e.jsx("li",{className:"cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1 transition",children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1 transition",children:"About"}),e.jsx("li",{className:"cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1 transition",children:"Service"})]}),e.jsx("button",{className:"hidden px-3 py-2 text-sm font-bold text-black bg-[#ffcc00] border-2 border-black rounded-none md:block hover:bg-yellow-400 transition",children:"Play"}),e.jsx("button",{className:"text-2xl md:hidden",onClick:()=>t(!o),children:o?"✖":"☰"}),o&&e.jsxs("div",{className:"absolute top-[12vh] left-0 w-full animate-slideDown bg-[#222] rounded-b-md shadow-[0_0_0_3px_#ffcc00] flex flex-col items-center gap-4 py-4 md:hidden z-50",children:[e.jsx("a",{className:"cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1",children:"Service"}),e.jsx("button",{className:"px-4 py-2 text-sm font-bold text-black bg-[#ffcc00] border-2 border-black rounded-none hover:bg-yellow-400",children:"Play"})]})]})}function je(){const[o,t]=n.useState({x:0,y:0}),[r,i]=n.useState(!1),a=n.useRef(null);return n.useEffect(()=>{const l=h=>{const w=a.current.getBoundingClientRect();t({x:h.clientX-w.left,y:h.clientY-w.top})},v=a.current;return v.addEventListener("mousemove",l),()=>{v.removeEventListener("mousemove",l)}},[]),e.jsxs("nav",{ref:a,className:"relative w-[30rem] max-w-full h-[12vh] bg-gray-900 text-white rounded-md shadow-lg flex justify-between items-center px-4 md:px-6",children:[e.jsx("div",{className:"absolute w-24 h-24 transition-all duration-500 ease-out rounded-full pointer-events-none bg-purple-500/40 blur-2xl",style:{top:`${o.y-48}px`,left:`${o.x-48}px`}}),e.jsx("div",{className:"z-10 text-lg font-bold cursor-pointer",children:"SmoothGlow"}),e.jsxs("ul",{className:"z-10 hidden gap-4 text-sm font-medium md:flex",children:[e.jsx("li",{className:"cursor-pointer hover:text-purple-300",children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:text-purple-300",children:"About"}),e.jsx("li",{className:"cursor-pointer hover:text-purple-300",children:"Services"})]}),e.jsx("button",{className:"z-10 text-2xl md:hidden",onClick:()=>i(!r),children:r?"✖":"☰"}),r&&e.jsxs("div",{className:`absolute top-[12vh] left-0 w-full bg-gray-900 border-t border-purple-500 flex flex-col items-center gap-4 py-4 md:hidden z-50\r
                    animate-slideDown`,children:[e.jsx("a",{className:"cursor-pointer hover:text-purple-300",children:"Home"}),e.jsx("a",{className:"cursor-pointer hover:text-purple-300",children:"About"}),e.jsx("a",{className:"cursor-pointer hover:text-purple-300",children:"Services"})]})]})}const d=[{id:"special-nav-1",html:`
    <!-- Glassy Navbar -->
    <nav class="glassy-nav">
      
      <!-- Logo -->
      <div class="nav-logo">GlassyNav</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop "Sign Up" Button -->
      <button class="nav-signup">Sign Up</button>

      <!-- Mobile Menu Toggle Button (Hamburger / Close) -->
      <button class="nav-toggle" id="navToggle">☰</button>

      <!-- Mobile Menu (Initially Hidden) -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="nav-signup">Sign Up</button>
      </div>
    </nav>
  `,css:`
    /* -------------------- BASIC RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #0f172a; /* Dark background for contrast */
      color: white;
      padding: 20px;
    }

    /* -------------------- NAVBAR CONTAINER -------------------- */
    .glassy-nav {
      width: 100%;
      max-width: 1200px; /* Prevent stretching too wide */
      margin: auto;
      background: rgba(255, 255, 255, 0.1); /* Transparent white */
      backdrop-filter: blur(10px); /* Glass effect */
      border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border */
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2); /* Soft shadow */
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
      font-weight: 600;
    }

    .nav-links li {
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .nav-links li:hover {
      color: #93c5fd; /* Light blue hover */
    }

    /* -------------------- SIGN UP BUTTON -------------------- */
    .nav-signup {
      background: rgba(59, 130, 246, 0.7); /* Blue glassy button */
      color: white;
      border: none;
      padding: 8px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.3s ease;
      backdrop-filter: blur(5px);
    }

    .nav-signup:hover {
      background: rgba(96, 165, 250, 0.7);
    }

    /* -------------------- MOBILE MENU TOGGLE BUTTON -------------------- */
    .nav-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: none; /* Hidden on desktop */
    }

    /* -------------------- MOBILE MENU -------------------- */
    .mobile-menu {
      display: none; /* Hidden by default */
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      padding: 16px 0;
      animation: slideDown 0.3s ease;
    }

    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .mobile-menu a:hover {
      color: #93c5fd;
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* -------------------- RESPONSIVE STYLES -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .nav-signup {
        display: none; /* Hide desktop links & button */
      }
      .nav-toggle {
        display: block; /* Show hamburger button */
      }
    }
  `,js:`
    // Get DOM Elements
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle mobile menu visibility
    navToggle.addEventListener("click", () => {
      if (mobileMenu.style.display === "flex") {
        // Hide menu
        mobileMenu.style.display = "none";
        navToggle.textContent = "☰"; // Show hamburger icon
      } else {
        // Show menu
        mobileMenu.style.display = "flex";
        navToggle.textContent = "✖"; // Show close icon
      }
    });
  `},{id:"special-nav-2",html:`
    <!-- Gradient Glow Navbar -->
    <nav class="glow-nav">
      
      <!-- Logo -->
      <div class="nav-logo">GlowNav</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Join Button -->
      <button class="nav-join">Join Now</button>

      <!-- Mobile Menu Toggle -->
      <button class="nav-toggle" id="navToggle">☰</button>

      <!-- Mobile Menu (Initially Hidden) -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="nav-join">Join Now</button>
      </div>
    </nav>
  `,css:`
    /* -------------------- BASIC RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #0f172a; /* Dark background for contrast */
      color: white;
      padding: 20px;
    }

    /* -------------------- NAVBAR CONTAINER -------------------- */
    .glow-nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      background: linear-gradient(to right, #ec4899, #8b5cf6, #6366f1); /* Pink → Purple → Indigo */
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 1px;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
      font-weight: 600;
    }

    .nav-links li {
      cursor: pointer;
      transition: filter 0.3s ease;
    }

    .nav-links li:hover {
      filter: drop-shadow(0 0 10px #fff);
    }

    /* -------------------- JOIN BUTTON -------------------- */
    .nav-join {
      background: rgba(0, 0, 0, 0.3);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .nav-join:hover {
      background: rgba(255, 255, 255, 0.2);
      filter: drop-shadow(0 0 5px #fff);
    }

    /* -------------------- MOBILE MENU TOGGLE -------------------- */
    .nav-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: none; /* Hidden on desktop */
    }

    /* -------------------- MOBILE MENU -------------------- */
    .mobile-menu {
      display: none; /* Hidden by default */
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: linear-gradient(to bottom, #ec4899, #8b5cf6, #6366f1);
      border-radius: 0 0 8px 8px;
      padding: 16px 0;
      animation: slideDown 0.3s ease;
    }

    .mobile-menu a {
      cursor: pointer;
      transition: filter 0.3s ease;
    }

    .mobile-menu a:hover {
      filter: drop-shadow(0 0 10px #fff);
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* -------------------- RESPONSIVE STYLES -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .nav-join {
        display: none; /* Hide desktop items */
      }
      .nav-toggle {
        display: block; /* Show hamburger menu */
      }
    }
  `,js:`
    // Get DOM elements
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle mobile menu visibility
    navToggle.addEventListener("click", () => {
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        navToggle.textContent = "☰"; // Hamburger icon
      } else {
        mobileMenu.style.display = "flex";
        navToggle.textContent = "✖"; // Close icon
      }
    });
  `},{id:"special-nav-3",html:`
    <!-- Aurora Gradient Navbar -->
    <nav class="aurora-nav">
      
      <!-- Logo -->
      <div class="nav-logo">Aurora</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>

      <!-- Desktop Join Button -->
      <button class="nav-join">Join Now</button>

      <!-- Mobile Menu Toggle -->
      <button class="nav-toggle" id="navToggle">☰</button>

      <!-- Slide-in Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <button class="close-btn" id="closeMenu">✖</button>
        <a>Home</a>
        <a>Features</a>
        <a>Contact</a>
        <button class="nav-join">Join Now</button>
      </div>
    </nav>
  `,css:`
    /* -------------------- RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: white;
      padding: 20px;
    }

    /* -------------------- NAV CONTAINER -------------------- */
    .aurora-nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      height: 70px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      background: linear-gradient(to right, #6366f1, #8b5cf6, #ec4899);
      overflow: hidden;
      position: relative;
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 16px;
      list-style: none;
      font-weight: 500;
    }
    .nav-links li {
      padding: 6px 12px;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .nav-links li:hover {
      background: white;
      color: #4338ca; /* Indigo-600 */
    }

    /* -------------------- DESKTOP JOIN BUTTON -------------------- */
    .nav-join {
      background: white;
      color: #4338ca;
      font-weight: 600;
      border: none;
      border-radius: 9999px;
      padding: 8px 16px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .nav-join:hover {
      background: #e0e7ff;
    }

    /* -------------------- MOBILE MENU TOGGLE -------------------- */
    .nav-toggle {
      font-size: 1.8rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: none;
    }

    /* -------------------- SLIDE-IN MOBILE MENU -------------------- */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 250px;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      box-shadow: -4px 0 12px rgba(0,0,0,0.3);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 1000;
    }
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s ease;
    }
    .mobile-menu a:hover {
      color: #c7d2fe; /* Indigo-200 */
    }

    /* -------------------- CLOSE BUTTON -------------------- */
    .close-btn {
      align-self: flex-end;
      font-size: 1.8rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }

    /* -------------------- RESPONSIVE STYLES -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .nav-join {
        display: none;
      }
      .nav-toggle {
        display: block;
      }
    }

    /* -------------------- MOBILE MENU OPEN STATE -------------------- */
    .mobile-menu.open {
      transform: translateX(0);
    }
  `,js:`
    // Select elements
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    // Open menu
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });

    // Close menu
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  `},{id:"special-nav-4",html:`
    <!-- Pixel Style Navbar -->
    <nav class="pixel-nav">
      <!-- Logo -->
      <div class="nav-logo">PixelNav</div>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Play Button -->
      <button class="play-btn">Play</button>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="play-btn">Play</button>
      </div>
    </nav>
  `,css:`
    /* -------------------- RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #111;
      font-family: monospace;
      color: white;
      padding: 20px;
    }

    /* -------------------- NAV CONTAINER -------------------- */
    .pixel-nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      height: 12vh;
      padding: 8px 16px;
      background: #222;
      color: white;
      font-family: monospace;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 0 0 3px #ffcc00;
      position: relative;
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -1px;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.9rem;
    }
    .nav-links li {
      cursor: pointer;
      padding: 4px 8px;
      transition: all 0.2s ease;
    }
    .nav-links li:hover {
      background: #ffcc00;
      color: black;
    }

    /* -------------------- DESKTOP PLAY BUTTON -------------------- */
    .play-btn {
      display: none;
      background: #ffcc00;
      color: black;
      font-weight: bold;
      padding: 6px 12px;
      border: 2px solid black;
      border-radius: 0;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.2s ease;
    }
    .play-btn:hover {
      background: #facc15;
    }

    /* -------------------- MOBILE MENU TOGGLE -------------------- */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
    }

    /* -------------------- MOBILE DROPDOWN -------------------- */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #222;
      box-shadow: 0 0 0 3px #ffcc00;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 16px 0;
      z-index: 50;
    }
    .mobile-menu a {
      padding: 4px 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .mobile-menu a:hover {
      background: #ffcc00;
      color: black;
    }

    /* -------------------- RESPONSIVE -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .pixel-nav > .play-btn {
        display: none;
      }
      .menu-toggle {
        display: block;
      }
      .play-btn {
        display: block;
      }
    }

    /* -------------------- MOBILE MENU OPEN STATE -------------------- */
    .mobile-menu.open {
      display: flex;
      animation: slideDown 0.3s ease forwards;
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,js:`
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuToggle.textContent = mobileMenu.classList.contains("open") ? "✖" : "☰";
    });
  `},{id:"special-nav-5",html:`
    <!-- SmoothGlow Navbar -->
    <nav class="smoothglow-nav" id="smoothNav">
      <!-- Glow Effect -->
      <div class="nav-glow" id="navGlow"></div>

      <!-- Logo -->
      <div class="nav-logo">SmoothGlow</div>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>

      <!-- Mobile Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
      </div>
    </nav>
  `,css:`
    /* -------------------- RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #111;
      font-family: sans-serif;
      padding: 20px;
      color: white;
    }

    /* -------------------- NAV CONTAINER -------------------- */
    .smoothglow-nav {
      width: 100%;
      max-width: 1200px;
      height: 12vh;
      background: #111827; /* Tailwind gray-900 */
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    /* -------------------- GLOW EFFECT -------------------- */
    .nav-glow {
      position: absolute;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: rgba(168, 85, 247, 0.4); /* purple-500/40 */
      filter: blur(24px);
      pointer-events: none;
      transition: top 0.5s ease-out, left 0.5s ease-out;
      z-index: 0;
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.1rem;
      font-weight: bold;
      z-index: 1;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 16px;
      font-size: 0.9rem;
      font-weight: 500;
      z-index: 1;
      list-style: none;
    }
    .nav-links li {
      cursor: pointer;
      transition: color 0.2s ease;
    }
    .nav-links li:hover {
      color: #d8b4fe; /* purple-300 */
    }

    /* -------------------- MENU TOGGLE -------------------- */
    .menu-toggle {
      display: none;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      z-index: 1;
      cursor: pointer;
    }

    /* -------------------- MOBILE MENU -------------------- */
    .mobile-menu {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      background: #111827;
      border-top: 1px solid #a855f7;
      padding: 16px 0;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      z-index: 50;
      animation: slideDown 0.3s ease forwards;
    }
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.2s ease;
    }
    .mobile-menu a:hover {
      color: #d8b4fe;
    }

    /* -------------------- RESPONSIVE -------------------- */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .menu-toggle {
        display: block;
      }
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* -------------------- OPEN MENU STATE -------------------- */
    .mobile-menu.open {
      display: flex;
    }
  `,js:`
    const smoothNav = document.getElementById("smoothNav");
    const navGlow = document.getElementById("navGlow");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Glow follow effect
    smoothNav.addEventListener("mousemove", (e) => {
      const rect = smoothNav.getBoundingClientRect();
      const x = e.clientX - rect.left - 48; // center glow
      const y = e.clientY - rect.top - 48;
      navGlow.style.left = x + "px";
      navGlow.style.top = y + "px";
    });

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuToggle.textContent = mobileMenu.classList.contains("open") ? "✖" : "☰";
    });
  `}];function ke(){const[o,t]=n.useState(!1);return n.useEffect(()=>{t(!0)},[]),e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:e.jsxs("div",{className:"bg-[#1E1E1E] text-gray-300 p-6 rounded-lg shadow-lg max-w-[30rem] w-[90%] relative border border-[#3B4451]",children:[e.jsx("button",{onClick:()=>t(!1),className:"absolute text-xl text-gray-400 top-2 right-3 hover:text-white",children:"✖"}),e.jsxs("p",{className:"text-sm font-medium leading-relaxed sm:text-base md:text-lg",children:["All of the navbars are responsive. To verify this, please reduce your screen size.",e.jsx("br",{className:"hidden sm:block"}),"We recommend using a larger screen to choose the navbar design, because on smaller screens they may look similar."]})]})}),e.jsxs("div",{className:"font-mono lg:ml-[10rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:"Dark Navbars:"}),e.jsxs("section",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["1",") ","Navbar 1:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(fe,{}),htmlCode:d[0].html,cssCode:d[0].css,jsCode:d[0].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["2",") ","Navbar 2:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(ve,{}),htmlCode:d[1].html,cssCode:d[1].css,jsCode:d[1].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["3",") ","Navbar  3:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(we,{}),htmlCode:d[2].html,cssCode:d[2].css,jsCode:d[2].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["4",") ","Navbar  4:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(ye,{}),htmlCode:d[3].html,cssCode:d[3].css,jsCode:d[3].js})})}),e.jsxs("h1",{className:"mt-4 text-2xl font-bold text-white mb-6 border-b-2 border-[#3B4451] inline-block pb-2",children:["5",") ","Navbar  5:"]}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full gap-5",children:e.jsx("div",{className:"w-full md:w-[50rem]",children:e.jsx(s,{preview:e.jsx(je,{}),htmlCode:d[4].html,cssCode:d[4].css,jsCode:d[4].js})})})]})]})]})}function Ce({menue:o,setMenue:t,type:r,selectedComponent:i}){return e.jsx(e.Fragment,{children:e.jsxs("main",{className:" mb-4 w-[100vw]  lg:ml-[30vh] mt-[19vh] md:mt-[14vh] p-6 md:p-4 md:flex flex-col items-start gap-5",children:[e.jsx("button",{onClick:()=>t(!0),className:`text-2xl z-40 fixed top-[14vh] left-4 bg-black p-4 rounded-xl lg:hidden ${o?"hidden":""}`,children:e.jsx(I,{})}),i==="Buttons"&&e.jsxs(e.Fragment,{children:[r==="Normal Buttons"&&e.jsx(e.Fragment,{children:e.jsx(H,{})}),r==="Glowing Buttons"&&e.jsx(e.Fragment,{children:e.jsx(G,{})}),r==="Animated Buttons"&&e.jsx(e.Fragment,{children:e.jsx(J,{})})]}),i==="Cards"&&e.jsxs(e.Fragment,{children:[r==="Normal Cards"&&e.jsx(e.Fragment,{children:e.jsx(ee,{})}),r==="Glowing Cards"&&e.jsx(e.Fragment,{children:e.jsx(ne,{})}),r==="Special Cards"&&e.jsx(e.Fragment,{children:e.jsx(de,{})})]}),i==="Navbars"&&e.jsxs(e.Fragment,{children:[r==="Normal Navbars"&&e.jsx(e.Fragment,{children:e.jsx(ue,{})}),r==="Dark Navbars"&&e.jsx(e.Fragment,{children:e.jsx(he,{})}),r==="Special Navbars"&&e.jsx(e.Fragment,{children:e.jsx(ke,{})})]})]})})}function Ne(o){return y({attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"},child:[]}]})(o)}function _e({menue:o,setMenue:t,setType:r,text1:i,text2:a,text3:l}){return e.jsx(e.Fragment,{children:e.jsxs("aside",{className:`h-[100vh] font-mono lg:p-4 transition-all duration-[0.5s] ease ${o?"w-[30vh] p-4":"w-0"} lg:w-[30vh] bg-[#2A303C] fixed inset-0`,children:[o&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!1),className:"text-2xl mt-[14vh] lg:hidden",children:e.jsx(Ne,{})}),e.jsxs("div",{className:"flex flex-col items-center justify-between w-full lg:hidden h-[70vh] ",children:[e.jsxs("ul",{className:"flex flex-col items-center w-full gap-4 mt-4 font-semibold lg:hidden",children:[e.jsx("li",{onClick:()=>{r(`${i}`),window.scrollTo({top:0,behavior:"smooth"})},className:"px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6",children:i}),e.jsx("li",{onClick:()=>{r(`${a}`),window.scrollTo({top:0,behavior:"smooth"})},className:"px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6",children:a}),e.jsx("li",{onClick:()=>{r(`${l}`),window.scrollTo({top:0,behavior:"smooth"})},className:"px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6",children:l})]}),e.jsxs("div",{className:"flex items-center font-mono text-xl font-extrabold tracking-widest text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",children:[e.jsx("span",{className:"inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",children:"**"}),"ASTERISK",e.jsx("span",{className:"inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",children:"**"})]})]})]}),e.jsxs("div",{className:"hidden w-full lg:flex mt-[16vh] h-[70vh] flex-col items-center justify-between",children:[e.jsxs("ul",{className:"flex flex-col items-center w-full gap-4 mt-4 font-semibold",children:[e.jsx("li",{onClick:()=>{r(`${i}`),window.scrollTo({top:0,behavior:"smooth"})},className:"px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6",children:i}),e.jsx("li",{onClick:()=>{r(`${a}`),window.scrollTo({top:0,behavior:"smooth"})},className:"px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6",children:a}),e.jsx("li",{onClick:()=>{r(`${l}`),window.scrollTo({top:0,behavior:"smooth"})},className:"px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6",children:l})]}),e.jsxs("div",{className:"flex items-center font-mono text-xl font-extrabold tracking-widest text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",children:[e.jsx("span",{className:"inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",children:"**"}),"ASTERISK",e.jsx("span",{className:"inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",children:"**"})]})]})]})})}export{_e as A,Ce as M};

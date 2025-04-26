import React from "react";
import Navbar from "../components/Navbar";
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 animate-gradient">
    
      <div className="absolute top-4 right-6 flex space-x-6 text-sm font-medium text-white">
        <a href="#" className="hover:underline">
          Login
        </a>
        <a href="#" className="hover:underline">
          Register
        </a>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-tight text-white">
        Convert a novel <br /> into scenes
      </h1>

      <textarea
        placeholder="Paste your novel here..."
        className="w-full max-w-xl h-40 p-4 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-black"
      />

      <button className="mt-6 bg-purple-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-purple-800 transition">
        Submit
      </button>
    </div>
  );
}

export default LandingPage;


/* <div className="min-h-screen bg-[#fefbf7] flex flex-col items-center justify-center px-4 relative">
      <div className="absolute top-4 right-6 flex space-x-6 text-sm font-medium">
        <a href="#" className="text-black hover:underline">
          Login
        </a>
        <a href="#" className="text-black hover:underline">
          Register
        </a>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
        Convert a novel <br /> into scenes
      </h1>

      <textarea
        placeholder="Paste your novel here..."
        className="w-full max-w-xl h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-blue-700 transition">
        Submit
      </button>
    </div> */
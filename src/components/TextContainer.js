import React from "react";

const TextContainer = ({ title, text }) => {
  return (
    <div className="max-w-4xl mx-auto bg-transparent shadow-lg rounded-lg p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-[#800000] mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};

export default TextContainer;

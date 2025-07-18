import React from "react";

export default function CardAbout({ icono: Icon,title,subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-full hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}

import React from "react";

export default function Gallery() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="bg-gray-200 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img src={`/logo-light.png`} alt={`Gallery ${i}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
} 
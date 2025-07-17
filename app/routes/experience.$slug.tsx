import React from "react";
import { useParams } from "@remix-run/react";

export default function ExperienceDetail() {
  const { slug } = useParams();
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Experience: {slug}</h1>
      <p className="mb-4">This is a placeholder for the experience detail page. Here you can add information about the specific experience, including description, itinerary, and images.</p>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Book Now</button>
      </div>
    </div>
  );
} 
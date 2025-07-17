import React from "react";

export default function Booking() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Booking</h1>
      <p className="mb-4">This is a placeholder for the booking page. Here you can add a booking form or instructions for booking an experience.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border px-3 py-2 rounded" />
        <textarea placeholder="Message" className="w-full border px-3 py-2 rounded" rows={4}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
} 
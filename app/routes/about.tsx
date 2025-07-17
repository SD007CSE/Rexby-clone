import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">About the Host</h1>
      <p className="mb-4">This is a placeholder for the host's bio and information. Here you can add details about the host, their background, and what makes their experiences unique.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <span className="text-blue-600">host@example.com</span></p>
      </div>
    </div>
  );
} 
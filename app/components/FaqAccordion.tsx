import React, { useState } from "react";

const faqs = [
  {
    question: "How do I access the Guide and Map?",
    answer: "You can sign in using your email address, Facebook, or Google account. The guide page, including the map, is accessible through your mobile or computer browser. Additionally, offline access is available via the Rexby app!"
  },
  {
    question: "Do I need internet connection?",
    answer: "When you download the Rexby app and purchase my guide, you can access it offline. If you’re using a web browser, an internet connection is required."
  },
  {
    question: "How long will I have access?",
    answer: "Once you buy access, it is forever."
  },
  {
    question: "Can I share it with my travel buddy?",
    answer: "Yes, you can invite one travel buddy."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="flex-1 flex flex-col gap-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#e4e6f2]">
          <button
            className="w-full flex items-center justify-between py-4 sm:py-5 px-1 sm:px-2 hover:bg-[#f3f4f6] cursor-pointer focus:outline-none"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span className="text-[#23233c] text-sm sm:text-base text-left">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#23233c"
              className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div
              id={`faq-answer-${i}`}
              className="px-1 sm:px-2 pb-4 sm:pb-5 text-[#bfc2d9] text-sm animate-fadeIn"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

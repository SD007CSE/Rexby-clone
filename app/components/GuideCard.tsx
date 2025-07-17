export default function GuideCard() {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 relative">
        {/* Back Arrow */}
        <button className="absolute left-4 top-4 md:left-8 md:top-1/2 md:-translate-y-1/2 bg-white rounded-full p-2 shadow border border-[#e4e6f2] hover:bg-gray-100 z-10" aria-label="Back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#23233c" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-[350px] flex justify-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" alt="Norway" className="rounded-3xl object-cover w-full md:w-[350px] h-[220px] md:h-[420px] shadow" />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-[#23233c]">Norway Guide</h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Guide" className="w-9 h-9 rounded-full border-2 border-white shadow" />
            <span className="text-base text-[#23233c]">Guide by <span className="font-semibold">Ása Steinars</span></span>
            <span className="text-base text-[#23233c]">Norway</span>
            <span className="flex items-center gap-1 text-sm font-semibold text-[#23233c] bg-[#f3f4f6] px-2 py-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.69-1.54 1.12l-3.385-2.462a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.12L2.049 9.39c-.784-.57-.381-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.965z"/></svg>
              New
            </span>
          </div>
          <p className="text-base text-[#23233c] mb-8 max-w-xl">
            Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.<br/><br/>
            This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2 w-full">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-28 py-3 rounded-xl border border-[#23233c] text-[#23233c] font-bold text-sm bg-white hover:bg-gray-100 transition">Preview</button>
            </div>
            <div className="flex flex-col items-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-28 py-[10px] rounded-xl bg-[#1791b8] text-white font-bold text-base transition">Get Access</button>
              <div className="text-[#bfc2d9] text-base mt-2">Used for 100+ trips</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
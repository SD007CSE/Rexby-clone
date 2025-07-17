export default function ItineraryDemo() {
    return (
      <div className="flex-1 max-w-full md:max-w-3xl w-full">
        <div className="bg-white rounded-xl border border-[#e4e6f2] shadow p-4 sm:p-8 flex flex-col gap-4 w-full">
          {/* Days Header */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
            <div className="flex-1 text-[#bfc2d9] font-semibold bg-[#f3f4f6] rounded-xl px-4 py-2 text-center">Tue 11 apr</div>
            <div className="flex-1 text-[#bfc2d9] font-semibold bg-[#f3f4f6] rounded-xl px-4 py-2 text-center">Wed 12 apr</div>
            <div className="flex-1 text-[#bfc2d9] font-semibold bg-[#f3f4f6] rounded-xl px-4 py-2 text-center">Thu 13 apr</div>
            <button className="bg-[#f3f4f6] rounded-xl px-4 py-2 text-[#bfc2d9] font-bold text-xl">+</button>
          </div>
          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Static content from the design, keep as is per your initial code */}
            {/* ... You can copy your three-column demo grid content here ... */}
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2 relative">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=40&q=80" alt="Hot Spring" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-semibold text-[#23233c]">Hot Spring</span>
                <div className="ml-auto relative">
                  {/* Dots menu could be implemented via popover */}
                  <button className="p-1" tabIndex={0}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#bfc2d9" className="w-6 h-6"><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/></svg></button>
                </div>
              </div>
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#bfc2d9" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                <span className="text-[#bfc2d9]">Text</span>
              </div>
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=40&q=80" alt="Photospot" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-semibold text-[#23233c]">Photospot</span>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=40&q=80" alt="Hike" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-semibold text-[#23233c]">Hike</span>
              </div>
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#bfc2d9" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                <span className="text-[#bfc2d9]">Text</span>
              </div>
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=40&q=80" alt="Sightseeing" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-semibold text-[#23233c]">Sightseeing</span>
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=40&q=80" alt="Waterfall" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-semibold text-[#23233c]">Waterfall</span>
              </div>
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#bfc2d9" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                <span className="text-[#bfc2d9]">Text</span>
              </div>
              <div className="flex items-center bg-[#f3f4f6] rounded-xl px-3 py-2 gap-2">
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=40&q=80" alt="Stay" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-semibold text-[#23233c]">Stay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
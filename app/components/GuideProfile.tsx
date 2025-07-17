export default function GuideProfile() {
    return (
      <div className="bg-white rounded-2xl border border-[#e4e6f2] shadow p-6 sm:p-8 flex flex-col items-center min-w-0 md:min-w-[280px] max-w-xs w-full mb-6 md:mb-0">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Ása Steinars" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4" />
        <div className="font-bold text-lg sm:text-xl text-[#23233c] mb-1">Ása Steinars</div>
        <div className="text-[#bfc2d9] text-xs sm:text-sm mb-4">Travel Business</div>
        <div className="flex gap-3 mb-4">
          {/* Add your own social links */}
          <a href="#" className="hover:text-[#1da1f2]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#23233c" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg></a>
          <a href="#" className="hover:text-[#1da1f2]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#23233c" className="w-5 h-5"><path d="M9 17a4 4 0 104 4v-7a4 4 0 00-4 4z"/><path d="M15 3v4a4 4 0 004 4h2"/></svg></a>
          <a href="#" className="hover:text-[#1da1f2]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#23233c" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg></a>
          <a href="#" className="hover:text-[#1da1f2]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#23233c" className="w-5 h-5"><rect x="3" y="7" width="18" height="10" rx="3"/><path d="M10 9l5 3-5 3V9z"/></svg></a>
        </div>
        <div className="flex gap-2 mb-4 sm:mb-6">
          <span className="bg-[#f3f4f6] text-[#23233c] rounded-full px-3 py-1 text-xs font-semibold">Iceland</span>
          <span className="bg-[#f3f4f6] text-[#23233c] rounded-full px-3 py-1 text-xs font-semibold">Norway</span>
        </div>
        <button className="w-full bg-[#23233c] text-white font-semibold rounded-xl py-2 mt-auto">Storefront</button>
      </div>
    );
  }
  
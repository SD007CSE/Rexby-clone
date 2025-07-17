import React from "react";

export default function MapPage() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const InteractiveMap = React.useMemo(
    () => isClient ? React.lazy(() => import("../components/InteractiveMap")) : null,
    [isClient]
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#fafbfc]">
      <h1 className="text-2xl sm:text-4xl font-extrabold mb-6 text-[#23233c]">Interactive Map</h1>
      {isClient && InteractiveMap ? (
        <React.Suspense fallback={<div className='text-[#bfc2d9] text-lg'>Loading map...</div>}>
          <div className="w-full max-w-5xl h-[70vh] rounded-3xl overflow-hidden border border-[#e4e6f2] shadow-lg bg-white">
            <InteractiveMap />
          </div>
        </React.Suspense>
      ) : (
        <div className='text-[#bfc2d9] text-lg'>Loading map...</div>
      )}
    </div>
  );
} 
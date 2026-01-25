export default function HowItWorksSection() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 py-20 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-2 border-black px-3 py-1 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-wide">Simple Process</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm">
            Getting help from your neighbors is simple. Four easy steps to connect with trusted local service providers.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 - Login */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-3 border-black rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-blue-500 border-3 border-black rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-black text-white">1</span>
              </div>
              
              {/* Icon Container */}
              <div className="mt-8 mb-6">
                <div className="w-18 h-18 mx-auto bg-white border-3 border-black rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black mb-3">Sign Up</h3>

              {/* Description */}
              <p className="text-xs text-gray-800 leading-relaxed">
                Create your free account in seconds and join the community
              </p>
            </div>
            
            {/* Decorative Arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <div className="w-6 h-6 border-t-3 border-r-3 border-black transform rotate-45"></div>
            </div>
          </div>

          {/* Step 2 - Browse */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-green-100 to-green-200 border-3 border-black rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-green-500 border-3 border-black rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-black text-white">2</span>
              </div>
              
              {/* Icon Container */}
              <div className="mt-8 mb-6">
                <div className="w-18 h-18 mx-auto bg-white border-3 border-black rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black mb-3">Browse</h3>

              {/* Description */}
              <p className="text-xs text-gray-800 leading-relaxed">
                Discover talented neighbors offering the services you need
              </p>
            </div>
            
            {/* Decorative Arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <div className="w-6 h-6 border-t-3 border-r-3 border-black transform rotate-45"></div>
            </div>
          </div>

          {/* Step 3 - Book */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-3 border-black rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-yellow-500 border-3 border-black rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              
              {/* Icon Container */}
              <div className="mt-8 mb-6">
                <div className="w-18 h-18 mx-auto bg-white border-3 border-black rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black mb-3">Schedule</h3>

              {/* Description */}
              <p className="text-xs text-gray-800 leading-relaxed">
                Pick a time that works for you and book your service slot
              </p>
            </div>
            
            {/* Decorative Arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <div className="w-6 h-6 border-t-3 border-r-3 border-black transform rotate-45"></div>
            </div>
          </div>

          {/* Step 4 - Checkout */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 border-3 border-black rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-pink-500 border-3 border-black rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-black text-white">4</span>
              </div>
              
              {/* Icon Container */}
              <div className="mt-8 mb-6">
                <div className="w-18 h-18 mx-auto bg-white border-3 border-black rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black mb-3">Connect</h3>

              {/* Description */}
              <p className="text-xs text-gray-800 leading-relaxed">
                Complete payment securely and get ready to meet your neighbor
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
}
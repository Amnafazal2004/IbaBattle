import Image from 'next/image'
import community from '@/Assets/community.png';

export default function AboutSection() {
  return (
    <div className="bg-white py-20 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              
              <span className="text-xs uppercase font-bold tracking-wide">Membership</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              join the neighbourly insiders club
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              This Is Where The Community-Minded Become Connected, The Service-Seekers Get Help, And The Skilled Find Their People.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              A space where you can ask questions without judgment, connect with people who actually understand your struggles and learn from neighbors who keep it real.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Ready to stop doing everything alone?
            </p>

            {/* CTA Button */}
            <button className="px-8 py-3 border-2 border-black rounded-full text-base font-semibold hover:bg-black hover:text-white transition">
              Join Now
            </button>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 border-2 border-black rounded-lg overflow-hidden">
              {/* Replace this div with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex items-center justify-center">
                <Image src={community} alt='community'></Image>
              </div>
            </div>
            {/* Decorative label */}
            <div className="absolute -bottom-4 -right-4 bg-blue-200 border-2 border-black px-4 py-2 rounded-full">
              <span className="text-xs font-bold uppercase">Your Favourite Marketing Community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
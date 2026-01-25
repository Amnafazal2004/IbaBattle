"use client"
import Image from 'next/image'
import skills from '@/Assets/skills.png';
import repair from '@/Assets/repair.png';
import family from '@/Assets/family.png';
import chores from '@/Assets/chores.png';
import { useUserContext } from '@/Context/UserContext';
import Link from 'next/link';

export default function ServicesSection() {
  const user = useUserContext();
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Lightning Icon */}
        <div className="text-center mb-4">
          <span className="text-4xl">⚡</span>
        </div>

        {/* Welcome Text */}
        <p className="text-center text-xs uppercase tracking-wide font-semibold mb-8">
          Welcome to Neighbourly
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold max-w-3xl mx-auto mb-6">
          For The Busy, The Community-Minded, And The Service Seekers.
        </h2>

        {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed">
          Helping neighbors simplify their journey, celebrate their wins and unlock their full potential, as we all bring talent, resources and trust to each other. Because at its best, community is transformational.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 - House Chores */}
          <div className="bg-pink-100 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative aspect-video bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center overflow-hidden">
              <Image 
                src={chores} 
                alt='House Chores'
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">House Chores</h3>
              <p className="text-sm text-gray-700 mb-4">
                Neighbors help with cleaning, organizing, gardening, and daily household tasks to keep your space tidy.
              </p>
            </div>
          </div>

          {/* Card 2 - Family Care */}
          <div className="bg-blue-100 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative aspect-video bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center overflow-hidden">
              <Image 
                src={family} 
                alt='Family Care'
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Family Care</h3>
              <p className="text-sm text-gray-700 mb-4">
                Local childcare, elderly support, tutoring, and pet sitting services from trusted community members.
              </p>
            </div>
          </div>

          {/* Card 3 - Repair & Maintenance */}
          <div className="bg-green-100 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative aspect-video bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center overflow-hidden">
              <Image 
                src={repair} 
                alt='Repair & Maintenance'
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Repair & Maintenance</h3>
              <p className="text-sm text-gray-700 mb-4">
                Expert neighbors for plumbing, electrical work, appliance repairs, and home improvement projects.
              </p>
            </div>
          </div>

          {/* Card 4 - Skills & Learning */}
          <div className="bg-yellow-100 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative aspect-video bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center overflow-hidden">
              <Image 
                src={skills} 
                alt='Skills & Learning'
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Skills & Learning</h3>
              <p className="text-sm text-gray-700 mb-4">
                Learn new skills from talented neighbors - cooking, languages, music, crafts, and professional development.
              </p>
            </div>
          </div>
        </div>

        {/* See All Services Button */}
       {user? <Link href="/Services"> <div className="text-center">
          <button className="px-8 py-3 bg-black text-white rounded-full text-base font-semibold hover:bg-gray-800 transition shadow-lg">
            See All Services Available
          </button>
        </div> </Link> :  <div className="text-center">
          <button className="px-8 py-3 bg-black text-white rounded-full text-base font-semibold hover:bg-gray-800 transition shadow-lg">
            See All Services Available
          </button>
        </div> }
      </div>
    </div>
  );
}
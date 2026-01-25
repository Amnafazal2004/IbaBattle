"use client"
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "@/Context/UserContext";
import Footer from "@/features/Footer";

const AddServiceForm = () => {
   const [title, settitle] = useState<string>("");
   const [desc, setdesc] = useState<string>("");
   const [category, setcategory] = useState<string>("House Chores");
   const [neighbour, setneighbour] = useState<string>("East");
   const [price, setprice] = useState<string>("");
   const user = useUserContext();
   
   console.log("Current user in Header:", user);
   
   if (user === undefined) return (
     <div className="min-h-screen bg-white flex items-center justify-center">
       <p className="text-lg font-semibold">Loading...</p>
     </div>
   );

   const onsubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!user) {
      console.log("No user found");
      return;
    }
    
    console.log("Submitting with user id:", user.id);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("category", category);
    formData.append("neighbour", neighbour);
    formData.append("price", price);
    formData.append("id", user.id);

    try {
      const { data } = await axios.post("/api/Services", formData); 
      if (data.success) {
        console.log("msg ",data.message);
        settitle('');
        setdesc('');
        setcategory('House Chores');
        setneighbour('East');
        setprice('');
        alert('Service added successfully!');
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 flex flex-col">
      {/* Navbar */}
      <div className="bg-blue-100 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Back Button */}
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Back
            </button>

            {/* Center - Title */}
            <h1 className="text-2xl font-bold uppercase tracking-wide">Add New Service</h1>

            {/* Right - Home Button */}
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Home
            </button>
          </div>
        </div>
      </div>

      {/* Form Container - Centered */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {user ? (
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Share Your Service</h2>
                <p className="text-gray-600">Help your neighbors by offering your skills</p>
              </div>
              
              <form onSubmit={onsubmitHandler} className="space-y-6">
                {/* Service Title */}
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Service Title
                  </label>
                  <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event) => settitle(event.target.value)}
                    placeholder="e.g., Professional House Cleaning"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition text-sm"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Description
                  </label>
                  <textarea 
                    name="desc"
                    value={desc}
                    onChange={(event) => setdesc(event.target.value)}
                    placeholder="Describe your service in detail..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition text-sm resize-none"
                  />
                </div>

                {/* Category and Neighbourhood Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                      Category
                    </label>
                    <select 
                      name='category'
                      value={category} 
                      onChange={(event)=> setcategory(event.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition text-sm cursor-pointer"
                    >
                      <option value="House Chores">House Chores</option>
                      <option value="Repairs and Maintenance">Repairs and Maintenance</option>
                      <option value="Tuition">Tuition</option>
                      <option value="Family Care">Family Care</option>
                      <option value="Transport & Errands">Transport & Errands</option>
                    </select>
                  </div>

                  {/* Neighbourhood */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                      Neighbourhood
                    </label>
                    <select 
                      name='neighbour'
                      value={neighbour} 
                      onChange={(event)=> setneighbour(event.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition text-sm cursor-pointer"
                    >
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                    </select>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Price ($)
                  </label>
                  <input 
                    type="number"
                    name="price"
                    value={price}
                    onChange={(event) => setprice(event.target.value)}
                    placeholder="0"
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
                  >
                    Add Service
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white border-2 border-black rounded-xl p-12 shadow-lg">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-2">Authentication Required</h3>
                <p className="text-gray-700 mb-6">Please sign in to add a service</p>
                <button className="px-6 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddServiceForm
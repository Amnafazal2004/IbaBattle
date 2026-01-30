"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  neighbour: string;
  price: number;
  authorId: string;
}

const AllServices = () => {
  const router = useRouter();
  const [services, setServices] = useState<Service[] | null>(null);
  const [filterBy, setFilterBy] = useState<string>("None");
  const [category, setCategory] = useState<string>("House Chores");
  const [neighbour, setNeighbour] = useState<string>("East");
  const [price, setPrice] = useState<string>("low")
  const [role,setrole] = useState("seeker")

  const fetchServices = async () => {
    try {
      const response = await axios.get<{ success: boolean; services: Service[] }>(
        "/api/Services"
      );

      if (!response.data || !response.data.success) {
        console.error("Services not found");
        return;
      }
      setServices(response.data.services);
      console.log(response.data.services)
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

    const fetchRole = async () => {
    try{
       const { data } = await axios.get("api/Roles");
    if (data.success) {
      setrole(data.role);
      console.log(data.role)
    }
   }
   catch(error){
    console.error(error)
   } 
  };



  useEffect(() => {
    fetchRole()
    fetchServices();
    
  }, []);

  const getFilteredServices = () => {
    if (!services) return [];

    let filtered = [...services];

    if (filterBy === "Category") {
      filtered = filtered.filter(service => service.category === category);
    } else if (filterBy === "Neighbourhood") {
      filtered = filtered.filter(service => service.neighbour === neighbour);
    } else if (filterBy === "Price") {
      filtered = filtered.sort((a, b) => price === "low" ? a.price - b.price : b.price - a.price);
    }

    return filtered;
  };

  const filteredServices = getFilteredServices();

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "House Chores": return "bg-pink-100";
      case "Repairs and Maintenance": return "bg-blue-100";
      case "Tuition": return "bg-green-100";
      case "Family Care": return "bg-blue-100";
      case "Transport & Errands": return "bg-yellow-100";
      default: return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Matching Image Style */}
      <div className="bg-blue-100 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Title and Filters */}
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold uppercase tracking-wide">All Services</h1>
              
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold uppercase tracking-wide">Filter by:</label>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="px-4 py-2 border-2 border-black rounded-lg text-sm font-medium focus:outline-none transition cursor-pointer bg-white"
                >
                  <option value="None">None</option>
                  <option value="Category">Category</option>
                  <option value="Neighbourhood">Neighbourhood</option>
                  <option value="Price">Price</option>
                </select>

                {filterBy === "Category" && (
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2 border-2 border-black rounded-lg text-sm font-medium focus:outline-none transition cursor-pointer bg-white"
                  >
                    <option value="House Chores">House Chores</option>
                    <option value="Repairs and Maintenance">Repairs & Maintenance</option>
                    <option value="Tuition">Tuition</option>
                    <option value="Family Care">Family Care</option>
                    <option value="Transport & Errands">Transport & Errands</option>
                  </select>
                )}

                {filterBy === "Neighbourhood" && (
                  <select
                    value={neighbour}
                    onChange={(e) => setNeighbour(e.target.value)}
                    className="px-4 py-2 border-2 border-black rounded-lg text-sm font-medium focus:outline-none transition cursor-pointer bg-white"
                  >
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="South">South</option>
                    <option value="North">North</option>
                  </select>
                )}

                {filterBy === "Price" && (
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="px-4 py-2 border-2 border-black rounded-lg text-sm font-medium focus:outline-none transition cursor-pointer bg-white"
                  >
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                )}
              </div>
            </div>

            {/* Right - Add Service Button */}
          {role !== "seeker" ? <button
              onClick={() => router.push('/AddService')}
              className="px-5 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              + Add Service
            </button> : null}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600">
            Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
          </p>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`${getCategoryColor(service.category)} border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200`}
              >
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <span className="font-semibold">{service.category}</span>
                    <span className="font-semibold">{service.neighbour}</span>
                  </div>

                  {/* Price and Book Button */}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                    <span className="text-2xl font-bold">${service.price}</span>
                    <button
                      onClick={() => router.push(`/BookService/${service.id}`)}
                      className="px-6 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-2">No services found</h3>
            <p className="text-gray-500 mb-6">
              Try selecting a different filter
            </p>
            <button
              onClick={() => setFilterBy("None")}
              className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Show All Services
            </button>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AllServices;

"use client";

import axios from "axios";
import { useEffect, useState } from "react";

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
  const [services, setServices] = useState<Service[] | null>(null);
  const [category,setcategory] = useState<string>("All")
  const [neighbour,setneighbour] = useState<string>("All")
  const [price,setprice] = useState<string>("0")
  const [filterby, setfilterby] = useState("")

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
      console.log(response.data.services);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(()=>{
    fetchServices()
  },[])

  return (
    <>
     <div className="bg-red-600">
      <label> filterby</label>
     <select
              value={filterby} onChange={(event)=> setfilterby(event.target.value)}>
              <option value="None">None</option>
              <option value="Category">Category</option>
              <option value="Neighbourhood">Neighbourhood</option>
              <option value="price">price</option>
            </select>
    </div>
{filterby === "Category"?
    <div className="bg-red-600">
     <select name='category'
              value={category} onChange={(event)=> setcategory(event.target.value)}>
              <option value="House Chores">House Chores</option>
              <option value="Repairs and Maintenance">Repairs and Maintenance</option>
              <option value="Tuition">Tuition</option>
              <option value="Family Care">Family Care</option>
              <option value="Transport & Errands">Transport & Errands</option>
            </select>
    </div> : null}

    { filterby === "Neighbourhood"?
      <div className="bg-red-600">
     <select name='neighbour'
              value={category} onChange={(event)=> setneighbour(event.target.value)}>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="South">South</option>
              <option value="North">North</option>
            </select>
    </div>: null}

     { filterby === "price"?
      <div className="bg-red-300">
     <select name='price'
              value={price} onChange={(event)=> setprice(event.target.value)}>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
    </div>: null}
    <div>
  {services && services.length > 0 ? (
    <ul>
      { filterby === "Category" ?
      services
        .filter(service => (service.category === category))
        .map(service => (
          <li key={service.id}>{service.title} - ${service.price}  - {service.neighbour} - {service.category}</li>
        )) : null}

        { filterby === "Neighbourhood" ?
      services
        .filter(service => service.neighbour === neighbour)
        .map(service => (
          <li key={service.id}>{service.title} - ${service.price} - {service.neighbour} - {service.category} </li>
        )) : null}
      { filterby === "price" ?
      services
       .sort((a, b) => price === "low" ? a.price - b.price : b.price - a.price)
        .map(service => (
          <li key={service.id}>{service.title} - ${service.price} - {service.neighbour} - {service.category} </li>
        )) : null
        }

          { filterby === "None" ?
      services
      
        .map(service => (
          <li key={service.id}>{service.title} - ${service.price} - {service.neighbour} - {service.category} </li>
        )) : null
        }

    </ul>
  ) : (
    <p>No services loaded.</p>
  )}
</div>
    </>
    
  );
};

export default AllServices;

"use client"
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "@/Context/UserContext";

const Header = () => {
   const [title, settitle] = useState<string>("");
   const [desc, setdesc] = useState<string>("");
   const [category, setcategory] = useState<string>("");
     const [neighbour, setneighbour] = useState<string>("");
       const [price, setprice] = useState<string>("");
   const user = useUserContext();
   
   console.log("Current user in Header:", user); // Debug log
   
   if (user === undefined) return <p>Loading...</p>;

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
        setcategory('');
        setneighbour('')
        setprice('')
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
       {user ? (
      <form onSubmit={onsubmitHandler}>
        <input 
          type="text"
          name="title"
          value={title}
          onChange={(event) => settitle(event.target.value)}
          placeholder="Service Title"
          required
        />
        <input 
          type="text"
          name="desc"
          value={desc}
          onChange={(event) => setdesc(event.target.value)}
          placeholder="Description"
          required
        />
        <div>
            <label>Category</label>
            <select name='category'
              value={category} onChange={(event)=> setcategory(event.target.value)}>
              <option>House Chores</option>
              <option>Repairs and Maintenance</option>
              <option>Tuition</option>
              <option>Family Care</option>
              <option>Transport & Errands</option>
            </select>
        </div>
         <div>
            <label>neighbour</label>
            <select name='neighbour'
              value={neighbour} onChange={(event)=> setneighbour(event.target.value)}>
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
            </select>
        </div>
        <input 
          type="text"
          name="price"
          value={price}
          onChange={(event) => setprice((event.target.value))}
          placeholder="$0"
          required
        />
       <button type="submit">Submit</button> 
      </form>
      ) : (
        <p>Please sign in to add a service</p>
      )}
    </div>
  )
}

export default Header
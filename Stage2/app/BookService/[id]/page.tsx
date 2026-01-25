"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "@/Context/UserContext";
import { useParams } from "next/navigation";

interface Booking {
  id: string;
  service: { title: string };
  author: { email: string };
  bookingDate: string;
  timeSlot: string;
}

const BookingTest = () => {
  const user = useUserContext();
  const params = useParams();


  let rawServiceId = params?.serviceId;
  const serviceId = Array.isArray(rawServiceId) ? rawServiceId[0] : rawServiceId || "";

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [bookingId, setBookingId] = useState("");

  // Fetch bookings for this service
  const fetchBookings = async () => {
    if (!serviceId) return; // do nothing if serviceId is missing
    try {
      const { data } = await axios.get(`/api/Bookings?serviceId=${serviceId}`);
      if (data.success) setBookings(data.bookings);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [serviceId]);

  // ✅ Create booking
  const createBooking = async () => {
    if (!user?.id) return alert("You must be logged in to book.");

    try {
      const formData = new FormData();
      formData.append("serviceId", serviceId);
      formData.append("authorId", Array.isArray(user.id) ? user.id[0] : user.id);
      formData.append("bookingDate", bookingDate);
      formData.append("timeSlot", timeSlot);

      const { data } = await axios.post("/api/Bookings", formData);
      alert(data.message);
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };
  // ✅ Delete booking
  const deleteBooking = async (id: string) => {
    try {
      const formData = new FormData();
      formData.append("id", id);

      const { data } = await axios.delete("/api/Bookings", { data: formData });
      alert(data.message);
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Booking Test UI</h2>

      <div style={{ marginBottom: 20 }}>
        <p>
          <strong>Service ID:</strong> {serviceId || "No service selected"}
        </p>
        <p>
          <strong>Author:</strong> {user?.email || "Not logged in"}
        </p>

        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
        <input
          type="time"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        />
        <button onClick={createBooking}>Create Booking</button>
      </div>

     
      <h3>Existing Bookings</h3>
      {bookings.length === 0 && <p>No bookings found for this service.</p>}
      {bookings.map((b) => (
        <div
          key={b.id}
          style={{ borderBottom: "1px solid gray", marginBottom: 5 }}
        >
          <p>
            <strong>Booking ID:</strong> {b.id}
          </p>
          <p>
            <strong>Service:</strong> {b.service.title}
          </p>
          <p>
            <strong>Author:</strong> {b.author.email}
          </p>
          <p>
            <strong>Date:</strong> {new Date(b.bookingDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Time:</strong> {b.timeSlot}
          </p>
          <button onClick={() => deleteBooking(b.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookingTest;

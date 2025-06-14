import React, { useState } from "react";
import '../Style.css';
import '../App.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.guests < 1) newErrors.guests = "At least one guest required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-yellow-200 min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-green-800">🍋 Welcome to Little Lemon 🍋</h1>
      <p className="text-lg text-green-700 mt-2">Book a table and enjoy fresh Mediterranean flavors!</p>
      {submitted ? (
        <p className="text-green-700 text-lg mt-4 bg-white p-4 rounded-lg shadow-lg">🍽️ Booking confirmed! See you soon! 🍽️</p>
      ) : (
        <form className="bg-white p-6 rounded-2xl shadow-md w-96 mt-6 border-4 border-yellow-500" onSubmit={handleSubmit}>
          <label className="block text-yellow-700 font-semibold">Name:</label>
          <input type="text" className="w-full p-2 border rounded-lg" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label className="block text-yellow-700 font-semibold mt-4">Email:</label>
          <input type="email" className="w-full p-2 border rounded-lg" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label className="block text-yellow-700 font-semibold mt-4">Date:</label>
          <input type="date" className="w-full p-2 border rounded-lg" 
            value={formData.date} 
            onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          {errors.date && <p className="text-red-500">{errors.date}</p>}

          <label className="block text-yellow-700 font-semibold mt-4">Time:</label>
          <input type="time" className="w-full p-2 border rounded-lg" 
            value={formData.time} 
            onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
          {errors.time && <p className="text-red-500">{errors.time}</p>}

          <label className="block text-yellow-700 font-semibold mt-4">Guests:</label>
          <input type="number" className="w-full p-2 border rounded-lg" min="1" 
            value={formData.guests} 
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })} />
          {errors.guests && <p className="text-red-500">{errors.guests}</p>}

          <button type="submit" className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 font-bold shadow-md">🍋 Book Now</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateCaterer() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    pricePerPlate: "",
    cuisines: "",
    rating: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      location: form.location.trim(),
      pricePerPlate: Number(form.pricePerPlate),
      cuisines: form.cuisines
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      rating: Number(form.rating),
    };

    try {
      await axios.post("http://localhost:5000/api/caterers", payload);

      alert("Caterer created successfully");

      setForm({
        name: "",
        location: "",
        pricePerPlate: "",
        cuisines: "",
        rating: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Caterer</h1>

      <Link to="/caterers">View Caterers</Link>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <input
          type="number"
          name="pricePerPlate"
          placeholder="Price Per Plate"
          value={form.pricePerPlate}
          onChange={handleChange}
        />

        <input
          name="cuisines"
          placeholder="Indian, Chinese"
          value={form.cuisines}
          onChange={handleChange}
        />

        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          name="rating"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
        />

        <button type="submit">Create Caterer</button>
      </form>
    </div>
  );
}

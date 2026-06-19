import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CatererCard from "../components/CatererCard";

export default function Caterers() {
  const [caterers, setCaterers] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchCaterers = async () => {
    try {
      const res = await axios.get("/api/caterers");

      setCaterers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCaterers();
  }, []);

  const filteredCaterers = caterers.filter((caterer) => {
    const matchesName = caterer.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = !maxPrice || caterer.pricePerPlate <= Number(maxPrice);

    return matchesName && matchesPrice;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Caterers</h1>

      <Link to="/create">Create Caterer</Link>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          placeholder="Search Caterer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredCaterers.map((caterer) => (
          <CatererCard key={caterer.id} caterer={caterer} />
        ))}
      </div>
    </div>
  );
}

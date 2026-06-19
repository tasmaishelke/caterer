import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CatererDetails() {
  const { id } = useParams();

  const [caterer, setCaterer] = useState(null);

  useEffect(() => {
    fetchCaterer();
  }, []);

  const fetchCaterer = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/caterers/${id}`);

      setCaterer(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!caterer) {
    return <h2>Caterer not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/caterers">Back</Link>

      <h1>{caterer.name}</h1>

      <p>Location: {caterer.location}</p>

      <p>Price Per Plate: ₹{caterer.pricePerPlate}</p>

      <p>Rating: {caterer.rating}</p>

      <p>Cuisines:</p>

      {caterer.cuisines.map((cuisine, index) => (
        <span
          key={index}
          className="cuisine-badge"
          style={{
            marginRight: "8px",
            padding: "4px 10px",
            border: "1px solid #ddd",
            borderRadius: "20px",
            display: "inline-block",
          }}
        >
          {cuisine}
        </span>
      ))}
    </div>
  );
}

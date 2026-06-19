import { Link } from "react-router-dom";

export default function CatererCard({ caterer }) {
  return (
    <Link
      to={`/caterers/${caterer.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        <h2>{caterer.name}</h2>

        <p>Location: {caterer.location}</p>

        <p>₹{caterer.pricePerPlate}</p>

        <p>{caterer.rating}</p>

        <p>{caterer.cuisines.join(", ")}</p>
      </div>
    </Link>
  );
}

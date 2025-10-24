import { useEffect, useState } from "react";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/match")
      .then(res => res.json())
      .then(setMatches);
  }, []);

  return (
    <div>
      <h2>Matching Results 🌱</h2>
      {matches.map((m, i) => (
        <div key={i} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p><b>Farmer:</b> {m.farmer.name} ({m.farmer.crop})</p>
          <p><b>Buyer:</b> {m.buyer.name}</p>
          <p><b>Location:</b> {m.farmer.location}</p>
          <p><b>Farmer Price:</b> {m.farmer.price}</p>
          <p><b>Buyer Max Price:</b> {m.buyer.maxPrice}</p>
        </div>
      ))}
    </div>
  );
}

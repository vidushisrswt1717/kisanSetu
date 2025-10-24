import { useState } from "react";
import FarmerForm from "./FarmerForm";
import BuyerForm from "./BuyerForm";
import Matches from "./Matches";

function App() {
  const [page, setPage] = useState("farmer");

  return (
    <div style={{ padding: 20 }}>
      <h1>Kisan Setu 🌾</h1>

      <button onClick={() => setPage("farmer")}>Farmer Register</button>
      <button onClick={() => setPage("buyer")}>Buyer Register</button>
      <button onClick={() => setPage("matches")}>Find Matches</button>

      {page === "farmer" && <FarmerForm />}
      {page === "buyer" && <BuyerForm />}
      {page === "matches" && <Matches />}
    </div>
  );
}

export default App;

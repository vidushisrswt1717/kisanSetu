import { useState } from "react";

export default function BuyerForm() {
  const [form, setForm] = useState({ name: "", crop: "", maxPrice: "", location: "" });

  function submit() {
    fetch("http://localhost:5000/register/buyer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => alert("Buyer registered ✅"));
  }

  return (
    <div>
      <h2>Buyer Registration</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })}/>
      <input placeholder="Crop" onChange={e => setForm({ ...form, crop: e.target.value })}/>
      <input placeholder="Max Price" onChange={e => setForm({ ...form, maxPrice: e.target.value })}/>
      <input placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

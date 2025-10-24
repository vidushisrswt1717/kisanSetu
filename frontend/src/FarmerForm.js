import { useState } from "react";

export default function FarmerForm() {
  const [form, setForm] = useState({ name: "", crop: "", price: "", location: "" });

  function submit() {
    fetch("http://localhost:5000/register/farmer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => alert("Farmer registered ✅"));
  }

  return (
    <div>
      <h2>Farmer Registration</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })}/>
      <input placeholder="Crop" onChange={e => setForm({ ...form, crop: e.target.value })}/>
      <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })}/>
      <input placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

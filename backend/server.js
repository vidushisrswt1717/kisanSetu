const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "./data.json";

function readData() {
  return JSON.parse(fs.readFileSync(filePath));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.post("/register/farmer", (req, res) => {
  const data = readData();
  data.farmers.push(req.body);
  writeData(data);
  res.json({ message: "Farmer registered successfully" });
});

app.post("/register/buyer", (req, res) => {
  const data = readData();
  data.buyers.push(req.body);
  writeData(data);
  res.json({ message: "Buyer registered successfully" });
});

app.get("/match", (req, res) => {
  const data = readData();
  let matches = [];

  data.farmers.forEach(f => {
    data.buyers.forEach(b => {
      if (f.crop === b.crop && f.location === b.location) {
        matches.push({ farmer: f, buyer: b });
      }
    });
  });

  res.json(matches);
});

app.listen(5000, () => console.log("Server running on port 5000"));

require("dotenv").config();
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

// Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("ran");
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["mcDonalds", "wendys"],
    },
  });
});

//Get a Restaunrant
app.get("/api/v1/restaurants/:id", (req, res) => {});

// Create a Restaunrant
app.post("/api/v1/restaurants", (req, res) => {});

// Update Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up in the port ${port}`);
});

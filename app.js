const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const modelRoutes = require("./routes/model-routes");

const app = express();

// parse application/json
app.use(bodyParser.json());

// allow cors
app.use(cors());

// model routes
app.use("/", modelRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).json({
    error: "route not found",
    status: "404",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

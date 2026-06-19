const express = require("express");
const cors = require("cors");

const catererRoutes = require("./routes/catererRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/caterers", catererRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

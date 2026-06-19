const express = require("express");
const cors = require("cors");
const path = require("path");
const catererRoutes = require("./routes/catererRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist"), { etag: false }));

app.use("/api/caterers", catererRoutes);

const PORT = 5000;
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

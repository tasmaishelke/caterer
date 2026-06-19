const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/caterers.json");

const getData = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const saveData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

exports.getAllCaterers = (req, res) => {
  const caterers = getData();
  res.json(caterers);
};

exports.getCatererById = (req, res) => {
  const caterers = getData();

  const caterer = caterers.find((c) => c.id === Number(req.params.id));

  if (!caterer) {
    return res.status(404).json({
      message: "Caterer not found",
    });
  }

  res.json(caterer);
};

exports.createCaterer = (req, res) => {
  const caterers = getData();

  const newCaterer = {
    id: Date.now(),
    ...req.body,
  };

  caterers.push(newCaterer);

  saveData(caterers);

  res.status(201).json(newCaterer);
};

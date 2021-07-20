const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 4000;
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const readData = () => {
  return JSON.parse(fs.readFileSync("./todoData.json"));
};  

const writeData = (myData) => {
  return JSON.stringify(fs.writeFileSync("./todoData.json", myData));
};  

const getAllData = () => {
  const todoData = readData();

  const shortList = todoData.map((video) => {
    const todoData = {
      id: video.id,
      todo: video.title,
      isComplete: video.image,
    };  
    return todoData;
  });  

  return shortList;
};  

app.get("/", (_req, res) => {
  res.status(200).json({
    data: readData(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} `);
});

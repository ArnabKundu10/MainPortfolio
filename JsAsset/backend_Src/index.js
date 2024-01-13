const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const password = encodeURIComponent("Arnab12@");
const path = require("path");
// require("../connectionFolder/connectionFile");
const DB = `mongodb+srv://Arnab:${password}@atlascluster.esd35xx.mongodb.net/portfolioWebsite?retryWrites=true&w=majority`;
// const mainRouter = require("./router/route");
const Message = require("../model/scema");
mongoose
  .connect(DB)
  .then(() => {
    console.log("Atlas is connected");
  })
  .catch((error) => {
    console.log(`there might be some error:-${error}`);
  });
const indexPath = path.join(__dirname, "../../public/index");
const skillPath = path.join(__dirname, "../../public/Skills");
const projectPath = path.join(__dirname, "../../public/Projects");
const careerPath = path.join(__dirname, "../../public/Career");
console.log(skillPath);
const port = process.env.port || 5500;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(indexPath));
app.use("/skills", express.static(skillPath));
app.use("/projects", express.static(projectPath));
app.use("/career", express.static(careerPath));
app.post("/index", async (req, res) => {
  try {
    const messageData = new Message({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      MobileNo: req.body.MobileNumber,
      CollegeName: req.body.CollegeName,
      MainMessage: req.body.Message,
    });
    const data = await messageData.save();
    console.log(data);
    res.status(201).send(messageData);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
app.listen(port, () => {
  console.log(`connect with port ${port}`);
});

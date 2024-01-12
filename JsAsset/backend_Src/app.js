const express = require("express");
const path = require("path");
require("../connectionFolder/connectionFile");
// const mainRouter = require("./router/route");
const Message = require("../model/scema");

const indexPath = path.join(__dirname, "../../public/index");
const skillPath = path.join(__dirname, "../../public/Skills");
const projectPath = path.join(__dirname, "../../public/Projects");
const careerPath = path.join(__dirname, "../../public/Career");
console.log(skillPath);
const port = process.env.port || 5500;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/index", express.static(indexPath));
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

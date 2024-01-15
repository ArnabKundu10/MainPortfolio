const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
// require("../connectionFolder/connectionFile");
const password = encodeURIComponent("Arnab12@");
console.log(password);
const DB = `mongodb+srv://Arnab:${password}@atlascluster.esd35xx.mongodb.net/portfolioWebsite?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
// const mainRouter = require("./router/route");
const Message = require("../model/scema");
const indexPath = path.join(__dirname, "../../public/index");
const skillPath = path.join(__dirname, "../../public/Skills");
const projectPath = path.join(__dirname, "../../public/Projects");
const careerPath = path.join(__dirname, "../../public/Career");
const PORT = process.env.PORT || 5500;
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
    const data = await messageData
      .save()
      .then(() => {
        res.status(201).json({ message: "user registered successfully" });
        console.log("data successfully posted");
      })
      .catch((error) => {
        res.status(404).json(error);
        console.log("there is an error");
      });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
// app.listen(PORT, () => {
//   console.log(`listening for requests:${PORT}`);
// });
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});

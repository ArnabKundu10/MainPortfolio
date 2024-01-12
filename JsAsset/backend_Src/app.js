const express = require("express");
const path = require("path");
require("../connectionFolder/connectionFile");
// const mainRouter = require("./router/route");
const Message = require("../model/scema");

const myPath = path.join(__dirname, "../../../Main_Portfolio_Git");
console.log(myPath);
const port = process.env.port || 5500;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/index", express.static(myPath));
app.use("/index", express.static(myPath));
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

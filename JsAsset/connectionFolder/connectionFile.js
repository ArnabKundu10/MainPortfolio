const mongoose = require("mongoose");
const password = encodeURIComponent("Arnab12@");
const DB = `mongodb+srv://Arnab:${password}@atlascluster.esd35xx.mongodb.net/portfolioWebsite?retryWrites=true&w=majority`;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Atlas is connected");
  })
  .catch((error) => {
    console.log(`there might be some error:-${error}`);
  });

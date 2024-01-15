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
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(DB);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

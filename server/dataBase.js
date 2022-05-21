const mongoose = require("mongoose");

const connection = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/TestDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Veri tabanı bağlantısı başarılı");
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = connection;
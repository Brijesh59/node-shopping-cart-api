const mongoose = require("mongoose");

const dbConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

exports.connect = () =>
  new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost:27017", dbConfig)
      .then(async () => {
        resolve("Database connected :)");
      })
      .catch((error) => reject(error));
  });

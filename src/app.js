const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use(async (req, res, next) =>
  res.status(404).json({ message: "api route not Found!" })
);

// globalErrHandler middleware
app.use((error, req, res, next) => {
  const status = error?.statusCode ?? 500;
  const msg = error?.message ?? "An Error Occured!";

  return res.status(status).json({
    status: false,
    data: error.data,
    message: error.data?.msg || msg,
  });
});

module.exports = app;

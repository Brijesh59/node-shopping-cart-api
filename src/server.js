const db = require("./config/db");
const app = require("./app");

let server = null;

/* Connect Database */
db.connect()
  .then(async (message) => {
    const PORT = process.env.PORT || 8000;
    server = app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!! shutting down ...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

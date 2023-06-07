const express = require("express");
require("dotenv").config();
const app = express();

routes = require("./routes");

// Parse json bodies
app.use(express.json());

// Routes
app.use("/", routes);

//Server
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});

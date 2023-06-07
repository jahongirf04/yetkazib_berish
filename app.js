const express = require("express");
require("dotenv").config();
const app = express();

routes = require("./routes");

app.use(express.json());

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});

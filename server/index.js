const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routerHandler = require("./routes/handler");

app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

app.use("/", routerHandler);

app.listen(port, () => {
    console.log("Server Running, Please wait");
});

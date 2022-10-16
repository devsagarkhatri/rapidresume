const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/login", (req, res) => {
    res.send("This is a Weather forecast App");
});

app.listen(port, () => {
    console.log("Server Running, Please wait");
});

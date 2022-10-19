const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/getData", (req, res) => {
    return res.json({ name: "sam" });
});

app.listen(port, () => {
    console.log("Server Running, Please wait");
});

const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    const str = [
        {
            name: "sam",
            age: "21",
        },
    ];
    res.end(JSON.stringify(str));
});

router.post("/addsome", (req, res) => {
    res.end("NA");
});

module.exports = router;

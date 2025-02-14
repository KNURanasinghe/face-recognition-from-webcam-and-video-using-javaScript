const path = require('path')
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const bestPath = path.join(__dirname, '../public');

app.use(express.static(bestPath));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


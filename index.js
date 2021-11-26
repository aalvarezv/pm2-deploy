const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`PM2 Project is now live @ localhost:${port}`);
});
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./db");

const port = process.env.PORT || 5000;

// Cors settings
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

// Set up cors
app.use(cors(corsOptions));
app.use(helmet());

// Parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Parse application/json
app.use(bodyParser.json());

// Pouting for project
app.use("/api/collections", require("./routes/collections"));
app.use("/api/users", require("./routes/user"));

// Ping
app.get("/api/ping", (req, res) => {
  res.json({ status: true });
});

//express settings
app.set("trust proxy", 1);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

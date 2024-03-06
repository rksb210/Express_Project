const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

////////class 01////////

// app.use("/", (req, res, next) => {
//   console.log("hello world");
//   res.send("<h1>Response End Here</h1>");
//   next();
// });
// app.use("/add", (req, res) => {
//   console.log("first");
//   res.send("<h1>Response End </h1>");
// });

// app.use("/adds", (req, res) => {
//   console.log("second");
// });

////class 02 ///////

//////class 03 ////
app.use(require("./routes/admin"));
app.use(require("./routes/shop"));

// app.use((req, res) => {
//   res.send("<h1>404..Page not found</h1>");
// });

//////////class 04 ////////
app.use(require("./class3/chat"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server statred at port : http://localhost:${PORT}`);
});

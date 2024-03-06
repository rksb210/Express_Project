// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));

// // app.use("/", (req, res, next) => {
// //   console.log("hello world");
// //   res.send("<h1>Response End Here</h1>");
// //   next();
// // });
// // app.use("/add", (req, res) => {
// //   console.log("first");
// //   res.send("<h1>Response End </h1>");
// // });

// // app.use("/adds", (req, res) => {
// //   console.log("second");
// // });

// app.use("/add-product", (req, res) => {
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"/><input  type="text" name="name"/><button type="submit">Click</button></form>'
//   );
// });

// app.use("/product", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res) => {
//   res.send("This is Home Page");
// });

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server statred at port : http://localhost:${PORT}`);
// });

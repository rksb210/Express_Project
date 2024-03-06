const express = require("express");
const router = express.Router();

// router.use(express.urlencoded({ extended: true }));

router.get('/login',(req,res)=>{
  res.send('<form action="/" method="post" onsubmit="localStorage.setItems("name",document.getElementById("name").value)"><input type="text" id="name" /><button type="submit">Login</button></form>')
})

router.post('/',(req,res)=>{
  console.log(req.body)
  res.send(`username: ${req.body}`)
})

// router.get("/chatpage", (req, res) => {
//   res.send(
//     '<form onsubmit = "localStorage.setItems(username)" action="/postchat" method="POST" ><input type="text" name="username" id="username"/><br><button type="submit">Send</button></form>'
//   );
// });

// router.post("/postchat", (req, res) => {
//   console.log("body:", req.body);
// //   const ress = JSON.stringify(req.body);
//   res.send(`<h1>${req.body}</h1>`);
// });

router.post('/postchat', (req, res) => {
    console.log("body:", req.body);
    const ress = localStorage.setItem(JSON.stringify(req.body));
    res.send(`<h1>${ress}</h1>`);
});

module.exports = router;

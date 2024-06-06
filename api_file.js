const bodyParser = require("body-parser")
const express = require("express")
const path = require("path");
const router = require("./UseRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router)
const port = 4000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});
// app.get("/api/v1/userdata", (req, res) => {
//     res.json({
//         name: "suniel",
//         email: "suniel@gmail.com",
//         password: "Suniel@825322",
//     })
// });

// app.post("/api/v1/register", (req, res) => {
//     const username = req.body.name;
//     const useremail = req.body.email;
//     const userpassword = req.body.password;

//     res.json({
//         success: true,
//         // name: username,
//         // email: useremail,
//         // password: userpassword,

//     });
// });

app.listen(port, () => {
    console.log("Server is running at port 4000");
});
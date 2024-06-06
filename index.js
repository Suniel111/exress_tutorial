const bodyParser = require("body-parser");
const express = require("express")
const path = require("path")


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = 4000;


/*
<=======================================LECTURE 1 ================================================>
app.get("/", (req, res) => {
    res.send("<h1>HELLO WORLD</h1>")
})
    app.get("/home", (req, res) => {
        res.send("<h1>Home page</h1>")
        })
        app.get("/contact", (req, res) => {
            res.send("<h1>Contact Page</h1>")
            })
<=======================================LECTURE 1 ================================================>
*/

/*<=====================================CRUD======================================================>
 */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.post("/", (req, res) => {
    res.send(`<h1>Login Done Mr. ${req.body.name}</h1>`);
    console.log(req.body);
})


app.listen(port, () => {
    console.log("Server is working");
});



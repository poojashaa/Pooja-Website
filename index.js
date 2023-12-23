import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.get("/home", (req,res) => {
   res.sendFile(__dirname + "/public/index.html");
})
app.get("/about", (req,res) => {
   res.sendFile(__dirname + "/public/about.html") ;
})
app.get("/education", (req,res) => {
   res.sendFile(__dirname + "/public/education.html") ;
})
app.get("/projects", (req,res) => {
   res.sendFile(__dirname + "/public/projects.html") ;
})
app.get("/contact", (req,res) => {
   res.sendFile(__dirname + "/public/contact.html") ;
})
app.get("/work", (req,res) => {
   res.sendFile(__dirname + "/public/work.html") ;
})





app.listen(port, () =>
{
   console.log(`The port is ${port}`);
})


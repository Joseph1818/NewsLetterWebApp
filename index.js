import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Static Files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

//Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Get Handler(help to send back the resource that the user want.)
app.get("", (req, res) => {
  res.render("index");
});
app.get("/confirmationPage", (req, res) => {
  res.render("confirmationPage");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

//Listen on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000.");
});

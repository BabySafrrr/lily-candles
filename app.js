const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//get
app.get("/",function(req,res){
res.render("home",{})
});




















app.listen(3000, function() {
  console.log("Server OK");
});

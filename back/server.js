const express = require("express");
const path = require("path");
const db=require('./db')

const app = express();

app.use(express.static("public"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});


db.sync({force:false})
  .then(()=>{
    app.listen(3004, () => console.log("Escuchando en puerto 3004"));
  })


const express = require("express");
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/api/signup", require("./Routes/signup"));
app.use("/api/login", require("./Routes/login"));

app.listen(PORT, ()=>{
    console.log("Server running at "+PORT);
})
const express = require("express");
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/api", require("./Routes/signup"));
app.use("/api", require("./Routes/login"));
app.use("/api", require("./Routes/createPost"));
app.use("/api", require("./Routes/createPost"));

app.listen(PORT, ()=>{
    console.log("Server running at "+PORT);
})
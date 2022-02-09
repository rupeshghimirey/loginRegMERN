const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser");
const port = 8000;
const app = express();

app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));

app.use(express.json());
app.use(cookies());

// require our mongoose config file and tell it about the db name
require("./server/config/mongoose.config");

// require our routes and tell us about our app
require("./server/routes/user.routes")(app);

app.listen(port, ()=>console.log(`Listening on port ${port}. Lets get it! We gonnnn login and register today!`))




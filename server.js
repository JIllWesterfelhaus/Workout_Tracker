const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose.connect in seed.js; changed URI to URL
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/populate", 
{ useNewUrlParser: true,
  //added line 15
  useFindAndModify: false
});

//async/await? define db elsewhere?
//why need to define db if created here?

app.use(require("./routes/apiroutes"))
app.use(require("./routes/htmlroutes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

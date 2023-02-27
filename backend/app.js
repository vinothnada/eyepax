const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
 
//middleware
app.use(express.json());
 
app.listen(3006, () => {
  console.log("Server is running on port 3006");
});


//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/eyepax",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

const photoRouter = require("./routes/PhotoRoutes");
app.use("/api/carousel", photoRouter);

module.exports = app;
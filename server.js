const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const messagesRoute = require("./routes/messages");
const cors = require("cors");

dotenv.config();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.error("DB connection error:", err));


app.use(express.json());

app.use("/api/messages", messagesRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
  console.log("Backend server is running");
});
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ContentRouter = require("./routes/ContentRouter");
const adminRouter = require("./routes/adminRouter");
const memberRouter = require("./routes/memberRouter");


const app = express();
app.use(cookieParser());

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes

app.use("/content", ContentRouter);
app.use("/user", adminRouter);
app.use("/member", memberRouter);


// Redirect all requests to the REACT app
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
//   );
// });
// ready to export
module.exports = app;

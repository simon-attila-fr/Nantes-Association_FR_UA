const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserRouter = require("./routes/UserRouter");
const ContentRouter = require("./routes/ContentRouter");
const MailRouter = require("./routes/MailRouter");
const MemberRouter = require("./routes/MemberRouter");
const PhotoRouter = require("./routes/PhotoRouter");
const TraductionRouter = require("./routes/TraductionRouter");

const app = express();
app.use(cookieParser());

// Use some application-level middlewares
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
app.use(express.static(path.join(__dirname, "../public/assets/images")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use("/user", UserRouter);
app.use("/content", ContentRouter);
app.use("/sendmail", MailRouter);
app.use("/member", MemberRouter);
app.use("/photo", PhotoRouter);
app.use("/traduction", TraductionRouter);

// Redirect all requests to the REACT app
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
//   );
// });
// ready to export
module.exports = app;

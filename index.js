const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const fileupload = require("express-fileupload");

//routers
const userRouter = require("./routes/user");

const connectDB = require("./db");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  fileupload({
    // limits: { fileSize: 2 * 1024 * 1024 }, // 2mb
    // abortOnLimit: true, // if limit is reached return 413
    createParentPath: true,
    useTempFiles: true,
  })
);

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use("/user", userRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
const port = process.env.PORT || 6010;
app.listen(port, () => {
  console.log(`server is running 0n localhost:${port}`);
});

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("やあ");
});

app.listen(3000, () => {
  console.log("start!");
});

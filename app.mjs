import express from "express";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.get("/profiles", (req, res) => {
  try {
    console.log(200);
    return res.json({
      data: {
        name: "john",
        age: 20,
      },
    });
  } catch (error) {
    console.log(400);
  }
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "POST_CREATED") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "COMMENT_CREATED") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
  }
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on port 4002");
});
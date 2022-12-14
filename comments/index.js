const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();
const axios = require("axios");
app.use(cors());
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
    status: "pending",
  });

  commentsByPostId[req.params.id] = comments;
  await axios
    .post("http://event-bus-srv:4005/events", {
      type: "COMMENT_CREATED",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
        status: "pending",
      },
    })
    .catch((err) => console.log(err));
  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("Received event", req.body.type);

  const { type, data } = req.body;

  if (type === "COMMENT_MODERATED") {
    const { postId, id, status, content } = data;

    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    await axios
      .post("http://event-bus-srv:4005/events", {
        type: "COMMENT_UPDATED",
        data: {
          id,
          postId,
          status,
          content,
        },
      })
      .catch((err) => console.log(err));
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on port 4001");
});

const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "COMMENT_CREATED") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios
      .post("http://localhost:4005/events", {
        type: "COMMENT_MODERATED",
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content,
        },
      })
      .catch((err) => console.log(err));
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening for moderation on port 4003 ");
});

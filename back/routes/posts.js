const postController = require("../controllers/posts");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = await postController.fetchPosts(req);
  res.json(data);
});

module.exports = router;

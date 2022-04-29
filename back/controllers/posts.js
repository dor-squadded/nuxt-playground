const mongoUtils = require("../mongo");

const fetchPosts = async (req, res) => {
  const db = mongoUtils.getDb();
  const { creationTs } = req.body;
  const postsDb = db.collection("Posts");
  console.log(creationTs);
  const postsFound = await postsDb
    .find({
      creationTs: { $gt: 0 },
    })
    .sort({ creationTs: -1 })
    .limit(20)
    .toArray();
  return postsFound;
};

module.exports = { fetchPosts };

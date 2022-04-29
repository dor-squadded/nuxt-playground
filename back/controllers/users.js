const mongoUtils = require("../mongo");
const Chance = require("chance");
const ObjectId = require("mongodb").ObjectId;
const chance = new Chance();

// const getRandomPosts = (userId) => {
//   const numberOfPosts = chance.integer({ min: 1, max: 5 });

//   const randomUserPosts = [];
//   const subCommunities = [
//     "awww",
//     "jokes",
//     "funny",
//     "movies",
//     "gadgets",
//     "gaming",
//     "philosophy",
//     "fitness",
//     "books",
//     "food",
//     "news",
//   ];

//   for (let i = 0; i < numberOfPosts; i++) {
//     const newPost = {
//       postTitle: chance.sentence({ words: 5 }),
//       subCommunity:
//         subCommunities[
//           chance.integer({ min: 1, max: subCommunities.length - 1 })
//         ],
//       score: chance.integer({ min: -10000, max: 10000 }),
//       postText: chance.sentence(),
//       userId,
//       creationTs: chance.timestamp(),
//       commentsLocked: chance.bool(),
//       nsfw: chance.bool(),
//     };
//     randomUserPosts.push(newPost);
//   }
//   return randomUserPosts;
// };

const getUsers = async (req, res) => {
  const db = mongoUtils.getDb();
  const { userSearchString, lastUserName } = req.body;
  console.log({
    name: {
      $regex: userSearchString || "",
      $options: "i",
      $gt: lastUserName || "",
    },
  });
  const usersDb = db.collection("users");

  const usersFound = await usersDb
    .find({
      name: {
        $regex: userSearchString || "",
        $options: "i",
        $gt: lastUserName || "",
      },
    })
    .sort({ name: 1 })
    .limit(20)
    .toArray();
  return usersFound;
};

// const generateFakeData = async (req, res) => {
//   const db = mongoUtils.getDb();
//   const usersDb = db.collection("users");
//   const postsDb = db.collection("Posts");

//   const usersFound = await usersDb
//     .aggregate([{ $sample: { size: 800 } }])
//     .toArray();
//   const allRandomPosts = [];

//   usersFound.forEach((user) => {
//     const userId = new ObjectId(user._id);
//     const randomPosts = getRandomPosts(userId);
//     allRandomPosts.push(...randomPosts);
//   });

//   postsDb.insertMany([...allRandomPosts]);
//   return allRandomPosts;
// };

module.exports = { getUsers /* , generateFakeData */ };

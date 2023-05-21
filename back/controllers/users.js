const mongoUtils = require("../mongo");

const getUsers = async (req, res) => {
  const db = mongoUtils.getDb();
  const { userSearchString } = req.body;
  const usersDb = db.collection("users");
  const getUsersQuery = {
    name: {
      $regex: userSearchString || "",
      $options: "i",
    },
  };

  console.log("getUsers query:", getUsersQuery);

  const usersFound = await usersDb
    .find(getUsersQuery)
    .sort({ name: 1 })
    .limit(20)
    .toArray();
  return usersFound;
};
const getNextUsers = async (req, res) => {
  const db = mongoUtils.getDb();
  const { userSearchString, usernameForNextPage } = req.body;
  const usersDb = db.collection("users");
  const getUsersQuery = {
    name: {
      $regex: userSearchString || "",
      $options: "i",
      $gt: usernameForNextPage || "",
    },
  };

  console.log("getNextUsers query:", getUsersQuery);

  const usersFound = await usersDb
    .find(getUsersQuery)
    .sort({ name: 1 })
    .limit(20)
    .toArray();
  return usersFound;
};

module.exports = { getUsers, getNextUsers /* , generateFakeData */ };

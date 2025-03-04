const db = require("../db/queries");

const getUsernames = async (req, res) => {
  const { search } = req.query;
  if (search) {
    const usernames = await db.searchUsername(search);
    console.log(`Usernames with key "${search}": `, usernames);
    res.send(
      `Usernames with key "${search}": ${
        usernames.length >= 1
          ? usernames.map((user) => user.username).join(", ")
          : "Table is empty"
      }`
    );
  } else {
    const usernames = await db.getAllUsernames();
    console.log("All Usernames: ", usernames);
    res.send(
      `All Usernames: ${
        usernames.length >= 1
          ? usernames.map((user) => user.username).join(", ")
          : "Table is empty"
      }`
    );
  }
};

const createUsernameGet = async (req, res) => {
  res.render("form", { title: "Create User" });
};

const createUsernamePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

const deleteUsernamesGet = async (req, res) => {
  await db.deleteAllUsernames();
  res.redirect("/");
};

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernamesGet,
};

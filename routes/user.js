const express = require("express");
const router = express.Router();
const UserSchema = require("../schemas/user");


// Get users collection
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const post = await UserSchema.findOne({
    user: id
  });

  if (post) {
    res.send({ post });
  } else {
    res.send({ error: "Post not found" });
  }
});

//Sign user in
router.post("/sign_in", async (req, res) => {
  const { username,password} = req.body;

  const find_user = await UserSchema.findOne({
    username: username,
    password: password
  });

  if (find_user) {
    res.send({ 
      status: true,
      token: username
     });
  } else {
    res.send({
      status: false
    });
  }
});

module.exports = router;

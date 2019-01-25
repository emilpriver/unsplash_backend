const express = require("express");
const router = express.Router();
const collectionSchema = require("../schemas/collection");


// Get users collection
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const post = await collectionSchema.findOne({
    user: id
  });

  if (post) {
    res.send({ post });
  } else {
    res.send({ error: "Post not found" });
  }
});

//Add collection
router.post("/", async (req, res) => {
  const { collection_id, user} = req.body;

  const collection = await collectionSchema.create({
    collection_id,
    user
  });

  if (collection) {
    res.send({ 
      status: true,
      data: collection
     });
  } else {
    res.send({
      status: false,
      error: "Collection not saved"
    });
  }
});

module.exports = router;

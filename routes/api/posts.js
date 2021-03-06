const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .post(postsController.createReply)
  .put(postsController.update)

module.exports = router;
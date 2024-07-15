const router = require("express").Router();
const subactivityController = require("./subactivity-controller");
router.get("/", async (req, res, next) => {
  try {
    const data = await subactivityController.listData();
    res.json({ data, msg: "your data for get request" });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const data = await subactivityController.listData(req.params.id);
    res.json({ data, msg: "your id of the data" });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = await subactivityController.createData(req.body);
    res.json({ data, msg: "successfully added the data in database" });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const data = await subactivityController.updateData(
      req.params.id,
      req.body
    );
    res.json({ data, msg: "updated successfully in database" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await subactivityController.deleteData(req.params.id);
    res.json({ msg: "successfully deleted your id" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

const router = require("express").Router();
const activityController = require("./activity-controller");

router.get('/get-all',async(req,res,next)=>{
  try{
 const data=await activityController.getALL(req.query);
 res.json({data,msg:"data inserted"});
 
  }catch(e){
   next(e);
  }
 })

router.get("/", async (req, res, next) => {
  try {
    const data = await activityController.listData();
    res.json({ data, msg: "your data list" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
    try {
      const data = await activityController.listData(req.params.id);
      res.json({ data, msg: `your request with id` });
    } catch (e) {
      next(e);
    }
  });
router.post("/", async (req, res, next) => {
  try {
    const data = await activityController.createData(req.body);
    res.json({ data, msg: "you creates successfully" });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const data = await activityController.updateData(req.params.id, req.body);
    res.json({ data, msg: "updated the database" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    await activityController.deleteData(req.params.id);
    res.json({  msg: "you deleted the id successfully" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

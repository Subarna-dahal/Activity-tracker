const router = require("express").Router();
const activityRoutes = require("../Modules/Activity/activity-route");
const subactivityRoutes = require("../Modules/SubActivity//subactivity-route");
router.use("/v1/api/activity", activityRoutes);
router.use("/v1/api/subactivity", subactivityRoutes);
module.exports = router;

const model = require("./activity-model");

const listData = async (id) => {
  if (id) {
    return await model.findById(id);
  } else {
    return await model.find();
  }
};

const getALL = async (payload) => {
  const { status } = payload;
  const query = [];
  if (status) {
    query.push({
      $match: {
        iscompleted:
          status == "pending" ? false : status == "completed" ? true : null,
      },
    });
  }
  query.push({
    $lookup: {
      from: "subactivities",
      localField: "_id",
      foreignField: "activity",
      as: "result",
    },
  });
  return await model.aggregate(query);
};

const createData = async (payload) => {
  return await model.create(payload);
};
const updateData = async (id, payload) => {
  return await model.findByIdAndUpdate(id, payload, { new: true });
};
const deleteData = async (id) => {
  return await model.findByIdAndDelete(id);
};
module.exports = { listData, createData, updateData, deleteData,getALL };

// create();
// find();
// findById();
// findByIdAndUpdate();
// findByIdAndDelete();

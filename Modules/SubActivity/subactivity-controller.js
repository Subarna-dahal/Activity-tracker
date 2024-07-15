
const Model=require('./subactivity-model')
const actvityModel=require('../Activity/activity-model');

const listData=async(id)=>{
    if(!id)
{
    return await Model.find();
}
else{
return await Model.findById(id);
}
}
const createData=async(payload)=>{
    const {activity}=payload;
    const actualdata=await actvityModel.findOne({_id:activity});
    if(!actualdata) throw new Error("your activity doesnot exists");
    return await Model.create(payload);
}


const deleteData=async(id)=>{
return await Model.findByIdAndDelete(id);

}
const updateData=async(id,payload)=>{
return await Model.findByIdAndUpdate(id,payload,{new:true});
}

module.exports={listData,createData,deleteData,updateData};
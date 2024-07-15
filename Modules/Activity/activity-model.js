const {Schema, model}=require('mongoose')
const activitySchema=new Schema({
    name:{type:String,required:true,unique:true},
    iscompleted:{default:false,type:Boolean,required:true},
},
{
    timestamps:true,
})

module.exports=new model('Activity',activitySchema);
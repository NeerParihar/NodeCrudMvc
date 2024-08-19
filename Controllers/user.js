const userModel=require("../Models/user");

async function handlePostUser(req,res){
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title )
         return res.status(400).json({"msg":"All fields are required...."});
                const result=await userModel.create({
                    firstName:body.first_name,
                    lastName:body.last_name,
                    email:body.email,
                    gender:body.gender,
                    jobTitle:body.job_title
                })
                console.log(result);
               return  res.status(201).json({"msg":"success"});
}
async function handleGetAllUser(req,res){
    const allUserDb=await userModel.find({});
    return res.status(200).json(allUserDb);
}

async function handleFindUserById(req,res) {
    let user=await userModel.findById(req.params.id);
    if(!user) return res.status(400).json({"msg":"User not valid"});
    return res.status(200).json(user);
    
}
async function handleUpdateUserById(req,res) {
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title )
        return res.status(400).json({"msg":"All fields are required...."});

    let result=await userModel.findByIdAndUpdate(req.params.id,{
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    });
    return res.status(202).json({"msg":"Updation Done"});
    
}

async function handleDeleteUserById(req,res) {
    let result= await userModel.findByIdAndDelete(req.params.id);
   if(!result) return res.status(404).json({"msg":"no user find"});
   return res.status(200).json({"msg":"Deletion Done"})
    
}

module.exports={handleGetAllUser,handlePostUser,
    handleFindUserById,handleDeleteUserById,handleUpdateUserById};

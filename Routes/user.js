 const express=require("express");
 const router=express.Router();
const 
{handleDeleteUserById,handleFindUserById,handleGetAllUser,
    handlePostUser,handleUpdateUserById} =require("../Controllers/user")

 

//SSL server side rendering sent
// router.get("/users",async (req,res)=>{
//     let user=await userModel.find({});
//     const html=`
//     <ul>
//     ${user.map((u)=>`<li>${u.firstName}-${u.email}</li>`).join("")}
//     </ul>
//     `
//     return res.send(html);
// })

//Differnt methods on a single URL is done as follows

router.route("/").post(handlePostUser).get(handleGetAllUser);

router.route("/:id").get(handleFindUserById).patch(handleUpdateUserById).delete(handleDeleteUserById)

module.exports=router;
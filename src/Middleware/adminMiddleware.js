const addminMiddleware = async(req,res,next)=>{

    try {
          console.log(req.user);
          const adminRole = req.user.isAdmin;
          if(!adminRole){
            return res
            .status(403)
            .json({message:"Acess denied. User is not an admin"})
          }
          next();
          
    } catch (error) {
        next(error);
    }
} 


export default addminMiddleware;
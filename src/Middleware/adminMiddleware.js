const addminMiddleware = async(req,res,next)=>{

    try {
      // / checking user role here 
          console.log(req.user);
          const adminRole = req.user.isAdmin;
          if(!adminRole){
            return res
            .status(403)
            .json({message:"Acess denied. User is not an admin"})
          }
          next();
          
    } catch (error) {
      // forwarding with the error
        next(error);
    }
} 


export default addminMiddleware;
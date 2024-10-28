

const register = async(req,res)=>{
    
   try {
         res.status(200).send("all set buddy")
   } catch (error) {
      console.log(error);
   }
}



export {register};
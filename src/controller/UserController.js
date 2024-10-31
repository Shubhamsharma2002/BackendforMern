

const register = async(req,res)=>{
    
   try {
        const d = req.body;
      //   console.log(req.body);
         res.status(200).send(d)
   } catch (error) {
      console.log(error);
   }
}



export {register};


const register = async(req,res)=>{
    
   try {
        const d = req.body;
        console.log(req.body);
        console.log("checking the response")
         res.status(201).send(d)
   } catch (error) {
      console.log(error);
   }
}



export {register};
function validateTicket(req,res,next){

    const {
  customer_name,
  customer_email,
  subject,
  description}=req.body;

  if(!customer_name || !customer_email || !subject || !description){
   return res.status(404).json({
        "success":false,
        "message":"required fields are missing"
    })
  }

  next()

}
module.exports=validateTicket
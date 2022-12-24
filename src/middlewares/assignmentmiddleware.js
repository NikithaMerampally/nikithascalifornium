let validateor=async function(req,res,next){
    let handler=req.headers["isfreeappuser"];
    if(!handler){
        res.send({msg:"request is missing a mandatory header"})
    }else{
        req.body.isFreeAppUser=handler;
        next()
    }
};

module.exports.validateor=validateor;
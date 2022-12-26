let validateor=async function(req,res,next){
    let handler=req.headers["isfreeappuser"];
    if(handler===undefined){
        res.send({msg:"request is missing a mandatory header"})
    }else{
    
        next()
    }
};

module.exports.validateor=validateor;
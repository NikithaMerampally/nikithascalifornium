let myhandler=async function(req,res){
    let data="u have suucessfully used middleware";
    res.send({msg:data})
}


module.exports.myhandler=myhandler;
const midd=function(req,res,next){
    let ip=req.socket.remoteAddress;
    console.log("my ip"+ip);
    let mypath=req.path;
    let date=Date.now()
    console.log("my path is "+mypath)
    console.log(date)
    next()
}


module.exports.midd=midd;
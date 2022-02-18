
const http =require("http");//import http server to help clients(flutter app,web app, etc) communicate with it 

const server= http.createServer(function(req,res){
    if(req.method==="GET"){
        res.end(`We got your ${req.method} ${req.url} message.We would get back to you.`);
    }else  if(req.method==="POST"){
        res.end(`We got your ${req.method} message.We would get back to you.`);
    }else  if(req.method==="PATCH"){
        res.end(`We got your ${req.method} message.We would get back to you.`);
    }else  if(req.method==="DELETE"){
        res.end(`We got your ${req.method} message.We would get back to you.`);
    }else  if(req.method==="PUT"){
        res.end(`We got your ${req.method} message.We would get back to you.`);
    }else {
        res.end(`we cant handle this unknown request`);
    }

  
}
);

server.listen(3001);//a room number/space for your server



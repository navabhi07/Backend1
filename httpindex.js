const http=require('http');//require to http module

const PORT=3000;

const server=http.createServer(function listener(request,response){
  if(request.url=='/home')
  {
    response.end("welcome to home bro");
  }
});

server.listen(PORT,function exec()
{
   console.log('server is up and running at PORT 3000')
});
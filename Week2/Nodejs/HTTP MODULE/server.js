const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end('Hello world!')
    }else{
        res.end("Your are trypng to hit a wrong url")
    }
})

server.listen(8000, ()=>{
    console.log("Server is Started");
})
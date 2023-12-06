//http를 통해 서버 띄워보기
const http = require('http');
const app = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
    console.log(req.url);
    if(req.url == '/'){
        res.end("여기는 루트");//send가 아닌 end를 써야함
    }else if(req.url == '/login'){
        res.end("로그인페이지");

    }else{
        res.writeHead(404);
    }
});//서버 생성

app.listen(3001, ()=>{
    console.log('http로 가동된 서버입니다');
});
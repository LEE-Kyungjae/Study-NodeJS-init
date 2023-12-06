// node.js : 자바스크립트를 이용하여 웹페이지를 생성하는 api

//서버의 중심이 될 파일
//서버 구동을 위한 모듈(express) 다운받기
const express = require('express');
const app = express();

//app객체를 통해 포트번호와 콜백함수 지정
app.listen(3000, function(){
    console.log('서버 가동');
});
//npm install express --save : express모듈 설치

app.get('/', function( req, res ){
    //req : 요청 처리객체
    //res : 응답 처리객체
    res.send('첫 실행화면');
});

app.get('/login' , (req , res)=>{
    res.send("여기는 로그인 화면입니다");
})








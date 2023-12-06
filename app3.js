
const express = require("express");

//npm i body-parser -s

const bodyParser = require("body-parser");
const app = express();

//views폴더를 참조할 수 있도록 경로를 세팅하고
//모듈화를 위해 사용할 ejs엔진 ( Embedded javascript )을 설정
app.set("views", "./views"); //views폴더 참조

//npm install ejs -s : ejs모듈 다운로드
app.set("view engine", "ejs");

//앞으로 js파일 사용을 위해 접근할 경로
// work == ${__dirname}
app.use(express.static(`${__dirname}/public`));

//json형태의 파일을 해독할 수 있도록 세팅
app.use(bodyParser.json());

//URL을 통해 전달되는 파라미터에 한글 공백등이 포함되어 있을경우를 해결하기 위한 세팅
app.use(bodyParser.urlencoded({extended:true}));

//routes/home 경로의 파일을 가져오자
const home = require("./routes/home");
app.use("/",home);//미들웨어를 등록한다

//app객체를 외부에서 사용할 수 있도록 내보낸다
module.exports = app;














/* //첫페이지
app.get("/", (req, res) => {
  //외부 ejs를 읽어오기 위해 render메서드를 사용
  res.render("home/index.ejs");
});

//로그인 페이지
app.get("/login", (req, res) => {
    res.render("home/login.ejs")
}); */

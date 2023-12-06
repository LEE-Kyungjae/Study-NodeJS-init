const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("서버구동");
});

//맨 처음 실행될 페이지
app.get("/", (req, res) => {
    res.send(
    `<!DOCTYPE html>
        <html lang="ko">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>로그인 화면</title>
        </head>
    
        <body>
            ID <input><br>
            PW <input type="password"><br>
            <input type="button" value="로그인">
        </body>
        
        </html>`);
});

app.get("/login", (req, res) => {
    res.send("로그인 화면");
});

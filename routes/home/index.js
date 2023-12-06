//코드에 문제발생시 이를 더 빨리 처리하고 소스로 알려줌으로써
//일반적인 코딩 실수나 안전하지 않은 동작을 빠르게 포착하도록 하는 키워드
"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home_ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

/* 
//첫페이지
router.get("/", (req, res) => {
  //외부 ejs를 읽어오기 위해 render메서드를 사용
    res.render("home/index.ejs");
});

//로그인 페이지
router.get("/login", (req, res) => {
    res.render("home/login.ejs");
});
 */

//현재 index.js를 외부에서 사용할 수 있도록 내보내준다
module.exports = router;

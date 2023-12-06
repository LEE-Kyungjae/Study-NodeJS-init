console.log("hello");

//login.ejs에서 준비해둔 id들을 검색
const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const login_btn = document.querySelector("#btn_login");

//login_btn에 클릭이벤트가 발생하면 login()이라는 함수가 호출
login_btn.addEventListener("click",login);

function login(){
    // console.log(id.value);
    // console.log(pwd.value);
    const req = {
        id : id.value,
        pwd : pwd.value,
    };
    //fetch : 자바스크립트에서 서버로 요청을 보내고(req) 결과(res)를 반환하기 위한 메서드
    //jsp에선 ajax
    fetch("/login", {
        method:"POST",
        headers:{"Content-Type":"application/json"},//json구조의 데이터를 넘길것이다
        //req가 가진 문자열을 실제로 사용 가능한 json구조로 변경
        //req = "{id:aaaa, pwd:1111}"
        body:JSON.stringify(req)//req의 데이터를 실제 사용가능한 JSON구조로 변경
    });

    console.log(req);
}







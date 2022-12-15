/////////헤더메뉴//////////
let cl = window.location.href.replace("http://localhost:8080/Filmap", "");
console.log(cl);
if (cl.length < 3) {
    $(".menu").eq(0).addClass("curr_location");
}
if (cl.indexOf("filter") != -1) {
    $(".menu").eq(1).addClass("curr_location");
}
else if (cl.indexOf("preview") != -1) {
    $(".menu").eq(2).addClass("curr_location");
}

///////검색/////////
function search(target) {
    let sendTxt;
    let resultList;
    let resultLength = 0;
    sendTxt = target.value;
    console.log(sendTxt);
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/search',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'text', // 전송받을 데이터의 타입
        data : JSON.stringify(sendTxt),  // post 방식으로 url에 명시된 주소(/board/send)로 전송. person의 데이터를 직렬화 해서 넘김
        success : function(result){
            resultList = JSON.parse(result);    // 서버로부터 응답이 도착하면 호출될 함수
            resultLength = resultList.length;
            if (sendTxt == "") {
                resultLength = 0;
            }
            let result_tmp = "";
            if (!resultList[0].movie_title.includes("null")) {
                for (let i = 0; i < resultLength; i++) {
                    result_tmp += `<a href="movie/detail?movie_idx=${resultList[i].movie_idx}" class="search_result">
                                            <img class="search_result_img" src="${resultList[i].movie_img}">
                                            <div class="search_result_title">${resultList[i].movie_title}</div>
                                          </a>`;
                }
                $(".search_page").css({
                    display: "block"
                })
            }
            document.getElementsByClassName("search_page")[0].innerHTML = result_tmp;



        },
        error   : function(){
            // alert("error")
        } // 에러가 발생했을 때, 호출될 함수
    }); // $.ajax()
}

$(".logo").click(function () {
    location.href = "/Filmap";
});
$(".menu").eq(0).click(function (){
    location.href = "/Filmap";
});
$(".menu").eq(1).click(function () {
    location.href = "/Filmap/filter";
})
$(".menu").eq(2).click(function () {
    location.href = "/Filmap/preview";
})


///////////로그인 팝업///////////
function ftBtn() {
    $(".user_thumbnail").click(function (){
        $(".user_box").css({
            display: "flex"
        })
    })

    $(".login").click(function (){
        popup(0);
    });
}
ftBtn();
function popup(n){
    if (n==1) {
        $(".login_window").css({
            display: "none"
        });
        $(".dark_cover").css({
            display: "none"
        })
    }
    else {
        $(login_window).css({
            display: "block"
        });
        $(".dark_cover").css({
            display: "block"
        })
    }
}

let login_window = document.createElement('div');
login_window.setAttribute('class', 'login_window');
login_window.style.cssText = 'width: 300px; height: 360px; background: gray;  box-shadow: 0 0 2px 1px black; position: fixed; top: 240px; left: 50%; transform: translateX(-50%); z-index: 9999; display: none';
// position: absolute; top: 450px; left: 50%; position: fixed; transform: translate(-50%,-50%);
document.getElementById('wrap').appendChild(login_window);

let x_button = document.createElement('div');
x_button.setAttribute('class', 'x_button');
document.getElementsByClassName('login_window')[0].appendChild(x_button);
x_button.addEventListener('click', function(){
    popup(1);
})

let logo_img = document.createElement('div');
logo_img.setAttribute('class', 'logo_img');
document.getElementsByClassName('login_window')[0].appendChild(logo_img);

let send_login = document.createElement('div');
send_login.setAttribute('class', 'send_login');
send_login.style.cssText = 'width: 100%; height: 170px;';
document.getElementsByClassName('login_window')[0].appendChild(send_login);

let em_txt_box = document.createElement('input');
em_txt_box.setAttribute('type', 'email');
em_txt_box.setAttribute('maxlength', '64');
em_txt_box.setAttribute('pattern', '.+@bestcnd\.co\.kr');
em_txt_box.setAttribute('pattern', '.+@bestcnd\.com');
em_txt_box.setAttribute('class', 'em_txt_box');
em_txt_box.setAttribute('placeholder', '이메일을 입력해주세요');
em_txt_box.style.cssText = 'width: 250px; height: 30px; padding: 0 10px; outline: none; box-shadow: 0 0 2px 1px black; border: 0px; border-radius: 10px; margin: 10px 15px;';
document.getElementsByClassName('send_login')[0].appendChild(em_txt_box);

//  이메일 형식이 맞는지 아닌지
//  백에서 구현한다면 setAttribute maxlength ~ pattern *2 개 삭제


let pw_txt_box = document.createElement('input');
pw_txt_box.setAttribute('type', 'password');
pw_txt_box.setAttribute('class', 'pw_txt_box');
pw_txt_box.setAttribute('placeholder', '비밀번호를 입력해주세요')
pw_txt_box.style.cssText = 'width: 250px; height: 30px; padding: 0 10px; outline: none; box-shadow: 0 0 2px 1px black; border: 0px; border-radius: 10px; margin: 10px 15px;';
document.getElementsByClassName('send_login')[0].appendChild(pw_txt_box);

let login_btn = document.createElement('div');
login_btn.setAttribute('class', 'login_btn');
login_btn.innerText = '확인';
login_btn.style.cssText = 'width: 200px; height: 35px; outline: none; box-shadow: 0 0 2px 1px black; border: 0px; border-radius: 10px; background: rgb(33, 33, 33); color: white; text-align: center; line-height: 40px; cursor: pointer; margin: 10px auto;';
document.getElementsByClassName('send_login')[0].appendChild(login_btn);

let check_txt = document.createElement('div');
check_txt.setAttribute('class', 'check_txt');
check_txt.style.cssText = 'width: 100%; height: 30px; padding: 0 10px; color: red; text-align: center; box-sizing: border-box; margin-bottom: 10px;';
document.getElementsByClassName('login_window')[0].appendChild(check_txt);

login_btn.addEventListener('click', function() {
    login();
})
let mem_ship_set = document.createElement('div');
mem_ship_set.setAttribute('class', 'mem_ship_set');
mem_ship_set.style.cssText = 'width: 100%; height: 40px; margin: 0 auto; display: flex; justify-content: space-evenly; box-sizing: border-box;';
document.getElementsByClassName('login_window')[0].appendChild(mem_ship_set);

let find_pw = document.createElement('div');
find_pw.setAttribute('class', 'find_pw');
find_pw.style.cssText = 'widht: 150px; height: 30px; font-size: 20px; color: black; cursor: pointer;';
find_pw.innerText = '비밀번호 찾기';
document.getElementsByClassName('mem_ship_set')[0].appendChild(find_pw);

let bar = document.createElement('div');
bar.setAttribute('class', 'bar');
bar.style.cssText = 'width: 6px; height: 25px; background: rgb(33, 33, 33); border-radius: 10px;'
document.getElementsByClassName('mem_ship_set')[0].appendChild(bar);

let mem_ship = document.createElement('div');
mem_ship.setAttribute('class', 'mem_ship');
mem_ship.style.cssText = 'widht: 150px; height: 40px; font-size: 20px; color: black; cursor: pointer;';
mem_ship.innerText = '회원가입';
document.getElementsByClassName('mem_ship_set')[0].appendChild(mem_ship);

$(".logout").click(function (){
    logout();
});

//  로그인 메서드
function login(){
    let loginMap = {"user_id":$(".em_txt_box").val(), "user_pw":$(".pw_txt_box").val()};
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/login',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'json',
        data: JSON.stringify(loginMap),
        success : function(result){
            if (!result) {
                console.log("false");
                $(".check_txt").text("잘못된 정보입니다.");
            }
            else {
                if (location.href.includes("register")) {
                    location.href = "http://localhost:8080/Filmap/";
                }
                window.location.reload();
            }
        },
        error   : function(request, status, error){
            console.log("code:"+request.status+"\nmessage:"+request.responseText+"\nerror:"+error);
        } // 에러가 발생했을 때, 호출될 함수
    }); // $.ajax()
}

function logout() {
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/logout',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'json',
        success : function(result){
            if (location.href.includes("my")) {
                location.href = "http://localhost:8080/Filmap/";
            }
            else {
                window.location.reload();
            }
        },
        error   : function(request, status, error){
            console.log("code:"+request.status+"\nmessage:"+request.responseText+"\nerror:"+error);
        }
    });
}



////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
////////////////////////////////////////////회원가입 이메일 팝업///////////////////////////////////////////////////
$(".mem_ship").click(function(){
    $(".login_window").css({
        display: "none"
    });
    $(".email_txt_window").css({
        display: "block"
    })
})
// let email_txt_page = document.createElement('div');
// email_txt_page.setAttribute('class', 'email_txt_page');
// email_txt_page.style.cssText = 'width: 100vw; height: 100vh; background: rgba(33, 33, 33, 0.9); position: relative; z-index: 999; display: none';
// //  display: none; z-index 없애야한다 기억해라 지금 시험한다고 앞에있다
// document.getElementById('wrap').appendChild(email_txt_page);

let email_txt_window = document.createElement('form');
email_txt_window.setAttribute('class', 'email_txt_window');
email_txt_window.style.cssText = 'width: 300px; height: 360px; background: gray; position: fixed; top: 240px; left: 50%; position: fixed; transform: translateX(-50%); z-index: 9999; display: none';
document.getElementById('wrap').appendChild(email_txt_window);

let r_x_button = document.createElement('div');
r_x_button.setAttribute('class', 'x_button');
document.getElementsByClassName('email_txt_window')[0].appendChild(r_x_button);

r_x_button.addEventListener('click', function(){
    $(".email_txt_window").css({
        display: "none"
    })
    $(".dark_cover").css({
        display: "none"
    })
})

let email_logo_img = document.createElement('div');
email_logo_img.setAttribute('class', 'logo_img');
document.getElementsByClassName('email_txt_window')[0].appendChild(email_logo_img);

let email_send_box = document.createElement('input');
email_send_box.setAttribute('type', 'email');
email_send_box.setAttribute('maxlength', '64');
email_send_box.setAttribute('pattern', '.+@bestcnd\.co\.kr');
email_send_box.setAttribute('pattern', '.+@bestcnd\.com');
email_send_box.setAttribute('name', 'email');
email_send_box.setAttribute('placeholder', '이메일을 입력해주세요')
email_send_box.setAttribute('class', 'email_send_box');
email_send_box.style.cssText = 'width: 250px; height: 40px; padding: 0 10px; outline: none; box-sizing: boder-box; box-shadow: 0 0 2px 1px black; border: 0px; border-radius: 10px; position: absolute; top: 220px; left: 50%; transform: translate(-50%,-50%);'
document.getElementsByClassName('email_txt_window')[0].appendChild(email_send_box);

let email_check_txt = document.createElement('div');
email_check_txt.setAttribute('class', 'email_check_txt');
email_check_txt.innerText = '이미 가입한 이메일입니다.'
email_check_txt.style.cssText =  'width: 250px; height: 40px; opacity: 1; color: red; position: absolute; top: 280px; left: 50%; transform: translate(-50%,-50%); font-size: 15px; text-align: center; opacity: 0';
document.getElementsByClassName('email_txt_window')[0].appendChild(email_check_txt);

let email_send_chk = document.createElement('div');
email_send_chk.setAttribute('class', 'email_send_chk');
email_send_chk.innerText = '확인';
email_send_chk.style.cssText = 'width: 270px; height: 40px; outline: none; box-shadow: 0 0 2px 1px black; border: 0px; border-radius: 10px; position: absolute; top: 320px; left: 50%; transform: translate(-50%,-50%); background: rgb(33, 33, 33); color: white; text-align: center; line-height: 40px; cursor: pointer;';
document.getElementsByClassName('email_txt_window')[0].appendChild(email_send_chk);

email_send_chk.addEventListener('click', function(){
    // if DB join 되면 입력값과 === DB 가 같을시 pw_send_mail;
    // else
    if ($(".email_send_box").val().includes("exist")) {
        $(".email_check_txt").css({
            opacity: 1
        })
    }
    else {
        location.href = "register"+"?email="+$(".email_send_box").val();
    }

})

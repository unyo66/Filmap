let mm_page = document.createElement("div");
mm_page.setAttribute('class', 'mm_page')
mm_page.style.cssText = "width: 1100px; height: 100%; background: gray; margin: 80px auto; position: relative;"
document.getElementById('wrap').appendChild(mm_page);

let mm_logo = document.createElement("div");
mm_logo.setAttribute('class', 'logo_img');

document.getElementsByClassName('mm_page')[0].appendChild(mm_logo);

let mm_logo_txt= document.createElement("span");
mm_logo_txt.setAttribute('class', 'mm_logo_txt');
mm_logo_txt.innerText = "회원가입";
mm_logo_txt.style.cssText ='width: 100px height:30px; font-weight: 700; font-size: 20px; position: absolute; top: 190px; left: 50%; transform: translate(-50%,0%);'
document.getElementsByClassName('mm_page')[0].appendChild(mm_logo_txt);

let inner_box = document.createElement('div');
inner_box.setAttribute('class', 'inner_box');
inner_box.style.cssText = 'width: 800px; height: 400px; position: absolute; top: 450px; left: 50%; transform: translate(-50%,-50%); border: 3px solid rgba(33,33,33,0.4); box-shadow: 1 1 2px 2px white;';
document.getElementsByClassName('mm_page')[0].appendChild(inner_box);

let txt_area = document.createElement('ul');
txt_area.setAttribute('class', 'txt_area')
txt_area.style.cssText = 'width: 100px; height: 100%; position: absolute; top: 0px; left: 150px;';
document.getElementsByClassName('inner_box')[0].appendChild(txt_area);

for(let i = 0; i < 4; i++) {
    let inner_txt = document.createElement('div');
    inner_txt.setAttribute('class', 'inner_txt'+i);
    inner_txt.style.cssText = 'width: 100%; height: 100px; text-align: center; line-height: 100px; font-weight: 700;'
    document.getElementsByClassName('txt_area')[0].append(inner_txt);
}
let inner_txt0 = document.getElementsByClassName('inner_txt0')[0];
inner_txt0.innerText = '이름';
let inner_txt1 = document.getElementsByClassName('inner_txt1')[0];
inner_txt1.innerText = '아이디';
let inner_txt2 = document.getElementsByClassName('inner_txt2')[0];
inner_txt2.innerText = '비밀번호';
let inner_txt3 = document.getElementsByClassName('inner_txt3')[0];
inner_txt3.innerText = '비밀번호 확인';
inner_txt3.style.cssText = 'line-height: 0px; font-weight: 700;'

let in_btn_area = document.createElement('form');
in_btn_area.setAttribute('class', 'in_btn_area');
in_btn_area.style.cssText = 'width: 400px; height: 100%; position: absolute; left: 300px;'
document.getElementsByClassName('inner_box')[0].appendChild(in_btn_area);

let in_box_name = document.createElement('input');
in_box_name.setAttribute('type', 'text');
in_box_name.setAttribute('class', 'user_name');
in_box_name.setAttribute('placeholder', '이름을 입력해주세요')
in_box_name.style.cssText = 'width: 300px; height: 30px; border-radius: 10px; outline: none; padding: 0 10px; position: absolute; left: 30px; top: 30px;';
document.getElementsByClassName('in_btn_area')[0].appendChild(in_box_name);


let in_box_name_wrong = document.createElement('div');
in_box_name_wrong.setAttribute('class', 'in_box_name_wrong');
in_box_name_wrong.style.cssText = 'width: 300px; height: 30px; color: red; font-weight: 700; line-height: 30px; position: absolute; top: 80px; left: 35px; opacity: 0'
in_box_name_wrong.innerText = '적절하지 않은 이름입니다.';
document.getElementsByClassName('in_btn_area')[0].appendChild(in_box_name_wrong);
// ===================이름잘못입력텍스트


let in_box_id   = document.createElement('input');
in_box_id.setAttribute('class', 'in_box_id');
in_box_id.setAttribute('value', location.href.split("email=")[1]);
in_box_id.style.cssText = 'width: 300px; height: 30px; border-radius: 10px; outline: none; padding: 0 10px; position: absolute; left: 30px; top: 130px; background: rgba(33,33,33,0.2); color: black;';
    // in_box_id.setAttribute('value', '이메일 인증받은값')
in_box_id.setAttribute('readOnly', 'true');
document.getElementsByClassName('in_btn_area')[0].appendChild(in_box_id);


let in_box_pw   = document.createElement('input');
in_box_pw.setAttribute('type', 'password');
in_box_pw.setAttribute('class', 'password');
in_box_pw.setAttribute('placeholder', '비밀번호를 입력해주세요')
in_box_pw.style.cssText = 'width: 300px; height: 30px; border-radius: 10px; outline: none; padding: 0 10px; position: absolute; left: 30px; top: 230px;';
document.getElementsByClassName('in_btn_area')[0].appendChild(in_box_pw);

let in_box_pw_ck= document.createElement('input');
in_box_pw_ck.setAttribute('type', 'password');
in_box_pw_ck.setAttribute('class', 'password_ck');
in_box_pw_ck.setAttribute('placeholder', '비밀번호를 다시 입력해주세요')
in_box_pw_ck.style.cssText = 'width: 300px; height: 30px; border-radius: 10px; outline: none; padding: 0 10px; position: absolute; left: 30px; top: 280px;';
document.getElementsByClassName('in_btn_area')[0].appendChild(in_box_pw_ck);
$(".password_ck").keyup(function () {
    if ($(".password").val() == $(".password_ck").val()) {
        $(".in_box_password_wrong").css({
            opacity: 0
        })
    }
});
$(".password_ck").blur(function (){
    if ($(".password").val() == $(".password_ck").val()) {
        $(".in_box_password_wrong").css({
            opacity: 0
        })
    }
    else {
        $(".in_box_password_wrong").css({
            opacity: 1
        })
    }
});

let in_box_password_wrong = document.createElement('div');
in_box_password_wrong.setAttribute('class', 'in_box_password_wrong');
in_box_password_wrong.style.cssText = 'width: 300px; height: 30px; color: red; font-weight: 700; line-height: 30px; position: absolute; top: 330px; left: 35px; opacity: 0;'
in_box_password_wrong.innerText = '비밀번호를 확인해주세요.';
document.getElementsByClassName('in_btn_area')[0].appendChild(in_box_password_wrong);
// ===================비번잘못입력텍스트


let email_chk_txt = document.createElement('div');
email_chk_txt.setAttribute('class', 'email_chk_txt');
email_chk_txt.style.cssText = 'width: 400px; height: 30px; position: absolute; top: 670px; left: 50%; transform: translate(-50%,-50%); font-wight: 700; font-size: 20px; text-align: center; line-height: 60px; cursor: pointer; opacity: 0;';
email_chk_txt.innerText = '잘못된 정보입니다.';
document.getElementsByClassName('mm_page')[0].appendChild(email_chk_txt);


let mm_chk = document.createElement('div');
mm_chk.setAttribute('class', 'mm_chk');
mm_chk.style.cssText = 'width: 400px; height: 60px; position: absolute; top: 750px; left: 50%; transform: translate(-50%,-50%);  box-shadow: 2 2 3px 3px white; background: rgb(105, 105, 105); font-wight: 700; font-size: 20px; text-align: center; line-height: 60px; cursor: pointer;';
mm_chk.innerText = '확인';
document.getElementsByClassName('mm_page')[0].appendChild(mm_chk);


mm_chk.addEventListener('click', function(){
    let registerMap = {"user_id":$(".in_box_id").val(), "user_pw":$(".password").val(), "user_name":$(".user_name").val()};
    console.log(registerMap);
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/registerAdd',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'json',
        data: JSON.stringify(registerMap),
        success : function(result){
            if (result){
                $(".email_chk_txt").text("회원가입이 완료되었습니다.");
                $(".email_chk_txt").css({
                    opacity: 1
                })
                setTimeout(function (){
                    location.href = "http://localhost:8080/Filmap/";
                }, 1000);
            }
            else {
                alert("뭔가 잘못됨")
            }
        },
        error   : function(request, status, error){
            console.log("code:"+request.status+"\nmessage:"+request.responseText+"\nerror:"+error);
        }
    });

    // ===============else 하나라도 틀린다면
    // email_chk_txt.style.cssText =  'opacity: 1; color: red; position: absolute; top: 680px; left: 50%; transform: translate(-50%,-50%); font-wight: 700; font-size: 20px; text-align: center; line-height: 60px;';
})
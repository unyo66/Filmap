<%--
  Created by IntelliJ IDEA.
  User: opre6
  Date: 2022-12-08
  Time: 오전 2:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modal</title>
  <style>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);
    /* 별 */
    .cm_rating_box {
      position: relative;
      margin: 10px 0px;

      border-bottom: 1px solid #fff;
    }
    .cm_rating {
      display: inline-block;
      font-family: FontAwesome;
      font-size: 25px;
    }
    .cm_star_rating{
      float: right;
      color: #fff;
    }
    .cm_rating > .full:before{
      content: '\f005';
      display: inline-block;
      cursor: pointer;

    }
    .cm_rating > .half:before{
      content: '\f089';
      position: absolute;
      cursor: pointer;
      /* border: 1px solid #000; */
    }
    .cm_star_radio {
      display: none;
    }
    cm_star_radio:checked ~ label{
      color: rgb(255, 196, 0);
    }
    #cm_rating_value{
      font-size: 25px;
      text-align: center;
      display: inline-block;
      margin-bottom: 5px;
    }
    /************************************************************/
    #cm_modal {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(0,0,0,0.6);
      top: 0;
      left: 0;

      /* display: flex; */
      display: none;

      color: #fff;
    }
    .cm_window{
      width:600px;
      height:700px;
      background:gray;
      border-radius:10px;
      position:relative;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      box-sizing:border-box;

      padding: 0 50px;
      /* line-height:23px;  */
    }
    .cm_header{
      height: 50px;
      padding: 0 10px;
    }
    .cm_close{
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 30px;
    }
    .cm_movie_title {
      font-size: 30px;
    }
    .cm_close > img {
      height: 30px;
    }
    #review_text{
      margin: 0 auto;
      width: 100%;
      height: 300px;
      resize: none;
      outline:0;
      /* border: none; */
      cursor: pointer;

      background-color: grey;
      color: #fff;
    }
    #review_text::placeholder {
      color: #fff;
    }
    /**************** User **********************/
    .cm_user_img {
      height: 50px;
    }
    .cm_userId {
      display: flex;
    }
    .cm_user_name {
      font-size: 20px;
      line-height: 50px;
      padding: 0 10px;
    }
    .cm_footer{
      position: relative;
    }
    .cm_bt_box {
      height: 40px;
      /* float: right; */
    }
    .sp_btn {
      display: inline;
    }
    .sp_btn > img{
      width: 40px;
      position: absolute;
      right: 80px;
    }
    .makeCmt_btn{
      position: absolute;
      right: 0;
      border: none;
      border-radius: 10px;
      height: 30px;
      width: 70px;
      margin-top: 5px;

    }
    .sp_chk {
      display: none;
    }
  </style>
</head>

<body>
<div id="cm_modal" class="cm_overlay">
  <form action="<c:url value="/movie/addReview" />" method="POST">
    <input type="hidden" value="${movie.movie_idx}">
  <div class="cm_window">
    <div class="cm_header">
      <div class="cm_close" #id="cm_close"><img src="<c:url value='/img/cancel.png'/>" alt="닫기"></div>
    </div>
    <div class="cm_userId">
      <img src="<c:url value='/img/user.png'/>" alt="" class="cm_user_img">
      <div class="cm_user_name">유저이름</div>
    </div>
    <div class="cm_text_box">
      <input class="txt" type="text" id="review_text" name="review_text" placeholder="감상평을 입력해주세요">
    </div>
    <div class="cm_footer">
      <div class="cm_bt_box">
        <div class="sp_btn">
          <input type="radio" class="sp_chk" name="sp_chk" id="sp_chk">
          <img src="mute_off.png" alt="">
        </div>
        <button class="makeCmt_btn">작성하기</button>
      </div>
    </div>
  </div>
  </form>
</div>

<script>
  // 별점
  let cm_star = document.querySelectorAll('.cm_star_radio');
  let cm_showValue = document.querySelector('#cm_rating_value');

  for (let i = 0; i < cm_star.length; i++) {
    cm_star[i].addEventListener('click', function() {
      i = this.value;
      cm_showValue.innerHTML = i ;
    });
  }

  //modal창 켜기
  // let cm_modal = document.getElementById("cm_modal")
  // let cm_modalBtn = document.getElementById("cm_btn")
  // cm_modalBtn.addEventListener("click",function() {
  //   cm_modal.style.display = "flex"
  // })
  //modal창 끄기
  let cm_close = cm_modal.querySelector(".cm_close")
  cm_close.addEventListener("click", function() {
    console.log("닫기")
    cm_modal.style.display = "none"
  })

</script>
</body>
</html>

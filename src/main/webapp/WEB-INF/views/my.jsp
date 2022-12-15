<%--
  Created by IntelliJ IDEA.
  User: gohun
  Date: 2022/12/11
  Time: 15:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>마이페이지</title>
    <script src="./js/jquery-1.12.4.js"></script>
    <script defer src="./js/my.js"></script>
    <!--jquery-->
    <link href="./css/common.css" rel="stylesheet" type="text/css" />
    <link href="./css/my.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="wrap" id="wrap">
    <jsp:include page="header.jsp" flush="false"/>
    <div class="main">
        <div class="main_menu">
            <div class="profile_wrap">
                <div class="profile_main">
<%--                    <img src="./img/profile.jpg" />--%>
                    <div class="profile_name">${user_name}</div>
                    <div class="profile_follow_main">
                        <div class="left follo_set">
                            <div>팔로잉</div>
                            <div>${following}</div>
                        </div>
                        <div class="right follo_set">
                            <div>팔로워</div>
                            <div>${followed}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_menu_list">
                <input type="radio" id="rd1" class="rd" name="menu_rd" hidden checked>
                <label for="rd1" class="main_menu_li">
                    내가 평가한 영화
                </label>
                <input type="radio" id="rd2" class="rd" name="menu_rd" hidden>
                <label for="rd2" class="main_menu_li">
                    찜한 영화
                </label>
                <input type="radio" id="rd3" class="rd" name="menu_rd" hidden>
                <label for="rd3" class="main_menu_li">
                    팔로우 관리
                </label>
<%--                <input type="radio" id="rd4" class="rd" name="menu_rd" hidden>--%>
                <label class="main_menu_li">
                    개인정보 수정
                </label>
            </div>
        </div>
        <div class="item_area" id="review"></div>
        <div class="item_area" id="bookmark"></div>
        <div class="item_area" id="follow"></div>
        <div class="item_area" id="my_info">미구현</div>
    </div>
</div>
<div class="hidden_idx" hidden>${sessionScope.idx}</div>
</body>
</html>

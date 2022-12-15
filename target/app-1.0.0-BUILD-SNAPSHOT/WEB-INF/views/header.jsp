<%--
  Created by IntelliJ IDEA.
  User: gohun
  Date: 2022/12/01
  Time: 15:51
  To change this template use File | Settings | File Templates.
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="logTxt" value="${ pageContext.request.getSession(false).getAttribute('name')==null ? '로그인':pageContext.request.getSession(false).getAttribute('name') }" />
<c:set var="logClass" value="${ pageContext.request.getSession(false).getAttribute('name')==null ? 'login':'user_thumbnail'}" />

<!DOCTYPE html>
<html lang="en">
<html>
<head>
    <title>Title</title>
    <script src="./js/jquery-1.12.4.js"></script>
    <script async src="./js/header.js"></script>
    <link rel="stylesheet" href="./css/h_f.css">
</head>
<body>
<div class="dark_cover"></div>
<div class="header">
    <img class="logo" src="./img/logo.png" alt="">
    <div class="menu_box">
        <div class="menu">홈</div>
        <div class="menu">검색</div>
        <div class="menu">예고편</div>
    </div>
    <div class="search_box">
        <input type="text" name="" class="search_bar" onkeyup="search(this);">
        <div class="search_btn"></div>
        <div class="search_page"></div>
    </div>
    <div class="login_box">
        <div class=${logClass}>${logTxt}</div>
        <div class="user_box">
            <a class="my_page" href="http://localhost:8080/Filmap/my">My page</a>
            <div class="logout">logout</div>
        </div>
    </div>
</div>
<script>
    $(".logo").attr("src", "<c:url value='/img/logo.png'/>");
</script>
</body>
</html>

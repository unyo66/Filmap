<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bitstudy.app.dao.PreviewDAO" %>
<%@ page import="java.lang.reflect.Array" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.bitstudy.app.domain.PreviewDto" %>
<%@ page import="com.bitstudy.app.dao.ActorDAO" %>
<%@ page import="org.checkerframework.checker.units.qual.A" %>
<%@ page import="com.bitstudy.app.dao.DirectDAO" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FILMAP</title>
    <script src="<c:url value='/js/preview/jquery-3.2.1.min.js'/>"></script>
    <!--jquery-->
    <script src="<c:url value='/js/preview/iframe_api.js'/>"></script>
    <!--youtube_api-->
    <link href="<c:url value='/css/preview/common.css'/>" rel="stylesheet" type="text/css" />
    <link href="<c:url value='/css/preview/main.css'/>" rel="stylesheet" type="text/css" />
    <!--css-->
    <title>Filmap</title>
</head>
<body>

<script>
    console.log(`${tmpString}`);

    let dibs_arr = `${tmpString}`.split(",");

    for (let i = 0 ; i < dibs_arr.length; i++) {
        console.log(dibs_arr[i]);
    }



    let ITEM_LIST  = [];

    function arr(idx, tit, pos, dir, act, summa, lin ) {
        let list = {
            idx : idx,
            title: tit,
            post: pos,
            director: dir,
            actor: act,
            summary : summa,
            link: lin
        };
        return list;
    }
    <%
    PreviewDAO pdao = new PreviewDAO();
    ArrayList<PreviewDto>list = pdao.list;

    int i;
    for(i = 0; i< 20; i++){
    %>
    if (<%=i%> == <%=0%>) {
        ITEM_LIST.push([arr("<%=list.get(i).getMovie_idx()%>", "<%=list.get(i).getTitle()%>", "<%=list.get(i).getPost()%>", "<%=list.get(i).getDirector()%>"
            , "<%=list.get(i).getActor()%>" , "<%=list.get(i).getSummary()%>" , "<%=list.get(i).getLink()%>")]);
    } else {
        ITEM_LIST[0].push(arr("<%=list.get(i).getMovie_idx()%>", "<%=list.get(i).getTitle()%>", "<%=list.get(i).getPost()%>", "<%=list.get(i).getDirector()%>"
            , "<%=list.get(i).getActor()%>" , "<%=list.get(i).getSummary()%>" , "<%=list.get(i).getLink()%>"));
    }
    <%
    }
    %>
</script>
<div class="wrap">
    <jsp:include page="header.jsp" flush="false"/>
</div>
<div class="main_wrap">
    <div class="main">
        <img src="<c:url value='/img/preview/up.png'/>" class="up_btn" id="up" />
        <img src="<c:url value='/img/preview/down.png'/>" class="down_btn" id="down" />
        <div class="preview_main" id="preview_main">
            <ul id="list_ul"></ul>
        </div>
    </div>
</div>
<script src="<c:url value='/js/preview/main.js'/>"></script>
</body>
</html>

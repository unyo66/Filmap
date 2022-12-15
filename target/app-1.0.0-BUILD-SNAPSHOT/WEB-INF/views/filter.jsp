<%--
  Created by IntelliJ IDEA.
  User: gohun
  Date: 2022/12/01
  Time: 15:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>필터페이지</title>
    <script src="./js/jquery-1.12.4.js"></script>
    <script defer src="./js/filter.js"></script><!--얘 위치 움직이면 슬라이더 먹통됨 왜그런지 모르겟슴-->
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/filter.css">
    <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-barun-gothic.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
</head>
<body onselectstart="return false">
<%--<div class="dark_cover"></div>--%>
<div class="wrap" id="wrap">
    <jsp:include page="header.jsp" flush="false"/>
    <div class="hide_mine">
        내가 본 영화 숨기기
        <div class="hide_mine_check_box">
            <img class="hide_mine_check display" src="./img/check.png" alt="check">
        </div>
    </div>
    <div class="filter_area">
        <div class="filter_box">
            <ul class="filter_ul">
                <li class="filter_name">장르</li>
                <li class="options_li">
                    <div class="options genre">드라마</div>
                    <div class="options genre">스릴러</div>
                    <div class="options genre">코미디</div>
                    <div class="options genre">멜로</div>
                    <div class="options genre">액션</div>
                    <div class="options genre">판타지</div>
                    <div class="options genre">가족</div>
                </li>
                <label for="checkbox_flip1" class="label_flip">▾</label>
            </ul>
            <input type="checkbox" name="" class="checkbox_flip" id="checkbox_flip1">
            <ul class="filter_ul hided_filter">
                <li class="filter_name transparent"></li>
                <li class="options_li">
                    <div class="options genre">모험</div>
                    <div class="options genre">공포</div>
                    <div class="options genre">가족</div>
                    <div class="options genre">미스터리</div>
                    <div class="options genre">애니메이션</div>
                    <div class="options genre">전쟁</div>
                </li>
                <div class="label_flip transparent"></div>
            </ul>
            <ul class="filter_ul">
                <li class="filter_name">국가</li>
                <li class="options_li">
                    <div  class="options movie_nation">한국</div>
                    <div  class="options movie_nation">미국</div>
                    <div  class="options movie_nation">일본</div>
                    <div  class="options movie_nation">영국</div>
                    <div  class="options movie_nation">프랑스</div>
                </li>
                <label for="checkbox_flip2" class="label_flip">▾</label>
            </ul>
            <input type="checkbox" name="" class="checkbox_flip" id="checkbox_flip2">
            <ul class="filter_ul hided_filter">
                <li class="filter_name transparent"></li>
                <li class="options_li">
                    <div class="options movie_nation">대만</div>
                    <div class="options movie_nation">독일</div>
                    <div class="options movie_nation">이탈리아</div>
                    <div class="options movie_nation">홍콩</div>
                    <div class="options movie_nation">중국</div>
                </li>
                <div class="label_flip transparent"></div>
            </ul>
            <ul class="filter_ul">
                <li class="filter_name">등급</li>
                <li class="options_li">
                    <div class="options movie_level">전체 이용가</div>
                    <div class="options movie_level">12세 이용가</div>
                    <div class="options movie_level">15세 이용가</div>
                    <div class="options movie_level">청소년 이용불가</div>
                </li>
                <div class="label_flip transparent"></div>
            </ul>
            <ul class="filter_ul">
                <li class="filter_name">OTT</li>
                <li class="options_li">
                    <div class="options OTT">넷플릭스</div>
                    <div class="options OTT">왓챠</div>
                    <div class="options OTT">웨이브</div>
                    <div class="options OTT">티빙</div>
                    <div class="options OTT">디즈니+</div>
                </li>
                <div class="label_flip transparent"></div>
            </ul>
            <ul class="filter_ul">
                <li class="filter_name">길이</li>
                <li class="options_li">
                    <div class="options movie_runtime">~ 90분</div>
                    <div class="options movie_runtime">90분 ~ 120분</div>
                    <div class="options movie_runtime">120분 ~</div>
                    <div class="slider">
                        <input type="range" class="input_left" min="1" max="100" value="1" />
                        <input type="range" class="input_right" min="1" max="100" value="100" />
                        <div class="track">
                            <div class="selected_area"></div>
                            <div class="thumb left">
                                <div class="tmp_thumb_value"></div>
                            </div>
                            <div class="thumb right">
                                <div class="tmp_thumb_value"></div>
                            </div>
                        </div>
                    </div>
                </li>
                <div class="label_flip transparent"></div>
            </ul>
            <input type="checkbox" name="" class="checkbox_flip" id="checkbox_flip4">
<%--            <ul class="filter_ul hided_filter">--%>
<%--                <li class="filter_name"></li>--%>
<%--                <li class="options_li">--%>
<%--                    <div class="options"></div>--%>
<%--                    <div class="options"></div>--%>
<%--                    <div class="options"></div>--%>
<%--                    <div class="options"></div>--%>
<%--                </li>--%>
<%--            </ul>--%>
            <ul class="filter_ul">
                <li class="filter_name">개봉년도</li>
                <li class="options_li">
                    <div class="options movie_date">2020</div>
                    <div class="options movie_date">2010</div>
                    <div class="options movie_date">2000</div>
                    <div class="options movie_date">~1999</div>
                    <div class="slider">
                        <input type="range" class="input_left" min="1" max="100" value="1" />
                        <input type="range" class="input_right" min="1" max="100" value="100" />
                        <div class="track">
                            <div class="selected_area"></div>
                            <div class="thumb left">
                                <div class="tmp_thumb_value"></div>
                            </div>
                            <div class="thumb right">
                                <div class="tmp_thumb_value"></div>
                            </div>
                        </div>
                    </div>
                </li>
                <div class="label_flip transparent"></div>
            </ul>
            <input type="checkbox" name="" class="checkbox_flip" id="checkbox_flip3">
<%--            <ul class="filter_ul hided_filter">--%>
<%--                <li class="filter_name"></li>--%>
<%--                <li class="options_li">--%>
<%--                </li>--%>
<%--                <div class="label_flip transparent"></div>--%>
<%--            </ul>--%>
        </div>
        <div class="filter_footer">
            <div class="result_options_init">검색 초기화
                <span style="font-size: 40px; padding-bottom: 12px;">⟲</span>
            </div>
            <div class="result_options_bar">
                <div class="result_options_tmp_phrase">취향에 따라 골라보세요!</div>
            </div>
        </div>
    </div>
    <div class="item_area">
        <div class="item_header">
            <div id="data">

            </div>
            <div>
                <div class="item_filter"></div>
                <div class="item_filter"></div>
                <div class="item_filter"></div>
                <div class="item_filter"></div>
            </div>
            <div class="item_list_tab_box">
                <div class="item_list_tab tab_thumbnail tab_on">
                    <div class="tab_thumbnail_teeth teeth_on"></div>
                    <div class="tab_thumbnail_teeth teeth_on"></div>
                    <div class="tab_thumbnail_teeth teeth_on"></div>
                    <div class="tab_thumbnail_teeth teeth_on"></div>
                    <div class="tab_thumbnail_teeth teeth_on"></div>
                    <div class="tab_thumbnail_teeth teeth_on"></div>
                </div>
                <div class="item_list_tab tab_detail">
                    <div class="tab_detail_teeth"></div>
                    <div class="tab_detail_teeth"></div>
                    <div class="tab_detail_teeth"></div>
                </div>
            </div>
        </div>
        <div class="item_list_thumbnail">

        </div>
        <div class="item_list_detail">

        </div>
    </div>
</div>
<%--<jsp:include page="footer.jsp" flush="false"/>--%>
<script>
</script>
</body>
</html>

<%--
  Created by IntelliJ IDEA.
  User: opre6
  Date: 2022-12-05
  Time: 오후 3:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>영화상세페이지</title>
  <script src="<c:url value='/js/jquery-1.12.4.js'/>"></script>
  <script defer src="<c:url value='/js/영화상세페이지.js'/>"></script>
  <script defer src="<c:url value='/js/header.js'/>"></script>
  <link rel="stylesheet" href="<c:url value='/css/common.css'/>">
  <link rel="stylesheet" href="<c:url value='/css/movieDetailPage.css'/>">
  <link rel="stylesheet" href="<c:url value='/css/h_f.css'/>">
</head>
<body>
<div id="wrap">
  <jsp:include page="header.jsp" flush="false"/>
  <div class="area">
    <div class="movie_box data_area">
      <div class="movie_thumbnail"><img src="${movie.movie_img}"></div>
      <div class="report_box">
        <div class="report_header">
          <div class="movie_title">${movie.movie_title}</div>
          <img src="<c:url value='/img/bookmark_off.png'/>" title="찜하기" class="bookmark" id="bookmark">
        </div>
        <div class="report_bo">
          <div class="rate_box">
            <div class="rate_star">★</div>
            <div class="rate">${movie.movie_rate}</div>
            <div class="rating_box">
              <div class="rating">
                <input class="star_radio" type="radio" id="star10" name="rating" value="10"/><label for="star10" class="star_rating full"></label>
                <input class="star_radio" type="radio" id="star9" name="rating" value="9"/><label for="star9" class="star_rating half"></label>
                <input class="star_radio" type="radio" id="star8" name="rating" value="8"/><label for="star8" class="star_rating full"></label>
                <input class="star_radio" type="radio" id="star7" name="rating" value="7"/><label for="star7" class="star_rating half"></label>
                <input class="star_radio" type="radio" id="star6" name="rating" value="6"/><label for="star6" class="star_rating full"></label>
                <input class="star_radio" type="radio" id="star5" name="rating" value="5"/><label for="star5" class="star_rating half"></label>
                <input class="star_radio" type="radio" id="star4" name="rating" value="4"/><label for="star4" class="star_rating full"></label>
                <input class="star_radio" type="radio" id="star3" name="rating" value="3"/><label for="star3" class="star_rating half"></label>
                <input class="star_radio" type="radio" id="star2" name="rating" value="2"/><label for="star2" class="star_rating full"></label>
                <input class="star_radio" type="radio" id="star1" name="rating" value="1"/><label for="star1" class="star_rating half"></label>
              </div>
              <div id="rating_value">평가해주세요</div>
            </div>
          </div>
          <table>
            <tbody class="movie_report">
            <tr id="movie_date">
              <th>개봉</th>
              <td>${movie.movie_date}</td>
            </tr>
            <tr id="movie_genre">
              <th>장르</th>
              <td>${movie.genre}</td>
            </tr>
            <tr id="movie_level">
              <th>등급</th>
              <td>${movie.movie_level}</td>
            </tr>
            <tr id="movie_nation">
              <th>국가</th>
              <td>${movie.nation}</td>
            </tr>
            <tr id="movie_runtime">
              <th>러닝타임</th>
              <td>${movie.movie_runtime}분</td>
            </tr>
            <tr id="movie_OTT">
              <th>OTT</th>
              <td>${movie.ott}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 탭 메뉴-->
    <div class="contents_box data_area">
      <input type="radio" name="con_rd" id="con_rd1" checked>
      <input type="radio" name="con_rd" id="con_rd2" >
      <div class="tab_box">
        <label for="con_rd1" class="tab con_rd1">영화정보</label>
        <label for="con_rd2" class="tab con_rd2">평가</label>
      </div>
      <div class="data_pg_1">
        <!---------- 영화줄거리 --------->
        <div class="plot_box">
          <p>영화 줄거리</p>
          <div class="movie_plot ">${movie.movie_plot}</div>
          <input type="button" class="btn_plot" value="더보기">
        </div>
        <!---------- 감독 출연진 --------->
        <div class="staff_box">
          <p>감독/출연진</p>
          <div class="director_box">
            <a href="<c:url value='/appearance?direct_idx=${direct.direct_idx}'/>">
              <div class="staff">
                <div class="staff_img"><img src="${direct.direct_img}"></div>
                <div class="staff_name">${direct.direct_name}</div>
                <div class="staff_level">감독</div>
              </div>
            </a>
          </div>
          <c:forEach var="actor" items="${actor}" begin="0" end="3" step="1">
            <a href="<c:url value='/appearance?actor_idx=${actor.actor_idx}'/>">
              <div class="actor_box">
                <div class="staff">
                  <div class="staff_img"><img src="${actor.actor_img}"></div>
                  <div class="staff_name">${actor.actor_name}</div>
                  <div class="staff_level">배우</div>
                </div>
              </div>
            </a>
          </c:forEach>
        </div>
        <!---------- 감독 출연진 더보기!--------->
        <div class="staff_box_full">
          <div class="director_box">
            <p>감독</p>
            <a href="<c:url value='/appearance?direct_idx=${direct.direct_idx}'/>">
              <div class="staff">
                <div class="staff_img"><img src="${direct.direct_img}"></div>
                <div class="staff_name">${direct.direct_name}</div>
                <div class="staff_level">감독</div>
              </div>
            </a>
          </div>
          <div class="actor_box">
            <p>출연진</p>
            <c:forEach var="actor" items="${actor}">
              <a href="<c:url value='/appearance?actor_idx=${actor.actor_idx}'/>">
                <div class="staff">
                  <div class="staff_img"><img src="${actor.actor_img}"></div>
                  <div class="staff_name">${actor.actor_name}</div>
                  <div class="staff_level">배우</div>
                </div>
              </a>
            </c:forEach>
          </div>
        </div>
        <input type="button" class="btn_staff" id="btn_staff" value="더보기">
        <p class="similar_movie_h">비슷한 영화</p>
        <div class="similar_movie_box">
          <c:forEach var="movielist" items="${movielist}" begin="0" end="9" step="1">
            <c:if test="${movielist.movie_idx != movie.movie_idx}">
              <div class="similar_movie">
                <a href="<c:url value='/movie/detail?movie_idx=${movielist.movie_idx}'/>">
                  <div class="s_movie_thumbnail">
                    <img src="${movielist.movie_img}">
                  </div>
                  <div class="s_movie_title">${movielist.movie_title}</div>
                </a>
              </div>
            </c:if>
          </c:forEach>
        </div>
      </div>
      <div class="data_pg_2">
        <div class="my_commnet">
          <h2 id="cm_btn">코멘트 작성하기</h2>
        </div>
        <p class="comment_title">코멘트</p>
        <div class="comment_list">
          <c:forEach var="cmt" items="${cmt}">
            <c:choose>
              <c:when test="${cmt.review_text eq null}"></c:when>
              <c:otherwise>
            <div class="comment_box">
              <div class="comment_header">
                <a href="#"><!--유저 상세페이지로 넘어가기-->
                  <div class="com_header_name">${cmt.user_name}</div>
                  <div class="com_header_rate">★
                    <img src="" alt="">
                    <span>${cmt.review_rate}</span>
                  </div>
                </a>
              </div>
              <a href="#">
                <div class="comment_txt">${cmt.review_text}</div>
              </a>
              <div class="comment_ft">
                <img src="<c:url value='/img/good_icon_1.png'/>" class="comm_icon">
                <div class="comm_num"></div>
              </div>
              <div class="comment_com"></div>
            </div>
              </c:otherwise>
            </c:choose>
          </c:forEach>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="cm_modal" class="cm_overlay">
  <form action="<c:url value="/movie/addReview" />" method="POST">
    <input type="hidden" name="movie_idx" value="${movie.movie_idx}">
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
            <img src="<c:url value='/img/mute_off.png'/>" alt="">
          </div>
          <button class="makeCmt_btn">작성하기</button>
        </div>
      </div>
    </div>
  </form>
</div>
<%--<jsp:include page="cmtModal.jsp" flush="false"/>--%>

<script>
  $(document).ready(function(){
    bookmark();
    myRating();
  });

  <%--function tapChk(){--%>
  <%--  let chk = ${chk.chk};--%>
  <%--  if(chk == 1){--%>
  <%--    $(":radio[id='con_rd2']").attr('checked', true);--%>
  <%--  }else {--%>
  <%--    $(":radio[id='con_rd1']").attr('checked', true);--%>
  <%--  }--%>
  <%--}--%>

  <%--$(".con_rd2").click(function (){--%>
  <%--  let InputReview ="";--%>
  <%--  let tmp = {"movie_idx":${movie.movie_idx}};--%>
  <%--  $.ajax({--%>
  <%--    type:'POST',--%>
  <%--    url:'/Filmap/movie/review',--%>
  <%--    headers : { "content-type": "application/json" },--%>
  <%--    contentType:'application/json; charset=utf-8',--%>
  <%--    data : JSON.stringify(tmp),--%>
  <%--    dataType: 'json',--%>
  <%--    success : function(data){--%>
  <%--      alert("리뷰성공"+data)--%>
  <%--      console.log(data)--%>
  <%--      for(let i=0; i < data.length; i++ ){--%>
  <%--        InputReview += `<div class="comment_box">--%>
  <%--                          <div class="comment_header">--%>
  <%--                          <a href="#"><!--유저 상세페이지로 넘어가기-->--%>
  <%--                             <div class="com_header_name"> ${data[i].user_name}</div>--%>
  <%--                             <div class="com_header_rate">★--%>
  <%--                             <img src="" alt="">--%>
  <%--                            <span>${data[i].review_rate}</span>--%>
  <%--                            </div>--%>
  <%--                            </a>--%>
  <%--                          </div>--%>
  <%--                          <a href="#">--%>
  <%--                            <div class="comment_txt">${data[i].review_text}</div>--%>
  <%--                          </a>--%>
  <%--                          <div class="comment_ft">--%>
  <%--                            <img src="comm_icon_1.png" class="comm_icon">--%>
  <%--                            <div class="comm_num"></div>--%>
  <%--                          </div>--%>
  <%--                          <div class="comment_com"></div>--%>
  <%--                        </div>--%>
  <%--                        `;--%>
  <%--        $(".comment_list").html(InputReview);--%>
  <%--      }--%>
  <%--    },--%>
  <%--    error:function (request,error){--%>
  <%--      alert("리뷰 실패 : " +request.responseText)--%>
  <%--    }--%>
  <%--  })--%>
  <%--})--%>


  /* 별점 평가하기 */
  let star = document.querySelectorAll('.star_radio');
  let showValue = document.querySelector('#rating_value');
  let movie_idx = ${movie.movie_idx};
  let review_rate = ${myRating.review_rate};
  console.log("myRating:"+ review_rate);

  //별점 값 보여주기
  for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function() {
      i = this.value;
      showValue.innerHTML = i ;
    });
  }
  // 로그인시 나의영화 점수 뿌리기
  function myRating(){
    let myRating = ${myRating.review_rate}
    if(myRating == 0) {
      myRating = "평가해주세요"
    }
    $(":radio[name='rating'][value='${myRating.review_rate}']").attr('checked', true);
    document.getElementById('rating_value').innerHTML=myRating;
  }

  // 별 클릭시 점수 적용시키기
  $(".star_radio").click(function (){
    let rating = this.value;
    let person = {"review_rate":rating, "movie_idx":movie_idx};
    console.log("그냥 rating : "+ rating)
    if(review_rate == null){
     // alert("로그인 안함")
    }

    // else if (review_rate == rating){   //나중에 추가* (똑같은 점수 누를시 삭제)
    //   $.ajax({
    //     type:'POST',
    //     url:'/Filmap/movie/deleterate',
    //     dataType: 'json',
    //     data : JSON.stringify(person),
    //     headers : { "content-type": "application/json" },
    //     contentType:'application/json; charset=utf-8',
    //     success : function(){
    //       alert("별점 삭제 성공")
    //       myRating()
    //     },
    //     error:function (request,error){
    //       alert("별점 삭제 실패 : " +request.responseText)
    //     }
    //   })
    // }
    else {
      $.ajax({
        type:'POST',
        url:'/Filmap/movie/addrate',
        dataType: 'json',
        data : JSON.stringify(person),
        headers : { "content-type": "application/json" },
        contentType:'application/json; charset=utf-8',
        success : function(){
          // alert("별점 성공")
          rating = this.value
          console.log("성공 rating : "+ rating)
        },
        error:function (request,error){
          // alert("별점 실패 : " +request.responseText)
        }
      })
    }


  })


  /* 북마크(찜하기) */
  let bookmarkChk = ${markChk.bookmark};
  let btn_bookmark = document.getElementById('bookmark');

  function bookmark() {
    if (bookmarkChk == 0 || null) {
      btn_bookmark.src = "<c:url value='/img/bookmark_off.png'/>";
    } else if (bookmarkChk == 1) {
      btn_bookmark.src = "<c:url value='/img/bookmark_on.png'/>";
    }
  }


  $("#bookmark").click(function(){
    console.log("bookmarkChk: " +bookmarkChk)
    if(bookmarkChk == null){
      // alert("...");
    }else if(bookmarkChk == 0){
      // alert("찜하기")
      $.ajax({
        type:'POST',
        url:'/Filmap/movie/like?movie_idx='+${movie.movie_idx},
        dataType: 'json',
        data : JSON.stringify({movie_idx:${movie.movie_idx}}),
        headers : { "content-type": "application/json" },
        success : function(){
          // alert("찜하기 성공")
          // bookmark()
          btn_bookmark.src="<c:url value='/img/bookmark_on.png'/>"
          bookmarkChk=1
        },
        error:function (){
          // alert("찜하기 실패 ")
        }
      })
    }else if(bookmarkChk >= 1){
      // alert("찜하기 취소")
      $.ajax({
        type:'POST',
        url:'/Filmap/movie/deletelike?movie_idx='+${movie.movie_idx},
        dataType: 'json',
        data : JSON.stringify({movie_idx:${movie.movie_idx}}),
        headers : { "content-type": "application/json" },
        success : function(){
          // alert("찜하기취소 성공")
          // bookmark()
          btn_bookmark.src="<c:url value='/img/bookmark_off.png'/>"
          bookmarkChk=0
        },
        error:function (){
          // alert("찜하기취소 실패 ")
        }
      })
    }
  });
  /* 영화 줄거리 더보기 버튼*/
  let btn_plot_chk = 0;
  let btn_plot = document.getElementsByClassName("btn_plot")[0];
  btn_plot.addEventListener("click", plot_full);
  function plot_full() {
    let btn_plot =  document.getElementsByClassName('btn_plot')[0];
    let plot_full = document.getElementsByClassName('movie_plot')[0];
    if(btn_plot_chk == 0){
      plot_full.classList.add("movie_plot_full");
      btn_plot.value="접기"
      btn_plot_chk=1;
    }else if(btn_plot_chk == 1){
      console.log(btn_plot.style.innerText)
      plot_full.classList.remove("movie_plot_full");
      btn_plot.value="더보기"
      btn_plot_chk=0;
    }
  }
  /*감독 출연진 더보기 버튼*/
  let btn_staff_chk = 0;
  let btn_staff =document.getElementById('btn_staff');
  btn_staff.addEventListener('click', staff_full);


  function staff_full() {
    let staff_box_full = document.getElementsByClassName('staff_box_full')[0];
    let staff_box = document.getElementsByClassName('staff_box')[0];
    if(btn_staff_chk == 0){
      staff_box_full.style.display="block";
      staff_box.style.display="none";
      btn_staff.value="접기"
      btn_staff_chk = 1;

      // actor_full(actor_list);
    }else if(btn_staff_chk == 1){
      staff_box_full.style.display="none";
      staff_box.style.display="block";
      btn_staff.value="더보기"
      btn_staff_chk = 0;

      // actor_full(4);
      console.log(actor_list);
    }

  }
  // modal창 켜기
  // let cm_modal = document.getElementById("cm_modal")
  // let cm_modalBtn = document.getElementById("cm_btn")
  // let cm_close = cm_modal.querySelector(".cm_close")
  // cm_close.addEventListener("click", function() {
  //   console.log("닫기")
  //   cm_modal.style.display = "none"
  // })
  // $('#cm_btn').click(function (){
  //   console.log("리뷰작성테스트")
  //   cm_modal.style.display = "flex"
  // })

</script>
</body>
</html>

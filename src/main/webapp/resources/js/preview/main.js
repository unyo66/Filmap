$(document).ready(function () {
  let rs_item = ITEM_LIST[0];

  let title_arr = []; // 제목
  let dir_act_arr = []; // 감독 + 배우
  let summary_arr = []; // 줄거리

  for (let i = 0; i < rs_item.length; i++) {
    if (rs_item[i].title.length > 20) {
      title_arr.push(repla(rs_item[i].title.substring(0, 20)));
    } else {
      title_arr.push(repla(rs_item[i].title));
    }

    // ---------------------------------------------------- 제목
    let dir_act_temp = `감독 : ${rs_item[i].director} &nbsp&nbsp|&nbsp&nbsp ${rs_item[i].actor}`;
    if (dir_act_temp.length > 60) {
      dir_act_arr.push(repla(dir_act_temp.substring(0, 60)));
    } else {
      dir_act_arr.push(repla(dir_act_temp));
    }

    // ---------------------------------------------------- 감독, 배우
    summary_arr.push(repla(rs_item[i].summary));

    // ---------------------------------------------------- 줄거리
  }
  // 너무 길면 글자 자르고 뒤에 ...붙이기

  function repla(str) {
    let len = str.length; //str의 길이
    let temp = str.substring(len - 1, len); // ','판별
    if (temp == ",") {
      return str.substring(0, len - 1) + "...";
    } else {
      if (str.length > 180) {
        // 줄거리 길이 판정
        return str.substring(0, 180) + "...";
      } else {
        return str;
      }
    } // ", " 제거
  }

  for (let i = 0; i < rs_item.length; i++) {
    let list = `<li class="preview_frame">
    <div class = "preview_video" id = "video_idx_${i}"></div>
    <div class="preview_info_main">
    <img src="/Filmap/img/preview/silent.png" class="vol_btn" id ="vol_idx_${i}"/>
    <a href="/Filmap/movie/detail?movie_idx=${rs_item[i].idx}">
    <img src="${rs_item[i].post}" class="preview_movie_poster" id = "poster_idx_${i}" />
    <div class="preview_movie_info">
    <div class="preview_movie_info_title" style="font-size: 25px">${title_arr[i]}</div>
    <div class="preview_movie_info_title" style="font-size: 18px">${dir_act_arr[i]} </div>
    <div style = "font-size : 18px">${summary_arr[i]}</div>
    </div>
    </a>
    <img src="/Filmap/img/preview/bookmark_off.png" class="preview_movie_like" id = "dibs_idx_${i}" />
    </div>
    </li>`;
    $("#list_ul").append(list);
  }
  // ------------------------------------------------------ 리스트 생성
  const dibs_btn = document.querySelectorAll("[id^=dibs_idx_]");
  const poster_img = document.querySelectorAll("[id^=poster_idx_]");

  for (let i = 0; i < rs_item.length; i++) {
    // dibs_arr.push(Math.floor(Math.random() * 5));
    // dibs_arr[0] = 1;
    //확률을 위해 0~5 6개로 설정
    if (dibs_arr[i] == "0") {
      document
          .getElementById("dibs_idx_" + [i])
          .setAttribute("src", "/Filmap/img/preview/bookmark_off.png");
    } else {
      document
          .getElementById("dibs_idx_" + [i])
          .setAttribute("src", "/Filmap/img/preview/bookmark_on.png");
    }
    //-------------------------------------------------
  }
  // 찜은 초기에 DB에서 찜 여부를 (0, 1)값을 가져와 이미지를 설정함
  // 포스터

  let dibs_count = dibs_arr; // 찜 배열 복사

  for (i = 0; i < rs_item.length; i++) {
    dibs_btn[i].setAttribute("i", i);
    dibs_btn[i].onclick = function () {

      num = this.getAttribute("i");
      if (dibs_count[num] == "0") {
        $.ajax({
          type:'POST',
          url:`/Filmap/movie/like?movie_idx=${rs_item[num].idx}`,
          dataType: 'json',
          data : JSON.stringify({movie_idx:`${rs_item[num].idx}`}),
          headers : { "content-type": "application/json" },
          success : function(){
            console.log("찜하기 성공")
          },
          error:function (){
            // alert("찜하기 실패 ")
          }
        })
        dibs_count[num] = 1;
        document
            .getElementById("dibs_idx_" + [num])
            .setAttribute("src", "/Filmap/img/preview/bookmark_on.png");
        dibs_alert(dibs_count[num], rs_item[num].title);
      } else {
        dibs_count[num] = 0;
        $.ajax({
          type:'POST',
          url:`/Filmap/movie/deletelike?movie_idx=${rs_item[num].idx}`,
          dataType: 'json',
          data : JSON.stringify({movie_idx:`${rs_item[num].idx}`}),
          headers : { "content-type": "application/json" },
          success : function(){
            // alert("찜하기취소 성공")
          },
          error:function (){
            // alert("찜하기취소 실패 ")
          }
        })
        document
            .getElementById("dibs_idx_" + [num])
            .setAttribute("src", "/Filmap/img/preview/bookmark_off.png");
        dibs_alert(dibs_count[num], rs_item[num].title);
      }
    };
  } // 이미지 변경을 위한 스위치

  function dibs_alert(num, title) {
    if (num == 0) {
      setTimeout(function () {
        // alert(title + " 찜에서 제거");
      }, 100); // 시간을 주어 아이콘 변경 후 알림이 뜨게함*/
    } else {
      setTimeout(function () {
        // alert(title + " 찜에 추가");
      }, 100);
    }
  } // 추후에 여기에 찜 테이블 DB 연동

  // ---------------------------------------------- 찜 버튼
  let youtube_play = []; // 재생
  let youtube_pause = []; // 정지
  let player = []; // 플레이 정보
  let youtube_link = []; // div에 영상을 담음
  //youtube api 배열

  for (let i = 0; i < rs_item.length; i++) {
    youtube_link.push(function youtube() {
      window.YT.ready(function () {
        if (i == 0) {
          player[i] = new window.YT.Player("video_idx_" + i, {
            videoId: rs_item[i].link,
            playerVars: {
              cc_load_policy: 1, // 자막 x
              controls: 0, // 컨트롤 표시 x
              disablekb: 1, // 키보드 사용 x
              playlist: rs_item[i].link, // loop를 위해서는 비디오 id가 필요함
              loop: 1, // 반복 o
              mute: 1,
              autoplay: 1,
            },
          });
        } else {
          player[i] = new window.YT.Player("video_idx_" + i, {
            videoId: rs_item[i].link,
            playerVars: {
              cc_load_policy: 1, // 자막 x
              controls: 0, // 컨트롤 표시 x
              disablekb: 1, // 키보드 사용 x
              playlist: rs_item[i].link, // loop를 위해서는 비디오 id가 필요함
              loop: 1, // 반복 o
              mute: 1,
              autoplay: 0,
            },
          });
        }
      });
    });
    // ----------------------------- 플레이 정보
    youtube_play.push(function play() {
      player[i].playVideo();
    });

    //------------------------- 재생
    youtube_pause.push(function pause() {
      player[i].pauseVideo();
    });

    //------------------------- 정지
    youtube_link[i](); // 메서드 실행
  }
  // 첫 영상만 자동생을 위해 autoplay 1이고 그 후로는 0으로 들어감

  const sound_btn = document.querySelectorAll("[id^=vol_idx_]");
  const silent_icon = "/Filmap/img/preview/silent.png";
  const volume_icon = "/Filmap/img/preview/volume.png";
  let mute_count = 0;

  for (i = 0; i < sound_btn.length; i++) {
    sound_btn[i].setAttribute("i", i);
    sound_btn[i].onclick = function () {
      mute_swith();
    };
  }

  function mute_swith() {
    if (mute_count == 0) {
      mute_count++;
      for (i = 0; i < sound_btn.length; i++) {
        if (player[i].isMuted() == true) {
          player[i].unMute();
        }
        document
            .getElementById("vol_idx_" + [i])
            .setAttribute("src", "/Filmap/img/preview/volume.png");
      }
    } else {
      mute_count--;
      for (i = 0; i < sound_btn.length; i++) {
        if (player[i].isMuted() == false) {
          player[i].mute();
        }
        document
            .getElementById("vol_idx_" + [i])
            .setAttribute("src", "/Filmap/img/preview/silent.png");
      }
    }
  } // 각 영상에 소리 on/off 기능 할당

  // ---------------------------------------------- 유튜브 api
  var imgs;
  var img_count;
  var img_position = 1;

  imgs = $(".preview_main ul");
  img_count = imgs.children().length;

  $("#up").click(function () {
    up();
  });

  $("#down").click(function () {
    down();
  });
  // 버튼 up, down

  let play_count = 0; // 스크롤 재생/정지를 위한 카운트

  $("body").on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
    var sHeight = $(document).scrollTop();

    if (wheel > 0) {
      if (sHeight < 120) {
        up();
      }
    } else {
      if (sHeight >= 0) {
        down();
      }
    }
  });
  // 스크롤 up, down
  let scroll_count = 0; // 스크롤 잠깐 off를 위한 카운트
  $("body").on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
    var sHeight = $(document).scrollTop();

    if (wheel > 0) {
      if (sHeight < 120) {
        up();
      }
    } else {
      if (sHeight >= 0) {
        down();
      }
    }
  });

  function timer() {
    setTimeout(() => {
      scroll_count = 0;
    }, 500);
  }

  function up() {
    if (scroll_count == 0) {
      if (1 < img_position) {
        scroll_count++;
        timer();
        imgs.animate({
          top: "+=780px",
        });
        img_position--;
        //-------------------
        if (play_count < 1) {
          play_count = 0;
        } else {
          play_count--;
        }
        youtube_play[play_count]();
        youtube_pause[play_count + 1]();
      }
    }
  }

  function down() {
    if (scroll_count == 0) {
      if (img_count > img_position) {
        scroll_count++;
        timer();
        imgs.animate({
          top: "-=780px",
        });
        img_position++;
        //-------------------
        play_count++;
        youtube_play[play_count]();
        youtube_pause[play_count - 1]();
      }
    }
  }
  // function up() {
  //   if (1 < img_position) {
  //     imgs.animate({
  //       top: "+=780px",
  //     });
  //     img_position--;
  //     //-------------------
  //     if (play_count < 1) {
  //       play_count = 0;
  //     } else {
  //       play_count--;
  //     }
  //     youtube_play[play_count]();
  //     youtube_pause[play_count + 1]();
  //   }
  // }
  //
  // function down() {
  //   if (img_count > img_position) {
  //     imgs.animate({
  //       top: "-=780px",
  //     });
  //     img_position++;
  //     //-------------------
  //     play_count++;
  //     youtube_play[play_count]();
  //     youtube_pause[play_count - 1]();
  //   }
  // }
});

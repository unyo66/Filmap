let resultList;
$.ajax({
    type:'POST',       // 요청 메서드
    url: '/Filmap/sendMain',  // 요청 URI
    headers : { "content-type": "application/json"}, // 요청 헤더
    dataType : 'text', // 전송받을 데이터의 타입
    // post 방식으로 url에 명시된 주소(/board/send)로 전송.
    success : function(result){
        ///////////전송받은 데이터 처리 영역////////////
        resultList = JSON.parse(result);
        /////////////////////////////////////////
        for (let i = 0; i < 15; i++) {
            $(".main_slide_li2").eq(i).text(`${resultList.main[i].movie_title}`);
            $(".net_slide_li2").eq(i).text(`${resultList.netflix[i].movie_title}`);
            $(".wavve_slide_li2").eq(i).text(`${resultList.wavve[i].movie_title}`);
            $(".watcha_slide_li2").eq(i).text(`${resultList.watcha[i].movie_title}`);
            $(".tving_slide_li2").eq(i).text(`${resultList.tving[i].movie_title}`);
            $(".disney_slide_li2").eq(i).text(`${resultList.disney[i].movie_title}`);
            $(".m_img").eq(i).attr("src",`${resultList.main[i].movie_img}`);
            $(".n_img").eq(i).attr("src",`${resultList.netflix[i].movie_img}`);
            $(".wv_img").eq(i).attr("src",`${resultList.wavve[i].movie_img}`);
            $(".wc_img").eq(i).attr("src",`${resultList.watcha[i].movie_img}`);
            $(".tv_img").eq(i).attr("src",`${resultList.tving[i].movie_img}`);
            $(".d_img").eq(i).attr("src",`${resultList.disney[i].movie_img}`);

            $(".m_img").eq(i).click(function (){
                window.location.href = `movie/detail?movie_idx=${resultList.main[i].movie_idx}`;
            }).css({cursor: "pointer"});
            $(".n_img").eq(i).click(function (){
                window.location.href = `movie/detail?movie_idx=${resultList.netflix[i].movie_idx}`;
            }).css({cursor: "pointer"});
            $(".wv_img").eq(i).click(function (){
                window.location.href = `movie/detail?movie_idx=${resultList.wavve[i].movie_idx}`;
            }).css({cursor: "pointer"});
            $(".wc_img").eq(i).click(function (){
                window.location.href = `movie/detail?movie_idx=${resultList.watcha[i].movie_idx}`;
            }).css({cursor: "pointer"});
            $(".tv_img").eq(i).click(function (){
                window.location.href = `movie/detail?movie_idx=${resultList.tving[i].movie_idx}`;
            }).css({cursor: "pointer"});
            $(".d_img").eq(i).click(function (){
                window.location.href = `movie/detail?movie_idx=${resultList.disney[i].movie_idx}`;
            }).css({cursor: "pointer"});
        }
    },
    error   : function(){
        // alert("error")
    } // 에러가 발생했을 때, 호출될 함수
}); // $.ajax()
    let el_wrap = document.getElementById("wrap");
    el_wrap.style.cssText = "background: rgb(33, 33, 33);width: 100%; height: 3700px;  position: absolute; top: -150px";
    // -----------------------------------wrap

    // -------------------------------------head
    let el_video_fix = document.createElement("div");
    el_video_fix.classList.add("video_fix");
    el_video_fix.style.cssText = "width: 100%; height:700px; background: gainsboro; pointer-events: none; overflow: hidden;";
    document.getElementById('wrap').appendChild(el_video_fix);

    let el_video_box = document.createElement("div");
    // el_video_box.classList.add("video_box");
    el_video_box.setAttribute('id', 'player');
    el_video_box.style.cssText = "width: 100%; height: 1000px;";
    document.getElementsByClassName("video_fix")[0].appendChild(el_video_box);
    // -----------------------------------video// -----------------------------------video// -----------------------------------video// -----------------------------------video
    let el_mute_button = document.createElement("div");
    el_mute_button.classList.add("mute_button");
    el_mute_button.style.cssText = "width: 48px; height: 45px; border-radius: 50%; position: absolute; z-index: 9; top: 540px; left: 160px;"
    document.getElementById("wrap").append(el_mute_button);


    let el_mute_img1 = document.createElement("button");
    el_mute_img1.classList.add("mute_img1");
    el_mute_img1.style.cssText = "position: absolute; width: 100%; height: 100%; background: url(./img/silent.png)no-repeat center / contain; border: 0; outline: 0; display: block; "
    document.getElementsByClassName("mute_button")[0].appendChild(el_mute_img1);

    let el_mute_img2 = document.createElement("button");
    el_mute_img2.classList.add("mute_img2");
    el_mute_img2.style.cssText = "position: absolute; width: 100%; height: 100%; background: url(./img/volume.png)no-repeat center / contain; border: 0; outline: 0; display: none;";
    document.getElementsByClassName("mute_button")[0].appendChild(el_mute_img2);

    // -----------------------------------mute_box
    let el_main = document.createElement("div");
    el_main.classList.add("main")
    el_main.style.cssText = "width: 100%; max-width: 1100px; height: 3300px; position: absolute; top: 2100px; left: 50%; transform: translate(-50%,-50%); z-index: 8; overflow: hidden"
    //
    document.getElementById('wrap').appendChild(el_main);
    // -----------------------------------main
    let el_txt_box = document.createElement("div");
    el_txt_box.classList.add("txt_box");
    el_txt_box.style.cssText = "width: 500px; top: 0; left: 0px; color: white; margin-bottom: 10px;"
    document.getElementsByClassName("main")[0].appendChild(el_txt_box);
    // 500*80 , 161.9
    let el_preview_title = document.createElement("h2");
    el_preview_title.classList.add("preview_title");
    el_preview_title.style.cssText = "width: 100%;  font-weight: 900; font-size: 40px; margin-left:15px;";
    el_preview_title.innerText = "영상제목";
    document.getElementsByClassName("txt_box")[0].appendChild(el_preview_title);

    let el_preview_content = document.createElement("div");
    el_preview_content.classList.add("preview_content");
    el_preview_content.style.cssText = "width: 100%; height: 50px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; margin-left:15px;"
    // el_preview_content.innerText = "가까운 미래, 지구는 에너지 고갈문제를 해결하기 위해 머나먼 행성 판도라에서 대체 자원을 채굴하기 시작한다.하지만 판도라의 독성을 지닌 대기로 인해 자원 획득에 어려움을 겪게 된 인류는판도라의 토착민 나비족(Na'vi)의 외형에 인간의 의식을 주입, 원격 조종이 가능한새로운 생명체 ‘아바타’를 탄생시키는 프로그램을 개발한다."
    document.getElementsByClassName("txt_box")[0].appendChild(el_preview_content);
    // 줄거리 DB
    let el_lank = document.createElement("div");
    el_lank.classList.add("lank");
    el_lank.style.cssText = "width: 80px; height: 30px; background-color: white; color: black; line-height: 30px; padding: 0 15px; border-radius: 10px; text-align: center; font-size: 20px; margin-left: 15px;"
    el_lank.innerText = "RANK"
    document.getElementsByClassName("txt_box")[0].appendChild(el_lank);
    // -----------------------------------txt-box
    let el_main_slide = document.createElement("div");
    el_main_slide.classList.add("main_slide");
    el_main_slide.style.cssText = "width: 3300px; height: 350px; position: relative; display: flex;"
    document.getElementsByClassName("main")[0].appendChild(el_main_slide);

    for (let r = 0; r < 3; r++) {
    let el_main_slide_box = document.createElement("div");
    el_main_slide_box.setAttribute('class', 'main_slide_box' + r);
    el_main_slide_box.setAttribute('id', 'slide_box')
    el_main_slide_box.classList.add('m_banner');
    el_main_slide_box.style.cssText = "width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; "
    document.getElementsByClassName("main_slide")[0].appendChild(el_main_slide_box);
}
    let slide_left1 = document.getElementsByClassName('main_slide_box1')[0];
    slide_left1.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    let slide_left2 = document.getElementsByClassName('main_slide_box2')[0];
    slide_left2.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    // -------------m slide 3 box
    for (let i = 0; i < 5; i++) {
    let el_main_slide_ul = document.createElement("ul");
    el_main_slide_ul.setAttribute('class', 'main_slide_ul1');
    el_main_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('main_slide_box0')[0].appendChild(el_main_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_main_slide_ul = document.createElement("ul");
    el_main_slide_ul.setAttribute('class', 'main_slide_ul2');
    el_main_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('main_slide_box1')[0].appendChild(el_main_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_main_slide_ul = document.createElement("ul");
    el_main_slide_ul.setAttribute('class', 'main_slide_ul3');
    el_main_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('main_slide_box2')[0].appendChild(el_main_slide_ul);
}
    // -------------m slide ul
    for (let j = 0; j < 5; j++) {
    let el_main_slide_li1 = document.createElement("li");
    el_main_slide_li1.classList.add("main_slide_li1");
    el_main_slide_li1.setAttribute('id', 'm_slide_li'+j);
    el_main_slide_li1.classList.add("mama0"+j)
    el_main_slide_li1.style.cssText = "width: 200px; height: 300px; box-shadow: 0 0 4px 1px black; overflow: hidden;"
    // 포스터 디비
    let el_main_slide_li2 = document.createElement("li");
    el_main_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_main_slide_li2.classList.add("main_slide_li2");
    el_main_slide_li2.setAttribute('id', 'slide_l2');
    // el_main_slide_li2.innerText = `${resultList.main[j].movie_title}`;
    // 제목디비
    el_main_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("main_slide_ul1")[j].append(el_main_slide_li1, el_main_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_main_slide_li1 = document.createElement("li");
    el_main_slide_li1.classList.add("main_slide_li1");
    el_main_slide_li1.setAttribute('id', 'm_slide_li'+j);
    el_main_slide_li1.classList.add("mama1"+j)
    el_main_slide_li1.style.cssText = "width: 200px; height: 300px; box-shadow: 0 0 4px 1px black; overflow: hidden;"
    // 포스터 디비
    let el_main_slide_li2 = document.createElement("li");
    el_main_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_main_slide_li2.classList.add("main_slide_li2");
    el_main_slide_li2.setAttribute('id', 'slide_l2');
    // el_main_slide_li2.innerText = "d";
    // 제목디비
    el_main_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("main_slide_ul2")[j].append(el_main_slide_li1, el_main_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_main_slide_li1 = document.createElement("li");
    el_main_slide_li1.classList.add("main_slide_li1");
    el_main_slide_li1.setAttribute('id', 'm_slide_li'+j);
    el_main_slide_li1.classList.add("mama2"+j)
    el_main_slide_li1.style.cssText = "width: 200px; height: 300px; box-shadow: 0 0 4px 1px black; overflow: hidden;"
    // 포스터 디비
    let el_main_slide_li2 = document.createElement("li");
    el_main_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_main_slide_li2.classList.add("main_slide_li2");
    el_main_slide_li2.setAttribute('id', 'slide_l2');
    // el_main_slide_li2.innerText = "d";
    // 제목디비
    el_main_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("main_slide_ul3")[j].append(el_main_slide_li1, el_main_slide_li2);
}
    for(let i = 0; i < 5; i++) {
    let m_img_li = document.createElement('img');
    m_img_li.setAttribute('src', '');
    m_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    m_img_li.classList.add('class', 'm_img');
    document.getElementById('m_slide_li'+i).append(m_img_li);
    document.getElementsByClassName('mama0'+i)[0].append(m_img_li);
}
    for(let i = 0; i < 5; i++) {
    let m_img_li = document.createElement('img');
    m_img_li.setAttribute('src', '');
    m_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover;';
    m_img_li.classList.add('class', 'm_img');
    document.getElementById('m_slide_li'+i).append(m_img_li);
    document.getElementsByClassName('mama1'+i)[0].append(m_img_li);
}
    for(let i = 0; i < 5; i++) {
    let m_img_li = document.createElement('img');
    m_img_li.setAttribute('src', '');
    m_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    m_img_li.classList.add('class', 'm_img');
    document.getElementById('m_slide_li'+i).append(m_img_li);
    document.getElementsByClassName('mama2'+i)[0].append(m_img_li);
}
    // --------------m slide li
    // -----------------------------------main_slide
    let el_net_title = document.createElement("div");
    el_net_title.classList.add("net_title");
    el_net_title.style.cssText = " width: 220px; height: 60px; background: url(./img/ico_movie_220818.png); background-position: -3% 51%; margin-top:100px";
    document.getElementsByClassName("main")[0].appendChild(el_net_title);

    let el_net_slide = document.createElement("div");
    el_net_slide.classList.add("net_slide");
    el_net_slide.style.cssText = "width: 3300px; height: 350px; position: relative; display: flex;";
    document.getElementsByClassName("main")[0].appendChild(el_net_slide);

    for (let r = 0; r < 3; r++) {
    let el_net_slide_box = document.createElement("div");
    el_net_slide_box.setAttribute('class', 'net_slide_box' + r);
    el_net_slide_box.setAttribute('id', 'slide_box')
    el_net_slide_box.classList.add('n_banner');
    el_net_slide_box.style.cssText = "width: 1100px; height: 100%;position: absolute; display: flex; justify-content: space-evenly; "
    document.getElementsByClassName("net_slide")[0].appendChild(el_net_slide_box);
}
    let n_slide_left1 = document.getElementsByClassName('net_slide_box1')[0];
    n_slide_left1.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    let n_slide_left2 = document.getElementsByClassName('net_slide_box2')[0];
    n_slide_left2.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    // -------------n slide 3 box---------
    for (let i = 0; i < 5; i++) {
    let el_net_slide_ul = document.createElement("ul");
    el_net_slide_ul.setAttribute('class', 'net_slide_ul1');
    el_net_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('net_slide_box0')[0].appendChild(el_net_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_net_slide_ul = document.createElement("ul");
    el_net_slide_ul.setAttribute('class', 'net_slide_ul2');
    el_net_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('net_slide_box1')[0].appendChild(el_net_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_net_slide_ul = document.createElement("ul");
    el_net_slide_ul.setAttribute('class', 'net_slide_ul3');
    el_net_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('net_slide_box2')[0].appendChild(el_net_slide_ul);
}
    // -------------n slide ul
    for (let j = 0; j < 5; j++) {
    let el_net_slide_li1 = document.createElement("li");
    el_net_slide_li1.classList.add("net_slide_li1");
    el_net_slide_li1.setAttribute('id', 'n_slide_li'+j);
    el_net_slide_li1.classList.add('nene0'+j)
    el_net_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_net_slide_li2 = document.createElement("li");
    el_net_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_net_slide_li2.classList.add("net_slide_li2");
    el_net_slide_li2.setAttribute('id', 'slide_l2');
    el_net_slide_li2.innerText = "영화제목";
    // 제목디비
    el_net_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("net_slide_ul1")[j].append(el_net_slide_li1, el_net_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_net_slide_li1 = document.createElement("li");
    el_net_slide_li1.classList.add("net_slide_li1");
    el_net_slide_li1.setAttribute('id', 'n_slide_li'+j);
    el_net_slide_li1.classList.add('nene1'+j)
    el_net_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_net_slide_li2 = document.createElement("li");
    el_net_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_net_slide_li2.classList.add("net_slide_li2");
    el_net_slide_li2.setAttribute('id', 'slide_l2');
    el_net_slide_li2.innerText = "영화제목";
    // 제목디비
    el_net_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("net_slide_ul2")[j].append(el_net_slide_li1, el_net_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_net_slide_li1 = document.createElement("li");
    el_net_slide_li1.classList.add("net_slide_li1");
    el_net_slide_li1.setAttribute('id', 'n_slide_li'+j);
    el_net_slide_li1.classList.add('nene2'+j)
    el_net_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_net_slide_li2 = document.createElement("li");
    el_net_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_net_slide_li2.classList.add("net_slide_li2");
    el_net_slide_li2.setAttribute('id', 'slide_l2');
    el_net_slide_li2.innerText = "영화제목";
    // 제목디비
    el_net_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("net_slide_ul3")[j].append(el_net_slide_li1, el_net_slide_li2);
}
    for(let i = 0; i < 5; i++) {
    let n_img_li = document.createElement('img');
    n_img_li.setAttribute('src', '');
    n_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    n_img_li.classList.add('class', 'n_img');
    document.getElementById('n_slide_li'+i).append(n_img_li);
    document.getElementsByClassName('nene0'+i)[0].append(n_img_li);
}
    for(let i = 0; i < 5; i++) {
    let n_img_li = document.createElement('img');
    n_img_li.setAttribute('src', '');
    n_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    n_img_li.classList.add('class', 'n_img');
    document.getElementById('n_slide_li'+i).append(n_img_li);
    document.getElementsByClassName('nene1'+i)[0].append(n_img_li);
}
    for(let i = 0; i < 5; i++) {
    let n_img_li = document.createElement('img');
    n_img_li.setAttribute('src', '');
    n_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    n_img_li.classList.add('class', 'n_img');
    document.getElementById('n_slide_li'+i).append(n_img_li);
    document.getElementsByClassName('nene2'+i)[0].append(n_img_li);
}
    // --------------n slide li-------------------------
    // -----------------------------------netflix_slide

    let el_wavve_title = document.createElement("div");
    el_wavve_title.classList.add("wavve_title");
    el_wavve_title.style.cssText = "  width: 270px; height: 73px; background: url(./img/ico_movie_220818.png); background-position: 31% 51%; margin-top: 100px";
    document.getElementsByClassName("main")[0].appendChild(el_wavve_title);

    let el_wavve_slide = document.createElement("div");
    el_wavve_slide.classList.add("wavve_slide");
    el_wavve_slide.style.cssText = "width: 3300px; height: 350px; position: relative; display: flex;";
    document.getElementsByClassName("main")[0].appendChild(el_wavve_slide);

    for (let r = 0; r < 3; r++) {
    let el_wavve_slide_box = document.createElement("div");
    el_wavve_slide_box.setAttribute('class', 'wavve_slide_box' + r);
    el_wavve_slide_box.setAttribute('id', 'slide_box')
    el_wavve_slide_box.classList.add('wv_banner');
    el_wavve_slide_box.style.cssText = "width: 1100px; height: 100%;position: absolute; display: flex; justify-content: space-evenly; "
    document.getElementsByClassName("wavve_slide")[0].appendChild(el_wavve_slide_box);
}
    let wv_slide_left1 = document.getElementsByClassName('wavve_slide_box1')[0];
    wv_slide_left1.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    let wv_slide_left2 = document.getElementsByClassName('wavve_slide_box2')[0];
    wv_slide_left2.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    // -------------wv slide 3 box
    for (let i = 0; i < 5; i++) {
    let el_wavve_slide_ul = document.createElement("ul");
    el_wavve_slide_ul.setAttribute('class', 'wavve_slide_ul1');
    el_wavve_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('wavve_slide_box0')[0].appendChild(el_wavve_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_wavve_slide_ul = document.createElement("ul");
    el_wavve_slide_ul.setAttribute('class', 'wavve_slide_ul2');
    el_wavve_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('wavve_slide_box1')[0].appendChild(el_wavve_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_wavve_slide_ul = document.createElement("ul");
    el_wavve_slide_ul.setAttribute('class', 'wavve_slide_ul3');
    el_wavve_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('wavve_slide_box2')[0].appendChild(el_wavve_slide_ul);
}
    // -------------wv slide ul
    for (let j = 0; j < 5; j++) {
    let el_wavve_slide_li1 = document.createElement("li");
    el_wavve_slide_li1.classList.add("wavve_slide_li1");
    el_wavve_slide_li1.setAttribute('id', 'wv_slide_li'+j);
    el_wavve_slide_li1.classList.add('wvwv0'+j)
    el_wavve_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_wavve_slide_li2 = document.createElement("li");
    el_wavve_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_wavve_slide_li2.classList.add("wavve_slide_li2");
    el_wavve_slide_li2.setAttribute('id', 'slide_l2');
    el_wavve_slide_li2.innerText = "영화제목";
    // 제목디비
    el_wavve_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("wavve_slide_ul1")[j].append(el_wavve_slide_li1, el_wavve_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_wavve_slide_li1 = document.createElement("li");
    el_wavve_slide_li1.classList.add("wavve_slide_li1");
    el_wavve_slide_li1.setAttribute('id', 'wv_slide_li'+j);
    el_wavve_slide_li1.classList.add('wvwv1'+j)
    el_wavve_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_wavve_slide_li2 = document.createElement("li");
    el_wavve_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_wavve_slide_li2.classList.add("wavve_slide_li2");
    el_wavve_slide_li2.setAttribute('id', 'slide_l2');
    el_wavve_slide_li2.innerText = "영화제목";
    // 제목디비
    el_wavve_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("wavve_slide_ul2")[j].append(el_wavve_slide_li1, el_wavve_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_wavve_slide_li1 = document.createElement("li");
    el_wavve_slide_li1.classList.add("wavve_slide_li1");
    el_wavve_slide_li1.setAttribute('id', 'wv_slide_li'+j);
    el_wavve_slide_li1.classList.add('wvwv2'+j)
    el_wavve_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_wavve_slide_li2 = document.createElement("li");
    el_wavve_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_wavve_slide_li2.classList.add("wavve_slide_li2");
    el_wavve_slide_li2.setAttribute('id', 'slide_l2');
    el_wavve_slide_li2.innerText = "영화제목";
    // 제목디비
    el_wavve_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("wavve_slide_ul3")[j].append(el_wavve_slide_li1, el_wavve_slide_li2);
}
    for(let i = 0; i < 5; i++) {
    let wv_img_li = document.createElement('img');
    wv_img_li.setAttribute('src', '');
    wv_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    wv_img_li.classList.add('class', 'wv_img');
    document.getElementById('wv_slide_li'+i).append(wv_img_li);
    document.getElementsByClassName('wvwv0'+i)[0].append(wv_img_li);
}
    for(let i = 0; i < 5; i++) {
    let wv_img_li = document.createElement('img');
    wv_img_li.setAttribute('src', '');
    wv_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    wv_img_li.classList.add('class', 'wv_img');
    document.getElementById('wv_slide_li'+i).append(wv_img_li);
    document.getElementsByClassName('wvwv1'+i)[0].append(wv_img_li);
}
    for(let i = 0; i < 5; i++) {
    let wv_img_li = document.createElement('img');
    wv_img_li.setAttribute('src', '');
    wv_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    wv_img_li.classList.add('class', 'wv_img');
    document.getElementById('wv_slide_li'+i).append(wv_img_li);
    document.getElementsByClassName('wvwv2'+i)[0].append(wv_img_li);
}
    // --------------wv slide li
    // -----------------------------------wavve_slide

    let el_watcha_title = document.createElement("div");
    el_watcha_title.classList.add("watcha_title");
    el_watcha_title.style.cssText = " width: 200px; height: 70px; background: url(./img//ico_movie_220818.png); background-position: -2% 61%; margin-top: 100px";
    document.getElementsByClassName("main")[0].appendChild(el_watcha_title);

    let el_watcha_slide = document.createElement("div");
    el_watcha_slide.classList.add("watcha_slide");
    el_watcha_slide.style.cssText = "width: 3300px; height: 350px; position: relative; display: flex;";
    document.getElementsByClassName("main")[0].appendChild(el_watcha_slide);

    for (let r = 0; r < 3; r++) {
    let el_watcha_slide_box = document.createElement("div");
    el_watcha_slide_box.setAttribute('class', 'watcha_slide_box' + r);
    el_watcha_slide_box.setAttribute('id', 'slide_box')
    el_watcha_slide_box.classList.add('wc_banner');
    el_watcha_slide_box.style.cssText = "width: 1100px; height: 100%;position: absolute; display: flex; justify-content: space-evenly; "
    document.getElementsByClassName("watcha_slide")[0].appendChild(el_watcha_slide_box);
}
    let wc_slide_left1 = document.getElementsByClassName('watcha_slide_box1')[0];
    wc_slide_left1.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    let wc_slide_left2 = document.getElementsByClassName('watcha_slide_box2')[0];
    wc_slide_left2.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    // -------------wc slide 3 box
    for (let i = 0; i < 5; i++) {
    let el_watcha_slide_ul = document.createElement("ul");
    el_watcha_slide_ul.setAttribute('class', 'watcha_slide_ul1');
    el_watcha_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('watcha_slide_box0')[0].appendChild(el_watcha_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_watcha_slide_ul = document.createElement("ul");
    el_watcha_slide_ul.setAttribute('class', 'watcha_slide_ul2');
    el_watcha_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('watcha_slide_box1')[0].appendChild(el_watcha_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_watcha_slide_ul = document.createElement("ul");
    el_watcha_slide_ul.setAttribute('class', 'watcha_slide_ul3');
    el_watcha_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('watcha_slide_box2')[0].appendChild(el_watcha_slide_ul);
}
    // -------------wc slide ul
    for (let j = 0; j < 5; j++) {
    let el_watcha_slide_li1 = document.createElement("li");
    el_watcha_slide_li1.classList.add("watcha_slide_li1");
    el_watcha_slide_li1.setAttribute('id', 'wc_slide_li'+j);
    el_watcha_slide_li1.classList.add('wcwc0'+j)
    el_watcha_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_watcha_slide_li2 = document.createElement("li");
    el_watcha_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_watcha_slide_li2.classList.add("watcha_slide_li2");
    el_watcha_slide_li2.setAttribute('id', 'slide_l2');
    el_watcha_slide_li2.innerText = "영화제목";
    // 제목디비
    el_watcha_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("watcha_slide_ul1")[j].append(el_watcha_slide_li1, el_watcha_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_watcha_slide_li1 = document.createElement("li");
    el_watcha_slide_li1.classList.add("watcha_slide_li1");
    el_watcha_slide_li1.setAttribute('id', 'wc_slide_li'+j);
    el_watcha_slide_li1.classList.add('wcwc1'+j)
    el_watcha_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_watcha_slide_li2 = document.createElement("li");
    el_watcha_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_watcha_slide_li2.classList.add("watcha_slide_li2");
    el_watcha_slide_li2.setAttribute('id', 'slide_l2');
    el_watcha_slide_li2.innerText = "영화제목";
    // 제목디비
    el_watcha_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("watcha_slide_ul2")[j].append(el_watcha_slide_li1, el_watcha_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_watcha_slide_li1 = document.createElement("li");
    el_watcha_slide_li1.classList.add("watcha_slide_li1");
    el_watcha_slide_li1.setAttribute('id', 'wc_slide_li'+j);
    el_watcha_slide_li1.classList.add('wcwc2'+j)
    el_watcha_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_watcha_slide_li2 = document.createElement("li");
    el_watcha_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_watcha_slide_li2.classList.add("watcha_slide_li2");
    el_watcha_slide_li2.setAttribute('id', 'slide_l2');
    el_watcha_slide_li2.innerText = "영화제목";
    // 제목디비
    el_watcha_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("watcha_slide_ul3")[j].append(el_watcha_slide_li1, el_watcha_slide_li2);
}
    for(let i = 0; i < 5; i++) {
    let wc_img_li = document.createElement('img');
    wc_img_li.setAttribute('src', '');
    wc_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    wc_img_li.classList.add('class', 'wc_img');
    document.getElementById('wc_slide_li'+i).append(wc_img_li);
    document.getElementsByClassName('wcwc0'+i)[0].append(wc_img_li);
}
    for(let i = 0; i < 5; i++) {
    let wc_img_li = document.createElement('img');
    wc_img_li.setAttribute('src', '');
    wc_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    wc_img_li.classList.add('class', 'wc_img');
    document.getElementById('wc_slide_li'+i).append(wc_img_li);
    document.getElementsByClassName('wcwc1'+i)[0].append(wc_img_li);
}
    for(let i = 0; i < 5; i++) {
    let wc_img_li = document.createElement('img');
    wc_img_li.setAttribute('src', '');
    wc_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    wc_img_li.classList.add('class', 'wc_img');
    document.getElementById('wc_slide_li'+i).append(wc_img_li);
    document.getElementsByClassName('wcwc2'+i)[0].append(wc_img_li);
}
    // --------------wc slide li
    // -----------------------------------watcha_slide

    let el_tving_title = document.createElement("div");
    el_tving_title.classList.add("tving_title");
    el_tving_title.style.cssText = "width: 220px; height: 70px; background: url(./img//ico_movie_220818.png); background-position: 39% 42%; margin-top: 100px";
    document.getElementsByClassName("main")[0].appendChild(el_tving_title);

    let el_tving_slide = document.createElement("div");
    el_tving_slide.classList.add("tving_slide");
    el_tving_slide.style.cssText = "width: 3300px; height: 350px; position: relative; display: flex;";
    document.getElementsByClassName("main")[0].appendChild(el_tving_slide);

    for (let r = 0; r < 3; r++) {
    let el_tving_slide_box = document.createElement("div");
    el_tving_slide_box.setAttribute('class', 'tving_slide_box' + r);
    el_tving_slide_box.setAttribute('id', 'slide_box')
    el_tving_slide_box.classList.add('tv_banner');
    el_tving_slide_box.style.cssText = "width: 1100px; height: 100%;position: absolute; display: flex; justify-content: space-evenly; "
    document.getElementsByClassName("tving_slide")[0].appendChild(el_tving_slide_box);
}
    let tv_slide_left1 = document.getElementsByClassName('tving_slide_box1')[0];
    tv_slide_left1.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    let tv_slide_left2 = document.getElementsByClassName('tving_slide_box2')[0];
    tv_slide_left2.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    // -------------tv slide 3 box
    for (let i = 0; i < 5; i++) {
    let el_tving_slide_ul = document.createElement("ul");
    el_tving_slide_ul.setAttribute('class', 'tving_slide_ul1');
    el_tving_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('tving_slide_box0')[0].appendChild(el_tving_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_tving_slide_ul = document.createElement("ul");
    el_tving_slide_ul.setAttribute('class', 'tving_slide_ul2');
    el_tving_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('tving_slide_box1')[0].appendChild(el_tving_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_tving_slide_ul = document.createElement("ul");
    el_tving_slide_ul.setAttribute('class', 'tving_slide_ul3');
    el_tving_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('tving_slide_box2')[0].appendChild(el_tving_slide_ul);
}
    // -------------tv slide ul
    for (let j = 0; j < 5; j++) {
    let el_tving_slide_li1 = document.createElement("li");
    el_tving_slide_li1.classList.add("tving_slide_li1");
    el_tving_slide_li1.setAttribute('id', 'tv_slide_li'+j);
    el_tving_slide_li1.classList.add('tvtv0'+j)
    el_tving_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_tving_slide_li2 = document.createElement("li");
    el_tving_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_tving_slide_li2.classList.add("tving_slide_li2");
    el_tving_slide_li2.setAttribute('id', 'slide_l2');
    el_tving_slide_li2.innerText = "영화제목";
    // 제목디비
    el_tving_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("tving_slide_ul1")[j].append(el_tving_slide_li1, el_tving_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_tving_slide_li1 = document.createElement("li");
    el_tving_slide_li1.classList.add("tving_slide_li1");
    el_tving_slide_li1.setAttribute('id', 'tv_slide_li'+j);
    el_tving_slide_li1.classList.add('tvtv1'+j)
    el_tving_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_tving_slide_li2 = document.createElement("li");
    el_tving_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_tving_slide_li2.classList.add("tving_slide_li2");
    el_tving_slide_li2.setAttribute('id', 'slide_l2');
    el_tving_slide_li2.innerText = "영화제목";
    // 제목디비
    el_tving_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("tving_slide_ul2")[j].append(el_tving_slide_li1, el_tving_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_tving_slide_li1 = document.createElement("li");
    el_tving_slide_li1.classList.add("tving_slide_li1");
    el_tving_slide_li1.setAttribute('id', 'tv_slide_li'+j);
    el_tving_slide_li1.classList.add('tvtv2'+j)
    el_tving_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_tving_slide_li2 = document.createElement("li");
    el_tving_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_tving_slide_li2.classList.add("tving_slide_li2");
    el_tving_slide_li2.setAttribute('id', 'slide_l2');
    el_tving_slide_li2.innerText = "영화제목";
    // 제목디비
    el_tving_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("tving_slide_ul3")[j].append(el_tving_slide_li1, el_tving_slide_li2);
}
    for(let i = 0; i < 5; i++) {
    let tv_img_li = document.createElement('img');
    tv_img_li.setAttribute('src', '');
    tv_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    tv_img_li.classList.add('class', 'tv_img');
    document.getElementById('tv_slide_li'+i).append(tv_img_li);
    document.getElementsByClassName('tvtv0'+i)[0].append(tv_img_li);
}
    for(let i = 0; i < 5; i++) {
    let tv_img_li = document.createElement('img');
    tv_img_li.setAttribute('src', '');
    tv_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    tv_img_li.classList.add('class', 'tv_img');
    document.getElementById('tv_slide_li'+i).append(tv_img_li);
    document.getElementsByClassName('tvtv1'+i)[0].append(tv_img_li);
}
    for(let i = 0; i < 5; i++) {
    let tv_img_li = document.createElement('img');
    tv_img_li.setAttribute('src', '');
    tv_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    tv_img_li.classList.add('class', 'tv_img');
    document.getElementById('tv_slide_li'+i).append(tv_img_li);
    document.getElementsByClassName('tvtv2'+i)[0].append(tv_img_li);
}
    // --------------tv slide li
    // -----------------------------------tiving_slide

    let el_disney_title = document.createElement("div");
    el_disney_title.classList.add("disney_title");
    el_disney_title.style.cssText = "width: 220px; height: 130px; background: url(./img/disney+white_origin.png)no-repeat center/ cover; margin-top: 70px";
    document.getElementsByClassName("main")[0].appendChild(el_disney_title);

    let el_disney_slide = document.createElement("div");
    el_disney_slide.classList.add("disney_slide");
    el_disney_slide.style.cssText = "width: 3300px; height: 350px; position: relative; display: flex;";
    document.getElementsByClassName("main")[0].appendChild(el_disney_slide);

    for (let r = 0; r < 3; r++) {
    let el_disney_slide_box = document.createElement("div");
    el_disney_slide_box.setAttribute('class', 'disney_slide_box' + r);
    el_disney_slide_box.setAttribute('id', 'slide_box')
    el_disney_slide_box.classList.add('d_banner');
    el_disney_slide_box.style.cssText = "width: 1100px; height: 100%;position: absolute; display: flex; justify-content: space-evenly; "
    document.getElementsByClassName("disney_slide")[0].appendChild(el_disney_slide_box);
}
    let d_slide_left1 = document.getElementsByClassName('disney_slide_box1')[0];
    d_slide_left1.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    let d_slide_left2 = document.getElementsByClassName('disney_slide_box2')[0];
    d_slide_left2.style.cssText = 'width: 1100px; height: 100%; position: absolute; display: flex; justify-content: space-evenly; left: 1100px';
    // -------------disney slide 3 box
    for (let i = 0; i < 5; i++) {
    let el_disney_slide_ul = document.createElement("ul");
    el_disney_slide_ul.setAttribute('class', 'disney_slide_ul1');
    el_disney_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('disney_slide_box0')[0].appendChild(el_disney_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_disney_slide_ul = document.createElement("ul");
    el_disney_slide_ul.setAttribute('class', 'disney_slide_ul2');
    el_disney_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('disney_slide_box1')[0].appendChild(el_disney_slide_ul);
}
    for (let i = 0; i < 5; i++) {
    let el_disney_slide_ul = document.createElement("ul");
    el_disney_slide_ul.setAttribute('class', 'disney_slide_ul3');
    el_disney_slide_ul.style.cssText = "width: 200px; height: 350px; position: relative;"
    document.getElementsByClassName('disney_slide_box2')[0].appendChild(el_disney_slide_ul);
}
    // -------------disney slide ul
    for (let j = 0; j < 5; j++) {
    let el_disney_slide_li1 = document.createElement("li");
    el_disney_slide_li1.classList.add("disney_slide_li1");
    el_disney_slide_li1.setAttribute('id', 'd_slide_li'+j);
    el_disney_slide_li1.classList.add('dddd0'+j)
    el_disney_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_disney_slide_li2 = document.createElement("li");
    el_disney_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_disney_slide_li2.classList.add("disney_slide_li2");
    el_disney_slide_li2.setAttribute('id', 'slide_l2');
    el_disney_slide_li2.innerText = "영화제목";
    // 제목디비
    el_disney_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("disney_slide_ul1")[j].append(el_disney_slide_li1, el_disney_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_disney_slide_li1 = document.createElement("li");
    el_disney_slide_li1.classList.add("disney_slide_li1");
    el_disney_slide_li1.setAttribute('id', 'd_slide_li'+j);
    el_disney_slide_li1.classList.add('dddd1'+j)
    el_disney_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_disney_slide_li2 = document.createElement("li");
    el_disney_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_disney_slide_li2.classList.add("disney_slide_li2");
    el_disney_slide_li2.setAttribute('id', 'slide_l2');
    el_disney_slide_li2.innerText = "영화제목";
    // 제목디비
    el_disney_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("disney_slide_ul2")[j].append(el_disney_slide_li1, el_disney_slide_li2);
}
    for (let j = 0; j < 5; j++) {
    let el_disney_slide_li1 = document.createElement("li");
    el_disney_slide_li1.classList.add("disney_slide_li1");
    el_disney_slide_li1.setAttribute('id', 'd_slide_li'+j);
    el_disney_slide_li1.classList.add('dddd2'+j)
    el_disney_slide_li1.style.cssText = "width: 200px; height: 300px; background: gray; box-shadow: 0 0 4px 1px black; overflow: hidden"
    // 포스터 디비
    let el_disney_slide_li2 = document.createElement("li");
    el_disney_slide_li2.style.cssText = "width: 200px; height: 50px;"
    el_disney_slide_li2.classList.add("disney_slide_li2");
    el_disney_slide_li2.setAttribute('id', 'slide_l2');
    el_disney_slide_li2.innerText = "영화제목";
    // 제목디비
    el_disney_slide_li2.style.cssText = "line-height: 50px; text-align: center; color: white;"
    document.getElementsByClassName("disney_slide_ul3")[j].append(el_disney_slide_li1, el_disney_slide_li2);
}
    for(let i = 0; i < 5; i++) {
    let d_img_li = document.createElement('img');
    d_img_li.setAttribute('src', '');
    d_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    d_img_li.classList.add('class', 'd_img');
    document.getElementById('d_slide_li'+i).append(d_img_li);
    document.getElementsByClassName('dddd0'+i)[0].append(d_img_li);
}
    for(let i = 0; i < 5; i++) {
    let d_img_li = document.createElement('img');
    d_img_li.setAttribute('src', '');
    d_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    d_img_li.classList.add('class', 'd_img');
    document.getElementById('d_slide_li'+i).append(d_img_li);
    document.getElementsByClassName('dddd1'+i)[0].append(d_img_li);
}
    for(let i = 0; i < 5; i++) {
    let d_img_li = document.createElement('img');
    d_img_li.setAttribute('src', '');
    d_img_li.style.cssText = 'width: 200px; height: 300px; object-fit: cover';
    d_img_li.classList.add('class', 'd_img');
    document.getElementById('d_slide_li'+i).append(d_img_li);
    document.getElementsByClassName('dddd2'+i)[0].append(d_img_li);
}
    // --------------disney slide li
    // -----------------------------------disney_slide

    let el_footer = document.createElement("div");
    el_footer.classList.add("footer");
    el_footer.innerText = "";
    el_footer.style.cssText = "width: 100%; height: 200px; position: absolute; left: 0px; bottom: -200px; background: black; color: white; text-align: center; line-height: 200px;";
    document.getElementById("wrap").appendChild(el_footer);
    // -----------------------------------footer

    for (let a = 0; a < 6; a++) {
    let btn_L = document.createElement("div");
    btn_L.style.cssText = "width: 55px; height: 55px; border: 0; border-radius: 50%; background: url(./img/ico_movie_220818.png); background-position: 3% 15%; position: absolute; left: 0%; z-index: 9; opacity: 0.8;"
    let btn_R = document.createElement("div");
    btn_R.style.cssText = "width: 55px; height: 55px; border: 0; border-radius: 50%; background: url(./img/ico_movie_220818.png); background-position: 15.7% 15%; position: absolute; right: 0%;  z-index: 9; opacity: 0.8;"
    btn_made(btn_L, btn_R);

    function btn_made(L, R) {
    L.setAttribute('class', 'slide_btn_R');
    L.setAttribute('id', 'R_btn' + a);
    document.getElementsByClassName("main")[0].appendChild(L);
    R.setAttribute('class', 'slide_btn_L');
    R.setAttribute('id', 'L_btn' + a);
    document.getElementsByClassName("main")[0].appendChild(R);
    return;
}
}
    // ----------------------------------------slide_btn

    const m_slide_L = document.getElementById('L_btn0');
    const m_slide_R = document.getElementById('R_btn0');
    const m_banner = document.getElementsByClassName('m_banner');
    img_slide(m_slide_L, m_slide_R, m_banner);

    const n_slide_L = document.getElementById('L_btn1');
    const n_slide_R = document.getElementById('R_btn1');
    const n_banner = document.getElementsByClassName('n_banner');
    img_slide(n_slide_L, n_slide_R, n_banner);

    const wv_slide_L = document.getElementById('L_btn2');
    const wv_slide_R = document.getElementById('R_btn2');
    const wv_banner = document.getElementsByClassName('wv_banner');
    img_slide(wv_slide_L, wv_slide_R, wv_banner);

    const wc_slide_L = document.getElementById('L_btn3');
    const wc_slide_R = document.getElementById('R_btn3');
    const wc_banner = document.getElementsByClassName('wc_banner');
    img_slide(wc_slide_L, wc_slide_R, wc_banner);

    const tv_slide_L = document.getElementById('L_btn4');
    const tv_slide_R = document.getElementById('R_btn4');
    const tv_banner = document.getElementsByClassName('tv_banner');
    img_slide(tv_slide_L, tv_slide_R, tv_banner);

    const d_slide_L = document.getElementById('L_btn5');
    const d_slide_R = document.getElementById('R_btn5');
    const d_banner = document.getElementsByClassName('d_banner');
    img_slide(d_slide_L, d_slide_R, d_banner);


    function img_slide (R_slide, L_slide, img_slides) {
    let m_index = 0;
    let m_x = 0;
    R_slide.addEventListener('click', () => {
    let interval = setInterval(() => {
    // 나갈판
    img_slides[m_index % 3].style.left = - m_x + "%";
    // 들어올판
    img_slides[(m_index + 1) % 3].style.left = (100 - m_x) + "%";
    m_x += 1;
    if (m_x > 100) {
    clearInterval(interval);
    m_x = 0;
    m_index += 1;
}
}, 1);
})
    L_slide.addEventListener('click', () => {
    let interval = setInterval(() => {
    // 나갈판
    img_slides[m_index % 3].style.left = m_x + "%";
    // 들어올판
    let ms_index = (m_index - 1) % 3 < 0 ? 2 : (m_index - 1) % 3
    img_slides[ms_index].style.left = -1 * (100 - m_x) + "%";
    m_x += 1;
    if (m_x > 100) {
    clearInterval(interval);
    m_x = 0;
    m_index = ms_index;
}
}, 1);
})
}
    // --------------------------------------------------img_slide

    let mute_img1 = document.getElementsByClassName('mute_img1')[0];
    // 음소거 이미지
    let mute_img2 = document.getElementsByClassName('mute_img2')[0];
    // 음소거 해제 이미지
    const id_arr = ["6hB3S9bIaco","dkeS318Nimk","kVrqfYjkTdQ","JcpWXaA2qeg","r5X-hFf6Bwo","cGmNECt6lb4","LtrkFLwfbS0","7OIFdWk83no","5ddd-77G4b4","gPhXjrDANGk","CBrLDuGGX70","SVkEqr3wInk","a7lhOFMyF0c"];
    let title_arr = ['쇼생크 탈출','레미: 집 없는 아이','타이타닉','토이 스토리 3','반지의 제왕: 왕의 귀환','말아톤','어느 가족','어바웃 타임','조조 래빗','노팅 힐','무간도','인사이드 아웃','싱 스트리트'];
    let ran_num = Math.floor(Math.random() * id_arr.length);
    $(".preview_title").text(title_arr[ran_num]);
    let player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: "1300px",
        width: "1910px",
        videoId: id_arr[ran_num],
        playerVars: {
            cc_load_policy: 0,
            controls: 0, // 컨트롤 표시 x
            disablekb: 1, // 키보드 사용 x
            playlist: id_arr[ran_num], // loop를 위해서는 비디오 id가 필요함
            loop: 1, // 반복 o
            mute: 1,
            autoplay: 1,
        },
        events: {
            onReady: function (e) {
                mute_img1.addEventListener('click', function () {
                    if (e.target.mute()) {
                        e.target.unMute();
                        mute_img1.style.display = 'none';
                        mute_img2.style.display = 'block';
                    }
                })
                mute_img2.addEventListener('click', function () {
                    if (e.target.unMute()) {
                        e.target.mute();
                        mute_img2.style.display = 'none';
                        mute_img1.style.display = 'block';
                    }
                })
            }
        }
    });
}
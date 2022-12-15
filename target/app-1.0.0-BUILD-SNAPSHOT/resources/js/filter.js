let inputL = document.getElementsByClassName("input_left");
let inputR = document.getElementsByClassName("input_right");
    
let thumbL = document.getElementsByClassName("left");
let thumbR = document.getElementsByClassName("right");
    
let range = document.getElementsByClassName("selected_area");
let percentL = new Array(2);
let percentR = new Array(2);

for (let i = 0; i < inputL.length; i++)
{
    inputL[i].addEventListener("input", function(){
        moveBar(i);
        let e = this;
        if (+inputR[i].value - +e.value < 10) {
            e.value = +inputR[i].value - 10;
        }
        percentL[i] = Math.round(((+e.value - +e.min) / (+e.max - +e.min)) * 100);
        thumbL[i].style.left = `${percentL[i]}%`;
        range[i].style.left = `${percentL[i]}%`;
    })
        inputL[i].addEventListener("mousedown", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2].style.opacity = 1;
            inputL[i].addEventListener("mousemove", function(){
                document.getElementsByClassName("tmp_thumb_value")[i * 2].innerHTML = `<div>${tmpValL[i]}</div>`;
            });
        });
        inputL[i].addEventListener("mouseup", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2].style.opacity = 0;
            sendData();
        });
    

    inputR[i].addEventListener("input", function(){
        moveBar(i);
        let e = this;
        if (+e.value - +inputL[i].value < 10) {
            e.value = +inputL[i].value + 10;
        }
        percentR[i] = Math.round(((+e.value - +e.min) / (+e.max - +e.min)) * 100);
        thumbR[i].style.right = `${100 - percentR[i]}%`;
        range[i].style.right = `${100 - percentR[i]}%`;
    })
    inputR[i].addEventListener("mousedown", function(){
        document.getElementsByClassName("tmp_thumb_value")[i * 2 + 1].style.opacity = 1;
        inputR[i].addEventListener("mousemove", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2 + 1].innerHTML = `<div>${tmpValR[i]}</div>`;
        })
        inputR[i].addEventListener("mouseup", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2 + 1].style.opacity = 0;
            sendData();
        });
    })
}
let tmp = new Array(2);
let tmpValL = [" ", 100];
let tmpValR = [" ", 0];
function moveBar(i)
{
    if (document.getElementsByClassName("blank" + i)[0] == undefined)
    {
        let addBlank = document.createElement("span");
        addBlank.setAttribute("class", "result_options " + (i == 0 ? "movie_runtime" : "movie_date") + " blank" + i);
        addBlank.addEventListener("click", function(){//result span에 누르면 해제되는 기능 넣기
            addBlank.remove();
            phrase(1);
        })
        document.getElementsByClassName("result_options_bar")[0].appendChild(addBlank);
        phrase(0);
    }
    if (i == 0)
    {
        if (percentL[i] == undefined)
        {
            percentL[i] = " ";
        }
        if (percentR[i] == undefined)
        {
            percentR[i] = " ";
        }
        tmp[i] = "분";
        tmpValL[i] = percentL[i] * 3;
        tmpValR[i] = percentR[i] * 3;
    }
    else if (i == 1)
    {
        tmp[i] = "";
        if (percentL[i] == undefined)
        {
            percentL[i] = 0;
        }
        if (percentR[i] == undefined)
        {
            percentR[i] = 100;
        }
        tmpValL[i] = 1975 + Math.round(percentL[i] / 2);
        tmpValR[i] = 1975 + Math.round(percentR[i] / 2);
    }
    document.getElementsByClassName("blank" + i)[0].innerHTML=`${tmpValL[i]}${tmp[i]}~${tmpValR[i]}${tmp[i]}<span style=\"color:#FFCC00\"> ×</span>`;
}

        let opt = document.getElementsByClassName("options");
        let rOpt = document.getElementsByClassName("result_options");
        let rOptBar = document.getElementsByClassName("result_options_bar");
        function phrase(n)//입맛에 따라 골라보세요 문구
        {
            if (n == 1)
            {
                if (rOptBar[0].innerHTML.match("span") == null)
                {
                    document.getElementsByClassName("result_options_tmp_phrase")[0].style.display = "block";
                }
            }
            else if (n == 0)
            {
                document.getElementsByClassName("result_options_tmp_phrase")[0].style.display = "none";
            }
        }
        ///체크된 옵션 표시/해제, 밑에 한번에 보여주는 기능
        for (let i = 0; i < opt.length; i++)
        {
            opt[i].addEventListener("click", function(){//모든 옵션에 버튼 달기
                $(".item_filter").eq(0).text("")
                opt[i].classList.toggle("checked");//눌리면 회색, 풀리면 원래대로
                if (opt[i].classList.contains("checked"))
                {
                    let newResult = document.createElement("span");//체크된 옵션 보여주는 result span 만들어서 맨밑에 요소 넣기
                    newResult.setAttribute("class", "result_options " + opt[i].classList[1]);
                    newResult.setAttribute("id", "result" + i);
                    newResult.innerHTML = opt[i].innerText + "<span style=\"color:#FFCC00\"> ×</span>";
                    newResult.addEventListener("click", function(){//result span에 누르면 해제되는 기능 넣기
                        opt[i].classList.toggle("checked");
                        newResult.remove();
                        phrase(1);
                    })
                    rOptBar[0].appendChild(newResult);
                    phrase(0);
                }
                else
                {
                    document.getElementById("result" + i).remove();
                    phrase(1);
                }
                sendData();
            })
        }

        /////////검색 초기화 버튼 ///////////
        $(".result_options_init").click(function (){
            $(".result_options").remove();
            $(".options").removeClass("checked");
            $(".item_list_thumbnail").html("");
            $(".item_list_detail").html("");
            phrase(1);
        });

        //////////브라우저에서 ajax로 보낼 데이터 가져와서 가공하고 반환하는 메서드////////////
        function getOpt() {
            let sendOpt =  "";
            for (let i = 0; i < rOpt.length; i++) {
                if (rOpt[i].classList[1] == "movie_runtime") {
                    // console.log("runtime!!!!!!!!!!")
                    let tmpRuntime = rOpt[i].innerText.replace(" ×","");
                    switch (tmpRuntime) {
                        case "~ 90분" :
                            sendOpt += "movie_runtime_to:90,";
                            break;
                        case "90분 ~ 120분" :
                            sendOpt += "movie_runtime_from:90,movie_runtime_to:120,";
                            break;
                        case "120분 ~" :
                            sendOpt += "movie_runtime_from:120,";
                            break;
                        default :
                            sendOpt += "movie_runtime_from:" + tmpRuntime.replace("분", "").replace("분", "").split("~")[0] + ",";
                            sendOpt += "movie_runtime_to:" + tmpRuntime.replace("분", "").replace("분", "").split("~")[1] + ",";
                            break;
                    }
                }
                else if (rOpt[i].classList[1] == "movie_date") {
                    console.log("date!!!!!!!!!!!!")
                    let tmpDate = rOpt[i].innerText.replace(" ×", "");
                    if (tmpDate.includes("~")) {
                        if (tmpDate.length < 7) {
                        sendOpt += "movie_date_to:" + tmpDate.replace("~", "") + ",";
                        }
                        else {
                            sendOpt += "movie_date_from:" + tmpDate.split("~")[0] + ",";
                            sendOpt += "movie_date_to:" + tmpDate.split("~")[1] + ",";
                        }
                    }
                    else {
                        sendOpt += "movie_date_from:" + tmpDate + ",";
                        sendOpt += "movie_date_to:" + (Number(tmpDate) + 9) + ",";
                    }
                }
                else {
                sendOpt += rOpt[i].classList[1] + ":" + rOpt[i].innerText.replace(" ×", "") + ",";
                }
            }
            return sendOpt;
        }

        //////////브라우저 체크된 옵션이 있으면 true, 없으면 false 반환하는 메서드//////////
        function hasChecked() {
            let tmpRemove = new Array(rOpt.length);
            for (let i = 0; i < rOpt.length; i++) {
                for (let j = i + 1; j < rOpt.length; j++) {
                    if (rOpt[i].classList[1] == rOpt[j].classList[1] && rOpt[i].classList[1] != "genre") {
                        tmpRemove[i] = 1;
                    }

                }
            }
            for (let i = 0; i < rOpt.length; i++) {
                if (tmpRemove[i] == 1) {
                    let optRemove = rOpt[i].id.replace("result", "");
                    opt[Number(optRemove)].classList.remove("checked");
                    rOpt[i].remove();
                }
            }
            return $(".result_options_bar").children().hasClass("result_options");
        }
        //////////String 잘라주는 메서드////////////
        function cutString(str, n) {
            if (str.length > n) {
                let end = str.charAt(n);
                while ((end == ',' || end == '.' || end == '?' || end == '!')) {
                    end = str.charAt(n++);
                    if (str.length == n)
                        break;
                }
                str = str.substring(0, n).concat("...");
            }
            return str;
        }
        //////////ajax로 데이터 보내고 꺼내와서 item_area 채우는 메서드/////////////
        function sendData() {
            let resultList;
            let resultLength = 0;
            let tmpInputThumbnail = "";
            let tmpInputDetail = "";
            if (hasChecked()) {
                console.log("보낼 데이터 : " + getOpt());
                $.ajax({
                    type:'POST',       // 요청 메서드
                    url: '/Filmap/send',  // 요청 URI
                    headers : { "content-type": "application/json"}, // 요청 헤더
                    dataType : 'text', // 전송받을 데이터의 타입
                    data : JSON.stringify(getOpt()),  // post 방식으로 url에 명시된 주소(/board/send)로 전송.
                    success : function(result){
                        ///////////전송받은 데이터 처리 영역////////////
                        resultList = JSON.parse(result);
                        resultLength = resultList.length;
                        console.log("받아온 갯수 : " + resultLength);
                        $(".item_filter").eq(0).text(`${resultLength}개의 영화가 검색되었습니다.`);
                        if (!resultList[0].movie_title.includes("null")) {
                        for (let j = 0; j < resultLength; j++) {
                            tmpInputThumbnail += `<div class="item_thumbnail">
                                                    <a href="movie/detail?movie_idx=${resultList[j].movie_idx}" class="item_thumbnail_img_box">
                                                        <img class="item_thumbnail_img" src="${resultList[j].movie_img}" alt="">
                                                    </a>
                                                    <div class="item_thumbnail_title">${cutString(resultList[j].movie_title, 12)}</div>
                                                </div>`;
                            tmpInputDetail += `<div class="item_detail">
                                                <a href="movie/detail?movie_idx=${resultList[j].movie_idx}"><img src="${resultList[j].movie_img}" alt="" class="item_detail_img"></a>
                                                <div class="item_detail_textbox">
                                                    <div class="item_detail_header">
                                                        <div class="item_detail_title">${cutString(resultList[j].movie_title, 20)}</div>
                                                        <div class="item_detail_appearance">${resultList[j].direct_name}</div>
                                                    </div>
                                                    <div class="item_detail_plot">${cutString(resultList[j].movie_plot, 180)}</div>
                                                </div>
                                            </div>`;
                            $(".item_list_thumbnail").html(tmpInputThumbnail);
                            $(".item_list_detail").html(tmpInputDetail);

                        }
                        }
                        else {
                            $(".item_list_thumbnail").html("");
                            $(".item_list_detail").html("");
                        }

                        /////////////////////////////////////////
                        itemAreaSetHeight();
                    },
                    error   : function(){
                        // alert("error")
                    } // 에러가 발생했을 때, 호출될 함수
                }); // $.ajax()
            }
            else {
                $(".item_list_thumbnail").html("");
                $(".item_list_detail").html("");
            }
        }
        $(".hide_mine_check_box").click(function (){
            $(".hide_mine_check").toggleClass("display");
        });
        // document.getElementsByClassName("search_bar")[0].addEventListener("focus", function(){
        //     document.getElementsByClassName("dark_cover")[0].style.display = "block";
        // });
        // document.getElementsByClassName("search_bar")[0].addEventListener("blur", function(){
        //     document.getElementsByClassName("dark_cover")[0].style.display = "none";
        // });

        /////////item 영역////////////
        //item_area height 설정해주기 (자식이 absolute라 footer 박으려면 어쩔수가 없다)
        function itemAreaSetHeight() {
            let i;
            if ($(".tab_thumbnail").hasClass("tab_on")) {
                i = 0;
            }
            else
                i = 1;
            let childHeight = (document.getElementsByClassName(i == 0 ? "item_list_thumbnail" : "item_list_detail")[0].clientHeight);
            if (childHeight > 40) {
            document.getElementsByClassName("item_area")[0].style.height = childHeight + "px";
            }
        }
        itemAreaSetHeight();
        //tab에 따라 opacity바꿔주는 메서드
        function showItemList(i) {
            $(".item_list_thumbnail").css({
                display: i == 0 ? "inline-flex" : "none",
                zIndex : (i * 9 - 9) * -1
            })
            $(".item_list_detail").css({
                display: i == 0 ? "none" : "block",
                zIndex : (i * 9)
            })
        }
        //tab에 따라 tab 바꿔주기
        showItemList(0);
        for (let i = 0; i < 2; i++) {
            $(".item_list_tab").eq(i).click(function() {
                $(this).addClass("tab_on");
                $(this).children().addClass("teeth_on");
                $(".item_list_tab").eq(i == 0 ? 1 : 0).removeClass("tab_on");
                $(".item_list_tab").eq(i == 0 ? 1 : 0).children().removeClass("teeth_on");
                showItemList(i);
                itemAreaSetHeight();
            })
        };
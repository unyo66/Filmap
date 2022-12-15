let hiddenIdx = $(".hidden_idx").text();
console.log("idx : "+hiddenIdx);

// $(".main_menu_li").hover(function (){
//     $(this).css({
//         color: "#ddd"
//     })
// },function (){
//     $(this).css({
//         color: ""
//     })
// })
function menuSelect(n){
    $(".item_area").css({
        opacity: 0,
        zIndex: 1
    })
    $(".item_area").eq(n).css({
        opacity: 1,
        zIndex: 2
    })
}

reviewAjax();
menuSelect(0);

$(".main_menu_li").eq(0).click(function (){
    reviewAjax();
    menuSelect(0);
})
$(".main_menu_li").eq(1).click(function(){
    bookmarkAjax();
    menuSelect(1);
})
$(".main_menu_li").eq(2).click(function(){
    followAjax();
    menuSelect(2);
})
// $(".main_menu_li").eq(3).click(function(){
//     menuSelect(3);
// })

function reviewAjax() {
    let resultList;
    let tmpInput = "";
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/sendReview',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'text', // 전송받을 데이터의 타입
        data : JSON.stringify(hiddenIdx),
        success : function(result){
            resultList = JSON.parse(result);
            console.log(resultList.length);

            /////////// resultList로 뭐 하기 ///////////
            for (let i = 0; i < resultList.length; i++) {
            // if (!resultList[0].user_id.includes("null")) {
                tmpInput += `
                            <div class="review_item">
                <a href="movie/detail?movie_idx=${resultList[i].movie_idx}"><img src="${resultList[i].movie_img}" alt="" class="review_item_img"></a> 
                <div class="review_item_textbox">
                    <div class="review_item_header">
                        <div class="review_item_title">${resultList[i].movie_title}</div>
                        <div class="review_item_rate">★${resultList[i].review_rate}</div>
                    </div>
                    <div class="review_item_text">${resultList[i].review_text}</div>
                </div>
            </div>`;
                $("#review").html(tmpInput);
            }

        },
        error   : function(){
            // alert("error")
        }
    });
}
function bookmarkAjax() {
    let resultList;
    let tmpInput = "";
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/sendBookmark',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'text', // 전송받을 데이터의 타입
        data : JSON.stringify(hiddenIdx),
        success : function(result){
            resultList = JSON.parse(result);
            console.log(resultList.length);

            /////////// resultList로 뭐 하기 ///////////
            for (let i = 0; i < resultList.length; i++) {
                // if (!resultList[0].user_id.includes("null")) {
                tmpInput += `<div class="bookmark_item">
                                <a href="movie/detail?movie_idx=${resultList[i].movie_idx}" class="bookmark_img_box">
                                    <img class="bookmark_img" src="${resultList[i].movie_img}" alt="">
                                 </a>
                                 <div class="bookmark_title">${resultList[i].movie_title}
                                 </div>
                              </div>`;
                $("#bookmark").html(tmpInput);
            }

        },
        error   : function(){
            // alert("error")
        }
    });
}
function followAjax() {
    let resultList;
    let tmpInput = "";
    $.ajax({
        type:'POST',       // 요청 메서드
        url: '/Filmap/sendFollow',  // 요청 URI
        headers : { "content-type": "application/json"}, // 요청 헤더
        dataType : 'text', // 전송받을 데이터의 타입
        data : JSON.stringify(hiddenIdx),
        success : function(result){
            resultList = JSON.parse(result);
            console.log(resultList.length);

            /////////// resultList로 뭐 하기 ///////////
            for (let i = 0; i < resultList.length; i++) {
                // if (!resultList[0].user_id.includes("null")) {
                tmpInput += `
                            <div class="follow_item">
                                <div class="follow_item_name">${resultList[i].user_name}</div>
                                <div class="follow_delete">삭제하기</div>
                            </div>`;
                $("#follow").html(tmpInput);
            }

        },
        error   : function(){
            // alert("error")
        }
    });
}
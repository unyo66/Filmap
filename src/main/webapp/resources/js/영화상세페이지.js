$(document).ready(function(){
    bookmark();
    myRating();
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
/* 코멘트 아이콘 클릭 */
// let good_icon_chk = 0;
// let good_icon = document.getElementById('good_icon');
// good_icon.addEventListener('click', icon_chk)
// function icon_chk(){
//     if(good_icon_chk == 0){
//         good_icon.src="good_icon_2.png";
//         good_icon_chk = 1;
//     }else if(good_icon_chk == 1){
//         good_icon.src="good_icon_1.png";
//         good_icon_chk = 0;
//     }
// }


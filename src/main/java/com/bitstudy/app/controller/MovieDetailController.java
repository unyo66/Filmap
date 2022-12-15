package com.bitstudy.app.controller;

import com.bitstudy.app.domain.*;
import com.bitstudy.app.service.MovieDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/movie")
public class MovieDetailController {

    @Autowired
    MovieDetailService movieDetailService;
    Integer user_idx =1;

    @GetMapping("/detail")
    public String detail(Integer movie_idx, Model m , HttpSession session) throws Exception {
        Integer user_idx = (Integer) session.getAttribute("idx");
//        Integer user_idx = 1; // 로그인을 안한상태라 이거 사용. 원래는 세션에서 가져와야함
        System.out.println(movie_idx);
        System.out.println(user_idx);

        if(user_idx != null){
            UserStoreDto bookmarkChk = movieDetailService.readMyMovie(user_idx,movie_idx);
            ReviewDto myRating = movieDetailService.myRating(user_idx,movie_idx);
            System.out.println("컨트롤러-점수가져오기 : " + myRating.getReview_rate());
            System.out.println("컨트롤러-찜하기 :"+bookmarkChk.getBookmark());
            m.addAttribute("markChk",bookmarkChk);
            m.addAttribute("myRating",myRating);
        }
        MovieDetailDto movieDetailDto = movieDetailService.detailMovie(movie_idx);
        AppearanceDto appDirect = movieDetailService.appDirect(movie_idx);
        List<MovieDetailDto> movielist = movieDetailService.movieList(movie_idx);
        List<CommentDto> cmtList = movieDetailService.cmtList(movie_idx);
        List<AppearanceDto> appActor = movieDetailService.appActor(movie_idx);

        m.addAttribute("cmt",cmtList);
        m.addAttribute("movie",movieDetailDto);
        m.addAttribute("direct",appDirect);
        m.addAttribute("movielist",movielist);
        m.addAttribute("actor",appActor);
        return "movieDetail";
    }
    @PostMapping("/like")
    @ResponseBody
    public int like(@RequestBody UserStoreDto userStoreDto, int movie_idx ,HttpSession session, Model m) throws Exception {
        try {
//            movie_idx=1;

            System.out.println("like 컨트롤러: " + movie_idx);
//            Integer user_idx = 1; // 로그인을 안한상태라 이거 사용
        Integer user_idx = (Integer) session.getAttribute("idx");
            System.out.println("LIKE컨트롤러 movie_idx :" + movie_idx);
            userStoreDto.setUser_idx(user_idx);
            userStoreDto.setMovie_idx(movie_idx);

            int addLike = movieDetailService.addMyMovie(userStoreDto);
            m.addAttribute(addLike);
            System.out.println("모델: " + addLike);
            return 1;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @PostMapping("/deletelike")
    @ResponseBody
    public int deletelike(@RequestBody UserStoreDto userStoreDto, int movie_idx, HttpSession session, Model m) throws Exception {
        try {
            System.out.println("like 컨트롤러");
//            Integer user_idx = 1; // 로그인을 안한상태라 이거 사용
        Integer user_idx = (Integer) session.getAttribute("idx");
            System.out.println("LIKE컨트롤러 movie_idx :" + movie_idx);
            userStoreDto.setUser_idx(user_idx);
            userStoreDto.setMovie_idx(movie_idx);

            int addLike = movieDetailService.deleteMyMovie(userStoreDto);
            m.addAttribute(addLike);
            return 1;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping(value = "/addrate")
    @ResponseBody
    public int addRate(@RequestBody ReviewDto reviewDto, HttpSession session)throws Exception{
//        Integer user_idx = 1; // 로그인을 안한상태라 이거 사용
        Integer user_idx = (Integer) session.getAttribute("idx");
//        System.out.println(map.get("review_rate"));
//        System.out.println(map.get("review_rate").getClass().getName());
//        Integer review_rate = (int)map.get("review_rate");
        reviewDto.setUser_idx(user_idx);
        System.out.println("별점Controller 등록 = movie_idx: " + reviewDto.getMovie_idx()+" review_rate: " +reviewDto.getReview_rate() + " user_idx: " + reviewDto.getUser_idx());
        return movieDetailService.addRate(reviewDto);

    }
    @PostMapping(value = "/deleterate")
    @ResponseBody
    public int deleteRate(@RequestBody ReviewDto reviewDto, HttpSession session)throws Exception{
//        Integer user_idx = 1; // 로그인을 안한상태라 이거 사용
        Integer user_idx = (Integer) session.getAttribute("idx");
//        System.out.println(map.get("review_rate"));
//        System.out.println(map.get("review_rate").getClass().getName());
//        Integer review_rate = (int)map.get("review_rate");
        reviewDto.setUser_idx(user_idx);
        System.out.println("별점Controller 삭제 = movie_idx: " + reviewDto.getMovie_idx()+" review_rate: " +reviewDto.getReview_rate() + " user_idx: " + reviewDto.getUser_idx());
        return movieDetailService.deleteRate(reviewDto);

    }

//    @PostMapping ("/review")
//    @ResponseBody
//        public List<ReviewDto> review(@RequestBody ReviewDto reviewDto)throws Exception{
//        System.out.println("맵:"+ reviewDto.getMovie_idx());
//        int tmp = reviewDto.getMovie_idx();
//        List<ReviewDto> list = movieDetailService.reviewList(tmp);
//
//
//        return list;
//    }

    @PostMapping("/addReview")
    public String addReview(ReviewDto reviewDto, HttpSession session, Model m)throws Exception{
        Integer user_idx = (Integer) session.getAttribute("idx");
        System.out.println(reviewDto.getReview_text());
        int tmp = reviewDto.getMovie_idx();
        reviewDto.setUser_idx(user_idx);
        movieDetailService.addReview(reviewDto);
        m.addAttribute("chk",reviewDto);
        return "redirect:/movie/detail?movie_idx="+tmp;
    }

    private boolean loginChk(HttpServletRequest request) {
        HttpSession session = request.getSession();
        return session.getAttribute("id") != null; // 세션통에 id가 있다
        // 로그인 한 상태면 true, 아니면 false;
    }

}

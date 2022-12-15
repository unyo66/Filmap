package com.bitstudy.app.service;

import com.bitstudy.app.dao.MovieDetailDao;
import com.bitstudy.app.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MovieDetailService {

    @Autowired
    MovieDetailDao movieDetailDao;

    public MovieDetailDto detailMovie(Integer movie_idx) throws Exception {
        MovieDetailDto tmp = movieDetailDao.detailMovie(movie_idx);
        int tmp2 = movieDetailDao.movieRate(movie_idx);
        String genre = movieDetailDao.movieGenre(movie_idx);
        String ott = movieDetailDao.movieOtt(movie_idx);
        tmp.setGenre(genre);
        tmp.setOtt(ott);
        System.out.println("영화 점수: " + tmp.getMovie_rate() + "  유저평가점수: "+ tmp2);
        if(tmp2 != 0){
            tmp.setMovie_rate(tmp2);
            System.out.println("변환한 점수: " + tmp.getMovie_rate());
        }

        return tmp;
    }

    public AppearanceDto appDirect(Integer movie_idx) throws Exception {
        return movieDetailDao.appDirect(movie_idx);
    }
    public List<AppearanceDto> appActor(Integer movie_idx)throws Exception{
        List list = movieDetailDao.appActor(movie_idx);

        return movieDetailDao.ActorList(list);
    }
    public List<MovieDetailDto> movieList(Integer movie_idx) {
        return movieDetailDao.movieList(movie_idx);
    }
    //----------------------------------------------------
    // 찜하기 읽기
    public UserStoreDto readMyMovie(Integer user_idx, Integer movie_idx) throws Exception {
        System.out.println("Service-찜하기읽기: U_idx: " +user_idx+" M_idx: "+movie_idx);
        return movieDetailDao.readMyMovie(user_idx,movie_idx);
    }
    //찜하기
    public int addMyMovie(UserStoreDto userStoreDto) throws Exception {
        return movieDetailDao.addMyMovie(userStoreDto);
    }
    public int deleteMyMovie(UserStoreDto userStoreDto) throws Exception{
        return movieDetailDao.deleteMyMovie(userStoreDto);
    }
    //----------------------------------------------------



    //별점 가져오기
    public ReviewDto myRating(Integer user_idx, Integer movie_idx) throws Exception{
        System.out.println("Service-별점가져오기: U_idx: " +user_idx+" M_idx: "+movie_idx);
        return movieDetailDao.myRating(user_idx,movie_idx);
    }
    public int addRate(ReviewDto reviewDto) throws Exception {
        System.out.println("별점 Service 등록 = " + reviewDto.getMovie_idx()+" / "+reviewDto.getReview_rate()+" / "+reviewDto.getUser_idx());
        int rateChk = movieDetailDao.searchRate(reviewDto);
        System.out.println(" 별점등록 rateChk :"+ rateChk);
        if(rateChk != 0){
            movieDetailDao.deleteRate(reviewDto);
            System.out.println(" 별점등록 rateChk 삭제");
//            return  movieDetailDao.addRata(reviewDto);
        }

        return  movieDetailDao.addRata(reviewDto);
    }
    public int deleteRate(ReviewDto reviewDto) {
        System.out.println("별점 Service 삭제 = " + reviewDto.getMovie_idx()+" / "+reviewDto.getReview_rate()+" / "+reviewDto.getUser_idx());
        return movieDetailDao.deleteRate(reviewDto);
    }

//    ------------리뷰
    public List<ReviewDto> reviewList(Integer movie_idx){
        System.out.println("Service 리뷰버튼작동");
        return movieDetailDao.reviewList(movie_idx);
    }



    //------------------미구현-------------------------

    public List<CommentDto> cmtList(Integer movie_idx) throws Exception {
        return movieDetailDao.cmtList(movie_idx);
    }

    public Integer addReview(ReviewDto reviewDto) throws Exception{
        return movieDetailDao.addReview(reviewDto);
    }
}

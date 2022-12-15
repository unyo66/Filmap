package com.bitstudy.app.dao;

import com.bitstudy.app.domain.*;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MovieDetailDao {

    @Autowired
    private SqlSession session;

    private static String namespace = "com.bitstudy.app.dao.movieDetailMapper.";

    // 영화상세페이지 데이터 불러오기
    public MovieDetailDto detailMovie(Integer movie_idx){
//        System.out.println("dao : " + movie_idx);
        return session.selectOne(namespace+"movieDetail",movie_idx);
    }
    public int movieRate(Integer movie_idx){
        return session.selectOne(namespace+"movieRate",movie_idx);
    }
    public String movieGenre(Integer movie_idx){
        return session.selectOne(namespace+"movieGenre",movie_idx);
    }
    public String movieOtt(Integer movie_idx){
        return session.selectOne(namespace+"movieOtt",movie_idx);
    }
    // 영화 출연진 불러오기
    public AppearanceDto appDirect(Integer movie_idx) {
        return session.selectOne(namespace+"appDirect",movie_idx);
    }

    public List<AppearanceDto> appActor(Integer movie_idx) {
        return session.selectList(namespace+"appActor",movie_idx);
    }
    public List<AppearanceDto> ActorList(List list) {
        return session.selectList(namespace + "actorList",list);

    }

    public List<MovieDetailDto> movieList(Integer movie_idx) {
        return session.selectList(namespace+"movieList",movie_idx);
    }

//    찜하기(북마크)
    public UserStoreDto readMyMovie(Integer user_idx, Integer movie_idx) throws Exception{
        Map map = new HashMap();
        map.put("user_idx",user_idx);
        map.put("movie_idx",movie_idx);
        return session.selectOne(namespace + "readMyMovie",map);
    }
    public int addMyMovie(UserStoreDto userStoreDto) {
        return session.insert(namespace + "addMyMovie",userStoreDto);
    }
    public int deleteMyMovie(UserStoreDto userStoreDto){
        return session.delete(namespace + "deleteMyMovie",userStoreDto);
    }


    public ReviewDto myRating(Integer user_idx, Integer movie_idx) throws Exception{
        Map map = new HashMap();
        map.put("user_idx",user_idx);
        map.put("movie_idx",movie_idx);
        return session.selectOne(namespace + "myRating",map);
    }
    public int searchRate(ReviewDto reviewDto) throws Exception {
        System.out.println("별점 Dao - searchRate");
        return session.selectOne(namespace + "searchRate",reviewDto);
    }
    public int addRata(ReviewDto reviewDto)throws Exception{
        System.out.println("별점 Dao 등록 = " + reviewDto.getMovie_idx()+" / "+reviewDto.getReview_rate()+" / "+reviewDto.getUser_idx());
        return session.insert(namespace + "addRata",reviewDto);
    }

    public int deleteRate(ReviewDto reviewDto) {
        System.out.println("별점 Dao 삭제 = " + reviewDto.getMovie_idx()+" / "+reviewDto.getReview_rate()+" / "+reviewDto.getUser_idx());
        return session.insert(namespace + "deleteRate",reviewDto);
    }

//    탭버튼 -> 리뷰
    public List<ReviewDto> reviewList(Integer movie_idx){
        return session.selectList(namespace+"reviewList",movie_idx);
    }

//  -------------------------------------  미구현
    public List<CommentDto> cmtList(Integer movie_idx)throws Exception {
        return session.selectList(namespace + "cmtList",movie_idx);
    }

    public Integer addReview(ReviewDto reviewDto) throws Exception{
        return session.insert(namespace+"addReview",reviewDto);
    }
}

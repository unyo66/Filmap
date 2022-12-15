package com.bitstudy.app.domain;

public class UserStoreDto {

    private int movie_idx;
    private int user_idx;
    private String user_id;
    private Integer bookmark;
    private int review_rate;

    public UserStoreDto(){}

    public UserStoreDto(int movie_idx, int user_idx, String user_id, int bookmark, int review_rate) {
        this.movie_idx = movie_idx;
        this.user_idx = user_idx;
        this.user_id = user_id;
        this.bookmark = bookmark;
        this.review_rate = review_rate;
    }

    @Override
    public String toString() {
        return "UserStore{" +
                "movie_idx=" + movie_idx +
                ", user_idx=" + user_idx +
                ", user_id='" + user_id + '\'' +
                ", bookmark=" + bookmark +
                ", review_rate=" + review_rate +
                '}';
    }

    public int getMovie_idx() {
        return movie_idx;
    }

    public void setMovie_idx(int movie_idx) {
        this.movie_idx = movie_idx;
    }

    public int getUser_idx() {
        return user_idx;
    }

    public void setUser_idx(int user_idx) {
        this.user_idx = user_idx;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public int getBookmark() {
        return bookmark;
    }

    public void setBookmark(int bookmark) {
        this.bookmark = bookmark;
    }

    public int getReview_rate() {
        return review_rate;
    }

    public void setReview_rate(int review_rate) {
        this.review_rate = review_rate;
    }
}

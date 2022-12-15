package com.bitstudy.app.domain;

public class MyDto {
    private int movie_idx;
    private String user_id;
    private String user_name;
    private int following;
    private int followed;

    private String movie_title;
    private String movie_img;
    private int review_rate;
    private String review_text;

    private String following_name;


    @Override
    public String toString() {
        return "MyDto{" +
                "movie_idx='" + movie_idx + '\'' +
                "user_id='" + user_id + '\'' +
                ", user_name='" + user_name + '\'' +
                ", following=" + following +
                ", followed=" + followed +
                ", movie_title='" + movie_title + '\'' +
                ", movie_img='" + movie_img + '\'' +
                ", review_rate=" + review_rate +
                ", text='" + review_text + '\'' +
                ", following_name='" + following_name + '\'' +
                '}';
    }

    public int getMovie_idx() {
        return movie_idx;
    }

    public void setMovie_idx(int movie_idx) {
        this.movie_idx = movie_idx;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public int getFollowing() {
        return following;
    }

    public void setFollowing(int following) {
        this.following = following;
    }

    public int getFollowed() {
        return followed;
    }

    public void setFollowed(int followed) {
        this.followed = followed;
    }

    public String getMovie_title() {
        return movie_title;
    }

    public void setMovie_title(String movie_title) {
        this.movie_title = movie_title;
    }

    public String getMovie_img() {
        return movie_img;
    }

    public void setMovie_img(String movie_img) {
        this.movie_img = movie_img;
    }

    public int getReview_rate() {
        return review_rate;
    }

    public void setReview_rate(int review_rate) {
        this.review_rate = review_rate;
    }

    public String getReview_text() {
        return review_text;
    }

    public void setReview_text(String review_text) {
        this.review_text = review_text;
    }

    public String getFollowing_name() {
        return following_name;
    }

    public void setFollowing_name(String following_name) {
        this.following_name = following_name;
    }
}

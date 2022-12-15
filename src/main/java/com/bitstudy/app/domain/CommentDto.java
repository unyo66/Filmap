package com.bitstudy.app.domain;

import java.util.Date;

public class CommentDto {
    private int user_idx;
    private String user_name;
    private int review_idx;
    private int review_rate;
    private String review_text;
    private int review_spoiler;
    private Date review_add_date;

    private CommentDto(){}

    public CommentDto(int user_idx, String user_name, int review_idx, int review_rate, String review_text, int review_spoiler, Date review_add_date) {
        this.user_idx = user_idx;
        this.user_name = user_name;
        this.review_idx = review_idx;
        this.review_rate = review_rate;
        this.review_text = review_text;
        this.review_spoiler = review_spoiler;
        this.review_add_date = review_add_date;
    }



    public int getUser_idx() {
        return user_idx;
    }

    public void setUser_idx(int user_idx) {
        this.user_idx = user_idx;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public int getReview_idx() {
        return review_idx;
    }

    public void setReview_idx(int review_idx) {
        this.review_idx = review_idx;
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

    public int getReview_spoiler() {
        return review_spoiler;
    }

    public void setReview_spoiler(int review_spoiler) {
        this.review_spoiler = review_spoiler;
    }

    public Date getReview_add_date() {
        return review_add_date;
    }

    public void setReview_add_date(Date review_add_date) {
        this.review_add_date = review_add_date;
    }
}

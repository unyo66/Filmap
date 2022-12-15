package com.bitstudy.app.domain;

public class MainDto {
    private int movie_idx;
    private String movie_title;
    private String movie_img;
    private String preview_video;

    @Override
    public String toString() {
        return "MainDto{" +
                "movie_idx='" + movie_idx + '\'' +
                "movie_title='" + movie_title + '\'' +
                ", movie_img='" + movie_img + '\'' +
                ", preview_video='" + preview_video + '\'' +
                '}';
    }

    public int getMovie_idx() {
        return movie_idx;
    }

    public void setMovie_idx(int movie_idx) {
        this.movie_idx = movie_idx;
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

    public String getPreview_video() {
        return preview_video;
    }
    public void setPreview_video(String preview_video) {
        this.preview_video = preview_video;
    }
}

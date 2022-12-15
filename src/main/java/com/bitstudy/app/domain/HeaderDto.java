package com.bitstudy.app.domain;

public class HeaderDto {
    private int movie_idx;
    private String movie_title;
    private String movie_img;

    @Override
    public String toString() {
        return "HeaderDto{" +
                "movie_idx='" + movie_idx + '\'' +
                "movie_title='" + movie_title + '\'' +
                ", movie_img='" + movie_img + '\'' +
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
}

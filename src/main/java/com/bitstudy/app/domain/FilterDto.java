package com.bitstudy.app.domain;

import java.util.Arrays;

public class FilterDto {
    private Integer movie_idx;
    private String movie_title;
    private String movie_img;
    private String movie_plot;

    private String direct_name;
    private String actor_name[];


    @Override
    public String toString() {
        return "FilterDto{" +
                "movie_idx=" + movie_idx +
                ", movie_title='" + movie_title + '\'' +
                ", movie_img='" + movie_img + '\'' +
                ", movie_plot='" + movie_plot + '\'' +
                ", direct_name='" + direct_name + '\'' +
                ", actor_name=" + Arrays.toString(actor_name) +
                '}';
    }

    public Integer getMovie_idx() {
        return movie_idx;
    }

    public void setMovie_idx(Integer movie_idx) {
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

    public String getMovie_plot() {
        return movie_plot;
    }

    public void setMovie_plot(String movie_plot) {
        this.movie_plot = movie_plot;
    }

    public String getDirect_name() {
        return direct_name;
    }

    public void setDirect_name(String direct_name) {
        this.direct_name = direct_name;
    }

    public String[] getActor_name() {
        return actor_name;
    }

    public void setActor_name(String[] actor_name) {
        this.actor_name = actor_name;
    }
}
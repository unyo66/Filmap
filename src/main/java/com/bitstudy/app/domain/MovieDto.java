package com.bitstudy.app.domain;

import java.util.Date;

public class MovieDto {
    private Integer movie_idx;
    private String movie_title;
    private String nation;
    private int movie_level;
    private String movie_plot;
    private int movie_runtime;
    private int movie_rate;
    private String movie_date;
    private Date movie_add_date;
    private Date movie_edit_date;

    @Override
    public String toString() {
        return "MovieDto{" +
                "movie_idx=" + movie_idx +
                ", movie_title='" + movie_title + '\'' +
                ", nation='" + nation + '\'' +
                ", movie_level=" + movie_level +
                ", movie_plot='" + movie_plot + '\'' +
                ", movie_runtime=" + movie_runtime +
                ", movie_rate=" + movie_rate +
                ", movie_date='" + movie_date + '\'' +
                ", movie_add_date=" + movie_add_date +
                ", movie_edit_date=" + movie_edit_date +
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

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public int getMovie_level() {
        return movie_level;
    }

    public void setMovie_level(int movie_level) {
        this.movie_level = movie_level;
    }

    public String getMovie_plot() {
        return movie_plot;
    }

    public void setMovie_plot(String movie_plot) {
        this.movie_plot = movie_plot;
    }

    public int getMovie_runtime() {
        return movie_runtime;
    }

    public void setMovie_runtime(int movie_runtime) {
        this.movie_runtime = movie_runtime;
    }

    public int getMovie_rate() {
        return movie_rate;
    }

    public void setMovie_rate(int movie_rate) {
        this.movie_rate = movie_rate;
    }

    public String getMovie_date() {
        return movie_date;
    }

    public void setMovie_date(String movie_date) {
        this.movie_date = movie_date;
    }

    public Date getMovie_add_date() {
        return movie_add_date;
    }

    public void setMovie_add_date(Date movie_add_date) {
        this.movie_add_date = movie_add_date;
    }

    public Date getMovie_edit_date() {
        return movie_edit_date;
    }

    public void setMovie_edit_date(Date movie_edit_date) {
        this.movie_edit_date = movie_edit_date;
    }
}

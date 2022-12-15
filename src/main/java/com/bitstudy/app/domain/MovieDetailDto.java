package com.bitstudy.app.domain;

public class MovieDetailDto {

    private int movie_idx;
    private String movie_title;
    private String movie_nation;
    private String movie_level;
    private String movie_plot;
    private int movie_runtime;
    private String movie_img;
    private String movie_date;
    private double movie_rate;
    private String genre;
    private String ott;

    public  MovieDetailDto(){}
    public MovieDetailDto(int movie_idx, String movie_title, String movie_nation, String movie_level, String movie_plot, int movie_runtime, String movie_img, String movie_date, int movie_rate, String genre, String ott) {
        this.movie_idx = movie_idx;
        this.movie_title = movie_title;
        this.movie_nation = movie_nation;
        this.movie_level = movie_level;
        this.movie_plot = movie_plot;
        this.movie_runtime = movie_runtime;
        this.movie_img = movie_img;
        this.movie_date = movie_date;
        this.movie_rate = movie_rate;
        this.genre = genre;
        this.ott = ott;
    }

    @Override
    public String toString() {
        return "MovieDetailDto{" +
                "movie_idx=" + movie_idx +
                ", movie_title='" + movie_title + '\'' +
                ", nation='" + movie_nation + '\'' +
                ", movie_level='" + movie_level + '\'' +
                ", movie_plot='" + movie_plot + '\'' +
                ", movie_runtime=" + movie_runtime +
                ", movie_img='" + movie_img + '\'' +
                ", movie_date='" + movie_date + '\'' +
                ", movie_rate=" + movie_rate +
                ", genre='" + genre + '\'' +
                ", ott='" + ott + '\'' +
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

    public String getNation() {
        return movie_nation;
    }

    public void setNation(String nation) {
        this.movie_nation = nation;
    }

    public String getMovie_level() {
        return movie_level;
    }

    public void setMovie_level(String movie_level) {
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

    public String getMovie_img() {
        return movie_img;
    }

    public void setMovie_img(String movie_img) {
        this.movie_img = movie_img;
    }

    public String getMovie_date() {
        return movie_date;
    }

    public void setMovie_date(String movie_date) {
        this.movie_date = movie_date;
    }

    public double getMovie_rate() {
        return movie_rate;
    }

    public void setMovie_rate(double movie_rate) {
        this.movie_rate = movie_rate;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getOtt() {
        return ott;
    }

    public void setOtt(String ott) {
        this.ott = ott;
    }
}
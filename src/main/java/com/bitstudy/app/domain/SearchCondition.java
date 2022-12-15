package com.bitstudy.app.domain;

import java.util.Arrays;

public class SearchCondition {
    private String[] genre;
    private String movie_nation;
    private String movie_level;
    private String OTT;
    private int movie_runtime_from = -1;
    private int movie_runtime_to = -1;
    private String[] movie_date;

    @Override
    public String toString() {
        return "SearchCondition{" +
                "genre=" + Arrays.toString(genre) +
                ", movie_nation='" + movie_nation + '\'' +
                ", movie_level='" + movie_level + '\'' +
                ", OTT='" + OTT + '\'' +
                ", movie_runtime_from=" + movie_runtime_from +
                ", movie_runtime_to=" + movie_runtime_to +
                ", movie_date=" + Arrays.toString(movie_date) +
                '}';
    }

    public String[] getGenre() {
        return genre;
    }

    public void setGenre(String[] genre) {
        this.genre = genre;
    }

    public String getMovie_nation() {
        return movie_nation;
    }

    public void setMovie_nation(String movie_nation) {
        this.movie_nation = movie_nation;
    }

    public String getMovie_level() {
        return movie_level;
    }

    public void setMovie_level(String movie_level) {
        this.movie_level = movie_level;
    }

    public String getOTT() {
        return OTT;
    }

    public void setOTT(String OTT) {
        this.OTT = OTT;
    }

    public int getMovie_runtime_from() {
        return movie_runtime_from;
    }

    public void setMovie_runtime_from(int movie_runtime_from) {
        this.movie_runtime_from = movie_runtime_from;
    }

    public int getMovie_runtime_to() {
        return movie_runtime_to;
    }

    public void setMovie_runtime_to(int movie_runtime_to) {
        this.movie_runtime_to = movie_runtime_to;
    }

    public String[] getMovie_date() {
        return movie_date;
    }

    public void setMovie_date(String[] movie_date) {
        this.movie_date = movie_date;
    }
}

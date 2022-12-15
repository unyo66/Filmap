package com.bitstudy.app.domain;

public class AppearanceDto {

    private int movie_idx;
    private int direct_idx;
    private String direct_name;
    private String direct_img;
    private int actor_idx;
    private String actor_name;
    private String actor_img;

    public AppearanceDto(){}
    public AppearanceDto(int movie_idx, int direct_idx, String direct_name, String direct_img, int actor_idx, String actor_name, String actor_img) {
        this.movie_idx = movie_idx;
        this.direct_idx = direct_idx;
        this.direct_name = direct_name;
        this.direct_img = direct_img;
        this.actor_idx = actor_idx;
        this.actor_name = actor_name;
        this.actor_img = actor_img;
    }

    @Override
    public String toString() {
        return "AppearanceDto{" +
                "movie_idx=" + movie_idx +
                ", direct_idx=" + direct_idx +
                ", direct_name='" + direct_name + '\'' +
                ", direct_img='" + direct_img + '\'' +
                ", actor_idx=" + actor_idx +
                ", actor_name='" + actor_name + '\'' +
                ", actor_img='" + actor_img + '\'' +
                '}';
    }

    public int getMovie_idx() {
        return movie_idx;
    }

    public void setMovie_idx(int movie_idx) {
        this.movie_idx = movie_idx;
    }

    public int getDirect_idx() {
        return direct_idx;
    }

    public void setDirect_idx(int direct_idx) {
        this.direct_idx = direct_idx;
    }

    public String getDirect_name() {
        return direct_name;
    }

    public void setDirect_name(String direct_name) {
        this.direct_name = direct_name;
    }

    public String getDirect_img() {
        return direct_img;
    }

    public void setDirect_img(String direct_img) {
        this.direct_img = direct_img;
    }

    public int getActor_idx() {
        return actor_idx;
    }

    public void setActor_idx(int actor_idx) {
        this.actor_idx = actor_idx;
    }

    public String getActor_name() {
        return actor_name;
    }

    public void setActor_name(String actor_name) {
        this.actor_name = actor_name;
    }

    public String getActor_img() {
        return actor_img;
    }

    public void setActor_img(String actor_img) {
        this.actor_img = actor_img;
    }
}

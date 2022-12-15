package com.bitstudy.app.domain;

public class PreviewDto {
    private String movie_idx;
    private String title;
    private String post;
    private String director;
    private String actor;
    private String summary;
    private String link;
    public PreviewDto() {
    }

    public void setMovie_idx(String movie_idx){
        this.movie_idx = movie_idx;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public  void setPost(String post){
        this.post = post;
    }

    public void setDirector(String director){
        this.director = director;
    }

    public  void setActor(String actor){
        this.actor= actor;
    }

    public void setSummary(String summary){
        this.summary = summary;
    }

    public  void setLink(String link){
        this.link= link;
    }

    public String getMovie_idx() {
        return movie_idx;
    }

    public String getTitle(){
        return title;
    }

    public String getPost(){
        return post;
    }

    public String getDirector(){
        return director;
    }

    public String getActor(){
        return actor;
    }

    public String getSummary(){
        return summary;
    }

    public String getLink(){
        return link;
    }

    public PreviewDto(String movie_idx, String title, String post, String director, String actor, String summary, String link){
        super();
        this.movie_idx = movie_idx;
        this.title = title;
        this.post = post;
        this.director = director;
        this.actor = actor;
        this.summary = summary;
        this.link = link;
    }

    @Override
    public  String toString() {
        return "PreviewDto [movie_idx=" + movie_idx + ", title=" + title + ", post=" + post + ", director=" + director + ", actor=" + actor +
                ", summary=" + summary+ ", link=" + link + "]";
    }
}

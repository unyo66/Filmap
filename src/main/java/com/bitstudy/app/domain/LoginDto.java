package com.bitstudy.app.domain;

public class LoginDto {
    private int user_idx;
    private String user_id;
    private String user_pw;
    private String user_salt;
    private String user_name;

    @Override
    public String toString() {
        return "LoginDto{" +
                "user_idx=" + user_idx +
                ", user_id='" + user_id + '\'' +
                ", user_pw='" + user_pw + '\'' +
                ", user_salt='" + user_salt + '\'' +
                ", user_name='" + user_name + '\'' +
                '}';
    }

    public int getUser_idx() {
        return user_idx;
    }

    public void setUser_idx(int user_idx) {
        this.user_idx = user_idx;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getUser_salt() {
        return user_salt;
    }

    public void setUser_salt(String user_salt) {
        this.user_salt = user_salt;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
}

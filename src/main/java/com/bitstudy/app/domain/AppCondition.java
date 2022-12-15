package com.bitstudy.app.domain;

import java.util.Arrays;

public class AppCondition {
    private int[] movie_idx;

    @Override
    public String toString() {
        return "AppCondition{" +
                "movie_idx=" + Arrays.toString(movie_idx) +
                '}';
    }

    public int[] getMovie_idx() {
        return movie_idx;
    }

    public void setMovie_idx(int[] movie_idx) {
        this.movie_idx = movie_idx;
    }
}

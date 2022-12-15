package com.bitstudy.app.dao;

import com.bitstudy.app.domain.MovieDto;

public interface DetailDao {
    MovieDto select(int movie_idx);
}

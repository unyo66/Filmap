package com.bitstudy.app.service;

import com.bitstudy.app.dao.DetailDao;
import com.bitstudy.app.domain.MovieDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailService {

    @Autowired
    DetailDao detailDao;

    public MovieDto getMovie(Integer movie_idx) throws Exception {
        MovieDto movieDto = detailDao.select(movie_idx);
        return movieDto;
    }
}

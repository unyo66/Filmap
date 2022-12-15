package com.bitstudy.app.dao;

import com.bitstudy.app.domain.MovieDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DetailDaoImpl implements DetailDao {

    @Autowired
    private SqlSession session;

    String namespace = "com.bitstudy.app.dao.DetailMapper.";

    @Override
    public MovieDto select(int movie_idx) {
        return session.selectOne(namespace+"select", movie_idx);
    }
}

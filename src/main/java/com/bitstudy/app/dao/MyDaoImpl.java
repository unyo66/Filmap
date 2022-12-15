package com.bitstudy.app.dao;

import com.bitstudy.app.domain.MyDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MyDaoImpl implements MyDao {
    @Autowired
    private SqlSession session;
    private static String namespace = "com.bitstudy.app.dao.MyMapper.";

    @Override
    public List<MyDto> selectMyFollowing(int user_idx) {
        return session.selectList(namespace+"selectMyFollowing", user_idx);
    }
    @Override
    public List<MyDto> selectMyFollowed(int user_idx) {
        return session.selectList(namespace+"selectMyFollowed", user_idx);
    }
    @Override
    public List<MyDto> selectMyReview(int user_idx) {
        return session.selectList(namespace+"selectMyReview", user_idx);
    }
    @Override
    public List<MyDto> selectMyBookmark(int user_idx) {
        return session.selectList(namespace+"selectMyBookmark", user_idx);
    }
}

package com.bitstudy.app.service;

import com.bitstudy.app.dao.MyDao;
import com.bitstudy.app.dao.MyDaoImpl;
import com.bitstudy.app.domain.MyDto;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MyServiceImpl implements MyService {

    @Autowired
    MyDao myDao;

    @Override
    public List<MyDto> selectMyFollowing(int user_idx){
        return myDao.selectMyFollowing(user_idx);
    }
    @Override
    public List<MyDto> selectMyFollowed(int user_idx){
        return myDao.selectMyFollowed(user_idx);
    }
    @Override
    public List<MyDto> selectMyReview(int user_idx){
        return myDao.selectMyReview(user_idx);
    }
    @Override
    public List<MyDto> selectMyBookmark(int user_idx){
        return myDao.selectMyBookmark(user_idx);
    }
}

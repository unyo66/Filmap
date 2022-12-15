package com.bitstudy.app.dao;

import com.bitstudy.app.domain.MyDto;

import java.util.List;

public interface MyDao {
    List<MyDto> selectMyFollowing(int user_idx);

    List<MyDto> selectMyFollowed(int user_idx);

    List<MyDto> selectMyReview(int user_idx);

    List<MyDto> selectMyBookmark(int user_idx);
}

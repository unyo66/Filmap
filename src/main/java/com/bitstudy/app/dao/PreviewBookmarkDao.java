package com.bitstudy.app.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PreviewBookmarkDao {
    @Autowired
    private SqlSession session;
    private static String namespace = "com.bitstudy.app.dao.PreviewMapper.";

    public List<Integer> countPreview() {
        return session.selectList(namespace+"countPreview");
    }
    public List<Integer> countBookmark(int user_idx) {
        return session.selectList(namespace+"countBookmark",user_idx);
    }
}

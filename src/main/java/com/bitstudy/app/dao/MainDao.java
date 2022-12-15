package com.bitstudy.app.dao;

import com.bitstudy.app.domain.MainDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MainDao {
    @Autowired
    private SqlSession session;
    private static String namespace = "com.bitstudy.app.dao.MainMapper.";

    public List<MainDto> selectMain() throws Exception {
        return session.selectList(namespace+"selectMain");
    }
    public List<MainDto> selectOTT(String OTT) throws Exception {
        return session.selectList(namespace+"selectOTT", OTT);
    }
}

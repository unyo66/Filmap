package com.bitstudy.app.dao;

import com.bitstudy.app.domain.HeaderDto;
import com.bitstudy.app.domain.LoginDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HeaderDaoImpl implements HeaderDao {
    @Autowired
    private SqlSession session;
    private static String namespace = "com.bitstudy.app.dao.HeaderMapper.";

    @Override
    public List<HeaderDto> search(String input) throws Exception {
        List<HeaderDto> searchResult = session.selectList(namespace+"search", input);
        if (searchResult.isEmpty()) {
            System.out.println("search : null");
        }
        return searchResult;
    }

    @Override
    public LoginDto login(LoginDto loginDto) throws Exception {
        LoginDto loginDB = session.selectOne(namespace+"login",loginDto);
        if (loginDB == null) {
            System.out.println("id : null");
        }
        return loginDB;
    };

    @Override
    public int register(LoginDto loginDto) throws Exception {
        return session.insert(namespace+"register", loginDto);
    }

}

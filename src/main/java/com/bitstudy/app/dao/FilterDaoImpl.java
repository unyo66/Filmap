package com.bitstudy.app.dao;

import com.bitstudy.app.domain.AppCondition;
import com.bitstudy.app.domain.AppDto;
import com.bitstudy.app.domain.FilterDto;
import com.bitstudy.app.domain.SearchCondition;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.logging.Filter;

@Repository
public class FilterDaoImpl implements FilterDao {
    @Autowired
    private SqlSession session;
    private static String namespace = "com.bitstudy.app.dao.FilterMapper.";

    @Override
    public List<FilterDto> selectAll(SearchCondition sc) throws Exception {
        return session.selectList(namespace+"selectAll", sc);
    }

    @Override
    public List<AppDto> selectApp(AppCondition ac) throws Exception {
        return session.selectList(namespace+"selectApp", ac);
    }

    @Override
    public List<AppDto> selectDirect(AppCondition ac) throws Exception {
        return session.selectList(namespace+"selectDirect", ac);
    }

}

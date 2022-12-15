package com.bitstudy.app.dao;

import com.bitstudy.app.domain.AppCondition;
import com.bitstudy.app.domain.AppDto;
import com.bitstudy.app.domain.FilterDto;
import com.bitstudy.app.domain.SearchCondition;

import java.util.List;

public interface FilterDao {
   List<FilterDto> selectAll(SearchCondition sc) throws Exception;

    List<AppDto> selectApp(AppCondition ac) throws Exception;

    List<AppDto> selectDirect(AppCondition ac)  throws Exception;
}

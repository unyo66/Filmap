package com.bitstudy.app.service;

import com.bitstudy.app.domain.AppCondition;
import com.bitstudy.app.domain.AppDto;
import com.bitstudy.app.domain.FilterDto;

import java.util.List;

public interface FilterService {
    List<FilterDto> selectAll(String input) throws Exception;

    List<AppDto> selectDirect(AppCondition ac) throws Exception;
}

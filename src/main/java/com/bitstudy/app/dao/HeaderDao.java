package com.bitstudy.app.dao;

import com.bitstudy.app.domain.HeaderDto;
import com.bitstudy.app.domain.LoginDto;

import java.util.List;

public interface HeaderDao {
    List<HeaderDto> search(String input) throws Exception;
    LoginDto login(LoginDto loginDto) throws Exception;
    int register(LoginDto loginDto) throws Exception;
}

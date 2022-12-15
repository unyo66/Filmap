package com.bitstudy.app.service;

import com.bitstudy.app.domain.HeaderDto;
import com.bitstudy.app.domain.LoginDto;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface HeaderService {
    List<HeaderDto> search(String input) throws Exception;
    String SHA_256(String m_pw) throws NoSuchAlgorithmException;
    String salt() throws NoSuchAlgorithmException;
    LoginDto login(LoginDto loginDto) throws Exception;
    int register(LoginDto loginDto) throws Exception;
}

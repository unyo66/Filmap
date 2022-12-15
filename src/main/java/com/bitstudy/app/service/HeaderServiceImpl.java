package com.bitstudy.app.service;

import com.bitstudy.app.dao.HeaderDao;
import com.bitstudy.app.domain.HeaderDto;
import com.bitstudy.app.domain.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;
@Repository
public class HeaderServiceImpl implements HeaderService {
    @Autowired
    HeaderDao headerDao;

    @Override
    public List<HeaderDto> search(String input) throws Exception {
        return headerDao.search(input);
    }

    @Override
    public String SHA_256(String m_pw) throws NoSuchAlgorithmException { // sha256
        String hex;
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(m_pw.getBytes());
        return hex = String.format("%064x", new BigInteger(1, md.digest()));
    }
    @Override
    public String salt() throws NoSuchAlgorithmException { // salt
        String salt;
        SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
        byte[] bytes = new byte[16];
        random.nextBytes(bytes);
        return salt = new String(Base64.getEncoder().encode(bytes));
    }
    @Override
    public LoginDto login(LoginDto loginDto) throws Exception {
        String inputPw = loginDto.getUser_pw();

        LoginDto loginDB = headerDao.login(loginDto);
        if (loginDB != null) {
            String outputPw = loginDB.getUser_pw();
            String salt = loginDB.getUser_salt();

            String compPw = SHA_256(salt+inputPw);
            System.out.println("hash : " + compPw);
            if (compPw.equals(outputPw)) {
                return loginDB;
            }
            else {
                loginDB = null;
            }
        }
        return loginDB;
    };
    @Override
    public int register(LoginDto loginDto) throws Exception {
        String salt = salt();
        System.out.println("salt : " + salt);
        loginDto.setUser_salt(salt);
        loginDto.setUser_pw(SHA_256(salt+loginDto.getUser_pw()));
        return headerDao.register(loginDto);
    }
}

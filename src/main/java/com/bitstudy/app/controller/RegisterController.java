package com.bitstudy.app.controller;

import com.bitstudy.app.domain.LoginDto;
import com.bitstudy.app.service.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class RegisterController {
    @Autowired
    HeaderService headerService;
    @GetMapping("/register")
    public String Register() {
        return "register";
    }

    @PostMapping("/registerAdd")
    @ResponseBody
    public Boolean login(@RequestBody Map<String, String> registerMap) throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUser_id(registerMap.get("user_id"));
        loginDto.setUser_pw(registerMap.get("user_pw"));
        loginDto.setUser_name(registerMap.get("user_name"));
        System.out.println(loginDto);
        int registerFlag = headerService.register(loginDto);
        System.out.println(registerFlag);
        if (registerFlag == 0) {
            return false;
        }
        return true;
    }
}


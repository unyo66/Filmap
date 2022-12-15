package com.bitstudy.app.controller;

import com.bitstudy.app.domain.FilterDto;
import com.bitstudy.app.domain.HeaderDto;
import com.bitstudy.app.domain.LoginDto;
import com.bitstudy.app.domain.MainSendDto;
import com.bitstudy.app.service.FilterService;
import com.bitstudy.app.service.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class HeaderController {

    @Autowired
    HeaderService headerService;

    @PostMapping("/search")
    @ResponseBody //서버에서 자바 객체를 보낼건데, 사용자에 도착하면 문자열로 바꿔서 보세요 라는 어노테이션
    public List<HeaderDto> text(@RequestBody String input) throws Exception { //Person 데이터를 문자열로 보내는데, 서버에 도착하면
        input = input.replace("\"", "");
        List<HeaderDto> list = headerService.search(input);
        if (list.size() == 0) {
            HeaderDto noResult = new HeaderDto();
            noResult.setMovie_title("null");
            list.add(noResult);
        }
        return list;
    }


    @PostMapping("/login")
    @ResponseBody
    public Boolean login(@RequestBody Map<String, String> loginMap, HttpServletRequest request) throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUser_id(loginMap.get("user_id"));
        loginDto.setUser_pw(loginMap.get("user_pw"));
        System.out.println(loginDto.getUser_id());
        LoginDto loginDB = headerService.login(loginDto);
        if (loginDB != null){
            String id = loginDB.getUser_id();
            String name = loginDB.getUser_name();
            int idx = loginDB.getUser_idx();
            HttpSession session = request.getSession();
            session.setAttribute("id", id);
            session.setAttribute("name", name);
            session.setAttribute("idx", idx);
            return true;
        }
        else {
            return false;
        }
    }

    @PostMapping("/logout")
    @ResponseBody
    public Boolean logout(HttpServletRequest request) throws Exception {
        HttpSession session = request.getSession();
        session.invalidate();
        return true;
    }


}

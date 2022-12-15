package com.bitstudy.app.controller;

import com.bitstudy.app.domain.FilterDto;
import com.bitstudy.app.domain.MainDto;
import com.bitstudy.app.domain.MainSendDto;
import com.bitstudy.app.service.MainService;
import com.sun.tools.javac.Main;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    MainService mainService;
    @GetMapping("/")
    public String Main(Model m) throws Exception {
        return "index";
    }
    @PostMapping("/sendMain")
    @ResponseBody //서버에서 자바 객체를 보낼건데, 사용자에 도착하면 문자열로 바꿔서 보세요 라는 어노테이션
    public MainSendDto sendMain() throws Exception { //Person 데이터를 문자열로 보내는데, 서버에 도착하면
        MainSendDto sendMain = mainService.mainSendDto();
        System.out.println(sendMain.getMain().get(0).getMovie_idx());
        return sendMain;
    }
}

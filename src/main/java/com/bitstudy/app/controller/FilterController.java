package com.bitstudy.app.controller;

import com.bitstudy.app.domain.AppDto;
import com.bitstudy.app.domain.FilterDto;
import com.bitstudy.app.domain.HeaderDto;
import com.bitstudy.app.service.FilterService;
import com.bitstudy.app.service.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class FilterController {
    @Autowired
    FilterService filterService;
    @GetMapping("/filter")
    public String search() throws Exception {
        return "filter";
    }
    @PostMapping("/send")
    @ResponseBody //서버에서 자바 객체를 보낼건데, 사용자에 도착하면 문자열로 바꿔서 보세요 라는 어노테이션
    public List<FilterDto> sendInfo(@RequestBody String input) throws Exception { //Person 데이터를 문자열로 보내는데, 서버에 도착하면
        input = input.replace("\"", "");
        System.out.println("input = " + input);
        List<FilterDto> list = filterService.selectAll(input);
        if (list.size() == 0) {
            FilterDto noResult = new FilterDto();
            noResult.setMovie_title("null");
            list.add(noResult);
        }
        return list;
    }

    @GetMapping("test2")
    public String test1(String input) throws Exception {
        String input1 = "movie_runtime_from:120,"; //test input
        List<FilterDto> list = filterService.selectAll(input1);
        list.forEach(n -> System.out.print(n.getMovie_title()));
        System.out.println(list.size());
        return "filter";
    }


}

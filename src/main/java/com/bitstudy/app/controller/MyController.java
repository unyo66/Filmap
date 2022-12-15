package com.bitstudy.app.controller;

import com.bitstudy.app.domain.LoginDto;
import com.bitstudy.app.domain.MyDto;
import com.bitstudy.app.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class MyController {
    @Autowired
    MyService myService;
    @RequestMapping("/my")
    public String my(HttpServletRequest request, Model m){
        HttpSession session = request.getSession();
        int user_idx = (int) session.getAttribute("idx");
        String user_name = (String) session.getAttribute("name");
        int following = myService.selectMyFollowing(user_idx).size();
        int followed = myService.selectMyFollowed(user_idx).size();
        m.addAttribute("following", following);
        m.addAttribute("followed", followed);
        m.addAttribute("user_name", user_name);
        return "my";
    }

    @PostMapping("/sendReview")
    @ResponseBody
    public List<MyDto> sendReview(@RequestBody int user_idx) throws Exception {
        List<MyDto> myDtoList = myService.selectMyReview(user_idx);
        if (myDtoList == null){
            MyDto myDto = new MyDto();
            myDto.setUser_id("null");
            myDtoList.add(myDto);
        }
        for (int i = 0; i < myDtoList.size(); i++) {
            if (myDtoList.get(i).getReview_text() == null) {
                myDtoList.get(i).setReview_text("작성된 리뷰가 없습니다.");
            }
        }
        return myDtoList;
    }
    @PostMapping("/sendBookmark")
    @ResponseBody
    public List<MyDto> sendBookmark(@RequestBody int user_idx) throws Exception {
        List<MyDto> myDtoList = myService.selectMyBookmark(user_idx);
        if (myDtoList == null){
            MyDto myDto = new MyDto();
            myDto.setUser_id("null");
            myDtoList.add(myDto);
        }
        return myDtoList;
    }
    @PostMapping("/sendFollow")
    @ResponseBody
    public List<MyDto> sendFollow(@RequestBody int user_idx) throws Exception {
        List<MyDto> myDtoList = myService.selectMyFollowing(user_idx);
        if (myDtoList == null){
            MyDto myDto = new MyDto();
            myDto.setUser_id("null");
            myDtoList.add(myDto);
        }
        return myDtoList;
    }

    @GetMapping("/testmy")
    public String testmy() {
        int test_idx = 6;
        List<MyDto> myDtoList;
        myDtoList = myService.selectMyFollowing(test_idx);
        System.out.print("\n following : ");
        myDtoList.forEach(n -> System.out.print(n.getUser_name()));

        myDtoList = myService.selectMyFollowed(test_idx);
        System.out.print("\n followed : ");
        myDtoList.forEach(n -> System.out.print(n.getUser_name()));

        myDtoList = myService.selectMyReview(3);
        System.out.print("\n review : ");
        myDtoList.forEach(n -> System.out.print(n.getReview_text()));

        myDtoList = myService.selectMyBookmark(test_idx);
        System.out.print("\n bookmark : ");
        myDtoList.forEach(n -> System.out.print(n.getMovie_title()));
        return "my";
    }

}

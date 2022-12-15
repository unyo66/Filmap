package com.bitstudy.app.controller;

import com.bitstudy.app.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Detail")
public class DetailpageController {

    @Autowired
    DetailService detailService;

//    @GetMapping("/")
}

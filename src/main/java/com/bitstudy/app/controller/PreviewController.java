package com.bitstudy.app.controller;

import com.bitstudy.app.dao.PreviewBookmarkDao;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class PreviewController {
    @Autowired
    PreviewBookmarkDao pbdao;
    @RequestMapping("/preview")
    public String preview(HttpSession session, Model m){
        int idx = (int) session.getAttribute("idx");
        List<Integer> previewList = pbdao.countPreview();
        List<Integer> bookmarkList = pbdao.countBookmark(idx);
        int tmpArr[] = new int[previewList.size()];
        for (int i = 0; i < tmpArr.length; i++) {
            tmpArr[i] = 0;
        }
        for (int i = 0; i < tmpArr.length; i++) {
            for (int j = 0; j < bookmarkList.size(); j++) {
                if (previewList.get(i) == bookmarkList.get(j)) {
                    tmpArr[i] = 1;
                }
            }
        }

        String tmpString = "";
        for (int i = 0; i < tmpArr.length; i++) {
            tmpString += tmpArr[i] + ",";
        }
        m.addAttribute("tmpString", tmpString);
        return "preview";
    }
}

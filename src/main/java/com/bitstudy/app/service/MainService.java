package com.bitstudy.app.service;

import com.bitstudy.app.dao.MainDao;
import com.bitstudy.app.domain.MainDto;
import com.bitstudy.app.domain.MainSendDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MainService {
    @Autowired
    MainDao mainDao;

    public MainSendDto mainSendDto() throws Exception {
        MainSendDto mainSendDto = new MainSendDto();
        mainSendDto.setMain(selectMain());
        mainSendDto.setNetflix(selectOTT("넷플릭스"));
        mainSendDto.setWatcha(selectOTT("왓챠"));
        mainSendDto.setWavve(selectOTT("웨이브"));
        mainSendDto.setTving(selectOTT("티빙"));
        mainSendDto.setDisney(selectOTT("디즈니+"));
        return mainSendDto;
    }
    public List<MainDto> selectMain() throws Exception {
        return mainDao.selectMain();
    }

    public List<MainDto> selectOTT(String OTT) throws Exception {
        return mainDao.selectOTT(OTT);
    }
}

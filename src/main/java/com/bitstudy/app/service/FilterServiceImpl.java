package com.bitstudy.app.service;

import com.bitstudy.app.dao.FilterDaoImpl;
import com.bitstudy.app.domain.AppCondition;
import com.bitstudy.app.domain.AppDto;
import com.bitstudy.app.domain.FilterDto;
import com.bitstudy.app.domain.SearchCondition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
public class FilterServiceImpl implements FilterService {
    @Autowired
    FilterDaoImpl filterDao;

    @Override
    public List<FilterDto> selectAll(String input) throws Exception {
//        String input = "genre:드라마,movie_nation:한국,movie_level:12세 이용가,OTT:왓챠,genre:스릴러,movie_runtime_from:80,movie_runtime_to:200,movie_date_from:2001,movie_date_to:2021"; //test input
        String tmpArr[] = input.split(",");
        String inputArr[][] = new String[tmpArr.length][];
        List<String> genreList = new ArrayList<>();

        int tmpRuntimeFrom = 0;
        int tmpRuntimeTo = 500;
        List<String> dateList = new ArrayList<>();
        int movie_date_from = 1950;
        Calendar cal = Calendar.getInstance();
        int movie_date_to = cal.getWeekYear();

        SearchCondition sc = new SearchCondition();
        for (int i = 0; i < tmpArr.length; i++) {
            inputArr[i] = tmpArr[i].split(":");
            switch (inputArr[i][0]) {
                case "genre" :
                    genreList.add(inputArr[i][1]);
                    break;
                case "movie_nation" :
                    sc.setMovie_nation(inputArr[i][1]);
                    break;
                case "movie_level" :
                    sc.setMovie_level(inputArr[i][1]);
                    break;
                case "OTT" :
                    sc.setOTT(inputArr[i][1]);
                    break;
                case "movie_runtime_from" :
                    tmpRuntimeFrom = Integer.parseInt(inputArr[i][1].replace("분", ""));
                    break;
                case "movie_runtime_to" :
                    tmpRuntimeTo = Integer.parseInt(inputArr[i][1].replace("분", ""));
                    break;
                case "movie_date_from" :
                    movie_date_from = Integer.parseInt(inputArr[i][1]);
                    break;
                case "movie_date_to" :
                    movie_date_to = Integer.parseInt(inputArr[i][1]);
                    break;
            }
            if (!genreList.isEmpty()) {
                sc.setGenre(genreList.toArray(new String[genreList.size()]));
            }
        }
        sc.setMovie_runtime_from(tmpRuntimeFrom);
        sc.setMovie_runtime_to(tmpRuntimeTo);

        if (movie_date_from > 1950 || movie_date_to != cal.getWeekYear()) {
            for (int j = movie_date_from; j <= movie_date_to; j++) {
                dateList.add(Integer.toString(j));
            }
            sc.setMovie_date(dateList.toArray(new String[dateList.size()]));
        }

        List<FilterDto> tmpList = filterDao.selectAll(sc);
        int tmp_idx[] = new int[tmpList.size()];
        for (int i = 0; i < tmp_idx.length; i++) {
            tmp_idx[i] = tmpList.get(i).getMovie_idx();
        }
        AppCondition ac = new AppCondition();
        ac.setMovie_idx(tmp_idx);
        List<AppDto> directList = filterDao.selectDirect(ac);
        for (int i = 0; i < tmpList.size(); i++) {
            tmpList.get(i).setDirect_name(directList.get(i).getDirect_name());
        }
        return tmpList;
    }
    public List<AppDto> selectDirect(AppCondition ac) throws Exception {
        return filterDao.selectApp(ac);
    }
}

package com.bitstudy.app.dao;

import com.bitstudy.app.domain.PreviewDto;
import org.checkerframework.checker.units.qual.A;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;

public class PreviewDAO extends DAO {

    Random ran = new Random();

    public ArrayList<PreviewDto> list = new ArrayList<PreviewDto>();
    public String link_split(String link){
        int link_len = link.length();
        String split_temp = link.substring((link_len-11), link_len);
        return split_temp;
    } // 주소 id만 자르기

    DirectDAO directDAO = new DirectDAO();
    ActorDAO actorDAO = new ActorDAO();

    int  i = 0;
    public PreviewDAO(){
        try {
            conn = DriverManager.getConnection(url, id, pw);
            String SQL = "select movie.movie_idx, movie.movie_title, movie.movie_plot, movie.movie_img, preview.preview_video \n" +
                    "from movie, preview where movie.movie_idx = preview.movie_idx";
            pstmt = conn.prepareStatement(SQL);
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                PreviewDto dto = new PreviewDto();
                dto.setMovie_idx(String.valueOf(rs.getInt("movie_idx")));
                dto.setTitle(rs.getString("movie_title"));
                dto.setPost(rs.getString("movie_img"));
                dto.setDirector(directDAO.Direct_arr.get(i));
                if(i == 0){
                    int len = actorDAO.actor_list.get(i).length();
                    String temp = actorDAO.actor_list.get(i);
                    dto.setActor(temp.substring(2, len));
                }
                else{
                    dto.setActor(actorDAO.actor_list.get(i));
                }
                dto.setSummary(rs.getString("movie_plot"));
                dto.setLink(link_split(rs.getString("preview_video")));
                list.add(dto);
                if(i == 57){
                    break;
                }
                i++;
            }
            pstmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

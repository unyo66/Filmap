package com.bitstudy.app.dao;

import com.bitstudy.app.domain.PreviewDto;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class ActorDAO extends DAO {
    
    public String split(String text){
        int link_len = text.length();
        String split_temp = text.substring(2, link_len);
        return split_temp;
    } // 이름 자르기

    ArrayList<String> actor_temp = new ArrayList<String>();
    //배우 임시 보관용
    ArrayList<String> actor_list = new ArrayList<String>();
    //배우 이름 넣기

    int line = 0;
    int count = 0;
    String name_temp = "";

    public ActorDAO(){
        try {
            conn = DriverManager.getConnection(url, id, pw);
            String SQL = "select preview.movie_idx, app_actor.actor_idx, actor.actor_name from preview, app_actor, actor where preview.movie_idx = app_actor.movie_idx\n" +
                    "and app_actor.actor_idx = actor.actor_idx";
            pstmt = conn.prepareStatement(SQL);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                String actor_name = rs.getString("actor_name"); // 배우이름
                int n = rs.getInt("movie_idx"); // 영화번호
                if(count == 0){
                    line = n;
                    count = 1;
                    actor_temp.clear();
                    actor_temp.add(name_temp);
                    actor_temp.set(0, actor_temp.get(0) + ", " + actor_name);
                }
                else{
                    if(n == line){
                        actor_temp.set(0, actor_temp.get(0) + ", " + actor_name);
                    }
                    else{
                        name_temp = actor_name;
                        //1개 씩 밀려서 temp에 저장 후 위에서 넣어주면됨
                        count = 0;
                        actor_list.add(actor_temp.get(0));
                    }
                }
            }
            pstmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
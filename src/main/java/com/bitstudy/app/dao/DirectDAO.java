package com.bitstudy.app.dao;

import com.bitstudy.app.domain.PreviewDto;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;

public class DirectDAO extends DAO {

    public ArrayList<String> Direct_arr = new ArrayList<String>();

    public DirectDAO(){
        try {
            conn = DriverManager.getConnection(url, id, pw);
            String SQL = "select preview.movie_idx, app_direct.direct_idx, direct.direct_name from preview, app_direct, direct where preview.movie_idx = app_direct.movie_idx\n" +
                    "and app_direct.direct_idx = direct.direct_idx";
            pstmt = conn.prepareStatement(SQL);
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                Direct_arr.add(rs.getString("direct_name"));
            }
            pstmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

package com.bitstudy.app.domain;

import java.util.Arrays;

public class AppDto {
    private String direct_name;

    @Override
    public String toString() {
        return "AppDto{" +
                "direct_name='" + direct_name + '\'' +
                '}';
    }

    public String getDirect_name() {
        return direct_name;
    }

    public void setDirect_name(String direct_name) {
        this.direct_name = direct_name;
    }
}

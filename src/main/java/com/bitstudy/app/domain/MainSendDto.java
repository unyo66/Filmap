package com.bitstudy.app.domain;

import java.util.List;

public class MainSendDto {
    private List<MainDto> main;
    private List<MainDto> netflix;
    private List<MainDto> watcha;
    private List<MainDto> wavve;
    private List<MainDto> tving;
    private List<MainDto> disney;

    @Override
    public String toString() {
        return "MainSendDto{" +
                "main=" + main +
                ", netflix=" + netflix +
                ", watcha=" + watcha +
                ", wavve=" + wavve +
                ", tving=" + tving +
                ", diseny=" + disney +
                '}';
    }

    public List<MainDto> getMain() {
        return main;
    }

    public void setMain(List<MainDto> main) {
        this.main = main;
    }

    public List<MainDto> getNetflix() {
        return netflix;
    }

    public void setNetflix(List<MainDto> netflix) {
        this.netflix = netflix;
    }

    public List<MainDto> getWatcha() {
        return watcha;
    }

    public void setWatcha(List<MainDto> watcha) {
        this.watcha = watcha;
    }

    public List<MainDto> getWavve() {
        return wavve;
    }

    public void setWavve(List<MainDto> wavve) {
        this.wavve = wavve;
    }

    public List<MainDto> getTving() {
        return tving;
    }

    public void setTving(List<MainDto> tving) {
        this.tving = tving;
    }

    public List<MainDto> getDisney() {
        return disney;
    }

    public void setDisney(List<MainDto> disney) {
        this.disney = disney;
    }
}

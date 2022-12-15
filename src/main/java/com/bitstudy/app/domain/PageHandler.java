package com.bitstudy.app.domain;

public class PageHandler {


    private int totalCount; // 총 게시물 개수
    private int pageSize; // 한 페이지당 보여줄 페이지 개수
    private int naviSize = 5; // 페이지 네비게이션의 크기. 이번엔 한번에 10개 페이지씩 보여주기
    private int totalPage; // 전체 페이지 개수
    private int page; // 현재 페이지
    private int beginPage; // 네비게이션의 첫번째 페이지
    private int endPage; // 네비게이션의 마지막 페이지
    private boolean showPrev; // [이전] 버튼 보여줄기 말지 결정
    private boolean showNext; // [다음] 버튼 보여줄기 말지 결정

    // 페이징 계산하는데 필요한게 '전체 게시물 개수, 현재 페이지, 한 페이지당 보여줄 페이지 개수' 임
    public PageHandler(int totalCount, int page, int pageSize) {
        this.totalCount = totalCount;
        this.page = page;
        this.pageSize = pageSize;

        totalPage = (int) Math.ceil(totalCount / (double)pageSize);
        //System.out.println("전체 페이지 수: " + totalPage);

        beginPage = (page - 1) / naviSize * naviSize + 1;
        endPage = Math.min( (beginPage + naviSize - 1) , totalPage);

        showPrev = beginPage != 1; // [이전] 버튼은 beginPage 가 1페이지만 아니면 나오면 된다.
        showNext = endPage != totalPage; // [다음] 버튼은 endPage 가 totalPage만 아니면 된다.
    }

    public PageHandler(int totalCount, int page) {
        this(totalCount, page, 10);
    }


    // TDD 에서 호출할때 페이지 네비게이션을 출력하는 부분을 만들어봅시다
    void print() {
//        if(showPrev)
        System.out.print(showPrev ? "[이전]":"");

        for(int i=beginPage; i<=endPage; i++) {
            System.out.print(" " + i + " ");
        }

//        if(showNext)
        System.out.print(showNext ? "[다음]":"");
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getNaviSize() {
        return naviSize;
    }

    public void setNaviSize(int naviSize) {
        this.naviSize = naviSize;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getBeginPage() {
        return beginPage;
    }

    public void setBeginPage(int beginPage) {
        this.beginPage = beginPage;
    }

    public int getEndPage() {
        return endPage;
    }

    public void setEndPage(int endPage) {
        this.endPage = endPage;
    }

    public boolean isShowPrev() {
        return showPrev;
    }

    public void setShowPrev(boolean showPrev) {
        this.showPrev = showPrev;
    }

    public boolean isShowNext() {
        return showNext;
    }

    public void setShowNext(boolean showNext) {
        this.showNext = showNext;
    }

    @Override
    public String toString() {
        return "Ex04_PageHandler{" +
                "totalCount=" + totalCount +
                ", pageSize=" + pageSize +
                ", naviSize=" + naviSize +
                ", totalPage=" + totalPage +
                ", page=" + page +
                ", beginPage=" + beginPage +
                ", endPage=" + endPage +
                ", showPrev=" + showPrev +
                ", showNext=" + showNext +
                '}';
    }

}

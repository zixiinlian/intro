"use strict"

$(function () {
    var Tab = function () {
        this.curTab = 1;
    };
    Tab.prototype = {
        init: function () {
            this.initEvent();
        },
        initEvent: function () {
            var that = this;
            $('.page-link a').on({
                click: function (e) {
                    that.curTab = e.target.className.charAt(3);
                    changePage(that.curTab);
                }
            });
        }
    };

    function changePage(tabIndex) {
        $('.page1,.page2,.page3').hide();
        $('.page' + tabIndex).show();
        $('.tab1,.tab2,.tab3').removeClass("active");
        $('.tab' + tabIndex).addClass("active");
    }

    var myTab = new Tab();
    myTab.init();
});
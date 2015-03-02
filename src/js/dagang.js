"use strict"

$(function () {
    var Accordion = function () {
        this.curTab = 1;
    };
    Accordion.prototype = {
        init: function () {
            this.initEvent();
        },
        initEvent: function () {
            var that = this;
            $('.dagang-list .item').on({
                click: function () {
                    if($(this).siblings(".item-content").css("display")==="block"){
                        $(this).siblings(".item-content").css({
                            display:"none"
                        });
                    }else{
                        $(this).siblings(".item-content").css({
                            display:"block"
                        });
                    }
                }
            });
        }
    };

    var myAccordion = new Accordion();
    myAccordion.init();
});
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
            $('.outline-list .item').on({
                click: function () {
                    if ($(this).siblings(".item-content").css("display") === "block") {
                        $(this).siblings(".item-content").css({
                            display: "none"
                        });
                        $(this).find(".arrow").addClass("icon-arrowdown").removeClass("icon-arrowup");
                    }
                    else {
                        $(this).siblings(".item-content").css({
                            display: "block"
                        });
                        $(this).find(".arrow").addClass("icon-arrowup").removeClass("icon-arrowdown");
                    }
                }
            });
        }
    };

    var myAccordion = new Accordion();
    myAccordion.init();
});
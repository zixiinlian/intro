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
            $('.schedule-list .item').on({
                click: function () {
                    $(this).siblings(".item-content").toggle();
                    $(this).find(".arrow").toggleClass("icon-arrowdown").toggleClass("icon-arrowup");
                }
            });
        }
    };

    var myAccordion = new Accordion();
    myAccordion.init();
});
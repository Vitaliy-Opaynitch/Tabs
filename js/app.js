'use strict'

$(document).ready(function () {
    $('.tab-link').click(function (e) {
        e.preventDefault();

        $('.tab-link').removeClass('tab-link--active');
        $('.content').removeClass('content--active');

        $(this).addClass('tab-link--active');
        $($(this).attr('href')).addClass('content--active');
    });

    $('.tab-link:first').click()
});
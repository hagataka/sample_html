$(function() {
    var topBtn = $('#page-top');
	var rightBtnGroup = $('#right_button_group');
    rightBtnGroup.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            rightBtnGroup.fadeIn();
        } else {
            rightBtnGroup.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

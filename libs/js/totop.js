$(function() {
    var topBtn = $('#page-top');
	var rightBtnGroup = $('#right_button_group');
    rightBtnGroup.hide();
    //�X�N���[����100�ɒB������{�^���\��
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            rightBtnGroup.fadeIn();
        } else {
            rightBtnGroup.fadeOut();
        }
    });
    //�X�N���[�����ăg�b�v
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

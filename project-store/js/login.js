/* 
登录界面js
*/
$('.login-method span').on('click', function () {
    $(this).addClass('color-f60').siblings().removeClass('color-f60')
    var index = $(this).index();
    $('.register').eq(index).addClass('disBlock').siblings('.register').removeClass('disBlock')
})
// 二维码动画
$('.login-code').on('click', function () {
    $('#qr-code').delay(2000).animate({ left: '74' })
    $('#phone').delay(2000).fadeOut();
})
$('.login-code').trigger('click');

$('.qr-code').hover(function () {
    $('#qr-code').stop().animate({ left: '0' })
    $('#phone').stop().fadeIn();
}, function () {
    $('#qr-code').stop().animate({ left: '74' })
    $('#phone').stop().fadeOut();
})

/* 登录账号 */
$('.login-account input').on('input', function () {
    var lengthVal = this.value.length
    if (lengthVal > 0) {
        // 输入框的值大于0 删除按钮显示
        $('.login-account span').fadeIn();
        // 点击按钮删除input中的值
        $('.login-account span').on('click', function () {
            $('.login-account input').val('')
            // 隐藏按钮
            $('.login-account span').fadeOut();
        })
    } else {
        $('.login-account span').fadeOut();
    }
})
// 登录密码

$('.psd input').on('input', function () {
    var lengthVal = this.value.length
    if (lengthVal > 0) {
        // 输入框的值大于0 删除按钮显示
        $('.psd span').fadeIn();
        // 点击按钮删除input中的值
        $('.psd span').on('click', function () {
            $('.psd input').val('')
            // 隐藏按钮
            $('.psd span').fadeOut();
        })
    } else {
        $('.psd span').fadeOut();
    }
})
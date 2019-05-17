/* 
登录界面js
*/
$('.login-method span').on('click',function(){
    $(this).addClass('color-f60').siblings().removeClass('color-f60')
    var index = $(this).index();
    $('.register').eq(index).addClass('disBlock').siblings('.register').removeClass('disBlock')
})
// 二维码动画
$('.login-code').on('click',function(){
    $('#qr-code').delay(2000).animate({left:'74'})
    $('#phone').delay(2000).fadeOut();
})

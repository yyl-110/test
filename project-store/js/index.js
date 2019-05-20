/* 
    乐购首页js
    2019-5-10
*/












/* 头部轮播 */
$('.main-banner').tyslide({
    boxh: 427,//盒子的高度
    w: 1000,//盒子的宽度
    h: 400,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    radius: 0,//控制按钮圆角度数
    controlsColor: "#d8d8d8",//普通控制按钮的颜色
    controlsCurrentColor: "#f60",//当前控制按钮的颜色
    isShowNum: true //是否显示数字
});
/* 书籍轮播 */
$(".book-banner").tyslide({
    boxh: 216,//盒子的高度
    w: 330,//盒子的宽度
    h: 216,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    radius: 0,//控制按钮圆角度数
    controlsColor: "#fff",//普通控制按钮的颜色
    controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
    isShowNum: false //是否显示数字
});
/* 服装轮播 */
$("#sports-banner").tyslide({
    boxh: 340,//盒子的高度
    w: 425,//盒子的宽度
    h: 340,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    radius: 0,//控制按钮圆角度数
    controlsColor: "#fff",//普通控制按钮的颜色
    controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
    isShowNum: false //是否显示数字
});
/* 童装 */
$("#baby-banner").tyslide({
    boxh: 340,//盒子的高度
    w: 425,//盒子的宽度
    h: 340,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    radius: 0,//控制按钮圆角度数
    controlsColor: "#fff",//普通控制按钮的颜色
    controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
    isShowNum: false //是否显示数字
});
/* 服装轮播 */
$("#clothes-banner").tyslide({
    boxh: 340,//盒子的高度
    w: 425,//盒子的宽度
    h: 340,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 14,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    radius: 0,//控制按钮圆角度数
    controlsColor: "#fff",//普通控制按钮的颜色
    controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
    isShowNum: false //是否显示数字
});




/* 左侧楼层跳转 */
$(function () {
    var obj = new floor('.gotop', '.fixedmeau>li', '.floor', '#main-book');
    obj.init()
})

/* 顶部弹出搜索框   弹出楼层跳转导航*/
$(window).scroll(function () {
    var $top = $(document).scrollTop();
    if ($top > 600) {
        $('#header .top-search').slideDown();
        $('.fixedmeau').fadeIn()
        $('.goTop').slideDown();
    } else {
        $('#header .top-search').slideUp();
        $('.fixedmeau').fadeOut()
        $('.goTop').slideUp();
    }
});




/* 右侧订单中心 */
// 鼠标移入弹出二维码移出隐藏二维码
$('.voucher').hover(function () {
    $('.voucher .qr-code').stop().fadeIn();
},
    function () {
        $('.voucher .qr-code').stop().fadeOut();
    })


/* tab切换 */
//  电子图书
$('#main-book>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
    var index = $(this).index();
    $('#main-book>.bgc-book').eq(index).addClass('disBlock').siblings().removeClass('disBlock')

})
// 服装
$('#main-clothes .right:first').css('display', 'block')
$('#main-clothes>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
    var index = $(this).index();
    $('#main-clothes .right').eq(index).css('display', 'block').siblings('.right').css('display', 'none')
})
// 户外运动
$('#main-sports .right:first').css('display', 'block')
$('#main-sports>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
    var index = $(this).index();
    $('#main-sports .right').eq(index).css('display', 'block').siblings('.right').css('display', 'none')
})
// 童装
$('#main-baby .right:first').css('display', 'block')
$('#main-baby>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
    var index = $(this).index();
    $('#main-baby .right').eq(index).css('display', 'block').siblings('.right').css('display', 'none')
})
// 推广商品
$('.goods-slider>li').on('click', function () {
    $(this).addClass('bgc-f60').siblings().removeClass('bgc-f60')
    var index = $(this).index();
    $('.innerbox').animate({ 'left': -index * 1200 })

})

/* 书籍手风琴 */
$('#book-list>dt').on('mouseenter', function () {
    $(this).hide().nextUntil('dt').show().siblings('dd').hide();
    $(this).siblings('dt').show();
})


/* 底部tab切换 */






/* 返回顶部 */
$('.goTop').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 'slow');

})



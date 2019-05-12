/* banner轮播 */
// 定义一个变量，存储下标，下标的默认值是0，
// 右箭头click， 下标自增
// 找到对应的li，让其显示（fadeIn），其他的兄弟元素隐藏（fadeOut）
// 给轮播按钮添加点击事件
$('#banner>ul>li').on('click', function () {
    var inx = $(this).index();
    // 点击图片变化
    $('#banner .slider>ul>li').eq(inx).fadeIn().siblings().fadeOut();
    // 下表标变化按钮也变
    $('#banner>ul>li').eq(inx).addClass('bgc-f60').siblings().removeClass('bgc-f60')

})

var index = 0;
// 点击右箭头下标自增
$('#banner .slider .arrow .arrow-right').on('click', function () {
    index++;
    // 边界判定
    if (index === 6) {
        index = 0;
    }
    $('#banner .slider>ul>li').eq(index).fadeIn().siblings().fadeOut();
    //   下表标变化按钮也变
    $('#banner>ul>li').eq(index).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})
// 点击左边箭头下标自减
$('#banner .slider .arrow .arrow-left').on('click', function () {
    index--;
    // 边界判定
    if (index < 0) {
        index = $('#banner .slider>ul>li').length - 1;
    }
    $('#banner .slider>ul>li').eq(index).fadeIn().siblings().fadeOut();
    $('#banner>ul>li').eq(index).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})
// 设置定时器自动触发右边按钮
var timer = setInterval(function () {

    // 触发右边按钮的点击事件
    $('.arrow-right').trigger('click')
}, 1000)
// 鼠标移入banner清除定时器
$('#banner').on('mouseenter', function () {
    // 清除定时器
    clearInterval(timer)
    // 移入显示圆形按钮
    $('#banner>ul').slideDown();
}).on('mouseleave', function () {
    // 移出隐藏按钮
    $('#banner>ul').slideUp();
    // 移出添加定时器
     timer = setInterval(function () {
        $('.arrow-right').trigger('click')
    }, 1000)
})




/* 左侧楼层跳转 */
$(function () {
    var obj = new floor('.goTop', '.fixedmeau>li', '.floor', '#main-book');
    obj.init()
})






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
$('#main-clothes>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
// 户外运动
$('#main-sports>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
// 童装
$('#main-baby>ul>li').on('mouseenter', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
// 推广商品
$('.goods-slider>li').on('mouseenter', function () {
    $(this).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})







/* 返回顶部 */
$('.goTop').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 'slow');
})


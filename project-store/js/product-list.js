/* banner轮播 */
// 定义一个变量，存储下标，下标的默认值是0，
// 右箭头click， 下标自增
// 找到对应的li，让其显示（fadeIn），其他的兄弟元素隐藏（fadeOut）
// 给轮播按钮添加点击事件
$('.banner-images>ul>li').on('click', function () {
    var inx = $(this).index();
    // 点击图片变化
    $('.banner-images .slider>ul>li').eq(inx).fadeIn().siblings().fadeOut();
    // 下表标变化按钮也变
    $('.banner-images>ul>li').eq(inx).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})


// 点击右箭头下标自增
    var index = 0;
$('.banner-images .slider .arrow .arrow-right').on('click', function () {
    index++;
    // 边界判定
    if (index === 6) {
        index = 0;
    }
    $('.banner-images .slider>ul>li').eq(index).fadeIn().siblings().fadeOut();
    //   下表标变化按钮也变
    $('.banner-images>ul>li').eq(index).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})


// 点击左边箭头下标自减
$('.banner-images .slider .arrow .arrow-left').on('click', function () {
    index--;
    // 边界判定
    if (index < 0) {
        index = $('.banner-images .slider>ul>li').length - 1;
    }
    $('.banner-images .slider>ul>li').eq(index).fadeIn().siblings().fadeOut();
    $('.banner-images>ul>li').eq(index).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})
// 设置定时器自动触发右边按钮
var timer = setInterval(function () {

    // 触发右边按钮的点击事件
    $('.arrow-right').trigger('click')
}, 2000)
// 鼠标移入banner清除定时器
$('.banner-images').on('mouseenter', function () {
    // 清除定时器
    clearInterval(timer)
    // 移入显示圆形按钮
    $('.banner-images>ul').slideDown();
}).on('mouseleave', function () {
    // 移出隐藏按钮
    $('.banner-images>ul').slideUp();
    // 移出添加定时器
    timer = setInterval(function () {
        $('.arrow-right').trigger('click')
    }, 2000)
})

/* banner手风琴 */
// $('.accordion>.book-list>li.change').on('mouseenter',function(){
//     // 初始top
//     var idx =  $(this).index()
//     var oldtop = $(this).css('top')
//     var numAldTop = parseInt(oldtop)
//     // top变化的距离
//     var moveDistance = (numAldTop-100)+'px'

//     // 遍历li
//     $.each($('.accordion>.book-list>li.change'),function(index,itme){
//         var oldDistance = (index-1)*(-100)+'px'
//         console.log(oldDistance)
//         if(inx > 1){
//             $(this).siblings('.change').css('top','oldDistance')
//         }
//     })
//     $(this).css('top',moveDistance)

// })
// .on('mouseleave',function(){
//     var index = $(this).index();
//     var oldDistance = (index-1)*(-100)+'px'
//     $(this).css('top',oldDistance)
// })




/* 乐购图书折扣js */
$('.book-discount ul li').on('mouseenter', function () {
    $(this).find('.del').show();
}).on('mouseleave', function () {
    $(this).find('.del').hide();
})

// 右侧手风琴
/* 书籍手风琴 */
$('.book-list>dt').on('mouseenter', function () {
    $(this).hide().nextUntil('dt').show().siblings('dd').hide();
    $(this).siblings('dt').show();
})

//* 五角星评分 */
// 分析
// 1. 鼠标移入事件
//  1.1 让当前的五角星和当前前面所有的五角星都变成了实心的五角星
//  1.2 让当前后面的五角星变成空心的
$('#score i').on('mouseenter', function () {
    $(this).addClass('color-fee').prevAll().addClass('color-fee')
    $(this).nextAll().removeClass('color-fee')
})

// 点击五角星
$('#score i').on('click', function () {
    $(this).addClass('color-fee').prevAll().addClass('color-fee')
    $('#score ').off('mouseleave', fn)

    $('#score ').on('mouseleave', function () {
        $(this).children().removeClass('color-fee')
    })
})

// 独家提供tab切换
$('#privision-nav li').on('click', function () {
    $(this).addClass('resemble').siblings().removeClass('resemble')
    var index = $(this).index();
    $('.innerbox').stop().animate({ 'left': -index * 1200 })
    $('.slider-ball>li').eq(index).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})
// 按钮点击事件
// 左键
// 定义变量记录索引
// 获取当前显示的left
var i = 0;
$('.btn-left').on('click', function () {
    i--;
    if(i < 0){
        i=6
    }
    $('.innerbox').stop().animate({ 'left': -i * 1200 })
    // 左边按钮
    $('#privision-nav li').eq(i).addClass('resemble').siblings().removeClass('resemble')
    // 圆形按钮
    $('.slider-ball>li').eq(i).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})
// 点击右键
$('.btn-right').on('click', function () {
    if(i === 6){
        i=-1
    }
    i++;
    $('.innerbox').stop().animate({ 'left': -i * 1200 })
     // 左边按钮
    $('#privision-nav li').eq(i).addClass('resemble').siblings().removeClass('resemble')
     // 圆形按钮
    $('.slider-ball>li').eq(i).addClass('bgc-f60').siblings().removeClass('bgc-f60')
})
// 点击圆形按钮切换
$('.slider-ball li').on('click', function () {
    $(this).addClass('bgc-f60').siblings().removeClass('bgc-f60')
    var index = $(this).index();
    $('.innerbox').stop().animate({ 'left': -index * 1200 })
    // 导航切换
    $('#privision-nav li').eq(index).addClass('resemble').siblings().removeClass('resemble')

})


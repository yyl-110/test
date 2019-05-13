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

    var index = 0;
    // 点击右箭头下标自增
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


    /* 乐购图书折扣js */
    $('.book-discount ul li').on('mouseenter',function(){
        $(this).find('.del').show();
    }).on('mouseleave',function(){
        $(this).find('.del').hide();
    })
    // 右侧手风琴
    /* 书籍手风琴 */
    $('.book-list>dt').on('mouseenter', function () {
        $(this).hide().nextUntil('dt').show().siblings('dd').hide();
        $(this).siblings('dt').show();
    })
   
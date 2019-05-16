/* 
产品详情页面js

*/
/* 种类选择 */
$('#choice button').on('click',function(){
    $(this).addClass('resemble').siblings('button').removeClass('resemble');
    $(this).find('i').addClass('disBlock').closest('button')
    .siblings('button').find('i').removeClass('disBlock')
})

/* 购物增加数量 */
var num = 0;
$('#add-cart .amount-top').on('click',function(){
     num++
     $('#add-cart .amount-left span').text(num)
})
$('#add-cart .amount-bottom').on('click',function(){
      num--
    if(num < 0){
        num = 0;
    }
    $('#add-cart .amount-left span').text(num)
})


/* 人气单品 */
$('.product ul li').on('mouseenter', function () {
    $(this).find('.del').show();
}).on('mouseleave', function () {
    $(this).find('.del').hide();
})

/* 商品评价tab切换 */
$('.right>button').on('click',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings('button').removeClass('active')
    $('#bigbox .itme').eq(index).removeClass('disNone').addClass('disBlock').siblings()
    .removeClass('disBlock').addClass('disNone')
})
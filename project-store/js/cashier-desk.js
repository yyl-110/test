/* 
支付页面

*/
// 制作蒙版层
$('#pay-btn').on('click',function(){
    $('.model').fadeIn();
})
$('#pay-succeed').on('click',function(){
    $('.model').fadeOut();
})
$('.del').on('click',function(){
    $('.model').fadeOut();
})
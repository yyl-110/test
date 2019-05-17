/* 
购物车js

*/
// 猜你喜欢
$('.book-discount ul li').on('mouseenter', function () {
    $(this).find('.del').show();
}).on('mouseleave', function () {
    $(this).find('.del').hide();
})

// 购物车功能实现
// 按钮全选与反选
var $theadInput = $('table th input[type = checkbox]')
var $tbodyInput = $('table tbody input[type=checkbox]')
var $totalInput = $('.totalprice .outbox input[type=checkbox]')
// 点击头部全选按钮 选中全部商品
$theadInput.change(function () {
    var state = $(this).prop('checked')
    $tbodyInput.prop('checked', state)
    $totalInput.prop('checked', state)
    calsTotalPrice()

})
// 点击计算总价全选按钮
$totalInput.change(function () {
    var state = $(this).prop('checked')
    $theadInput.prop('checked', state)
    $tbodyInput.prop('checked', state)
    // 调用计算总价函数
    calsTotalPrice()

})
// 点击产品列表全选按钮
$tbodyInput.change(function () {
    // 遍历input
    var flag = true;
    $.each($tbodyInput, function (i, input) {
        if (!$(input).prop('checked')) {
            flag = false;
        }
        $totalInput.prop('checked', flag)
        $theadInput.prop('checked', flag)
    })
     // 调用计算总价函数
     calsTotalPrice()

})
// 按钮加
$('.add').on('click', function () {
    var oldVal = $(this).next().val()
    // 点击按钮值加一
    oldVal++
    $(this).next().val(oldVal)
    // 计算小计
    var unitPrice = parseFloat($(this).closest('tr').find('.unitPrice').text())
    var subTotal = oldVal * unitPrice
    $(this).closest('tr').find('.subtotal').text(subTotal.toFixed(2))
    // 计算小计
    calsSubtotal(oldVal, $(this))
     // 调用计算总价函数
     calsTotalPrice()
})


// 按钮减
$('.minus').on('click', function () {
    var oldVal = $(this).prev().val()
    // 点击按钮值加一
    oldVal--
    oldVal = oldVal < 0 ? 0 : oldVal
    $(this).prev().val(oldVal)
    // 计算小计
    calsSubtotal(oldVal, $(this))
     // 调用计算总价函数
     calsTotalPrice()
})

// 点击删除
$('.del').on('click',function(){
    $(this).closest('tr').remove()
    calcGoodsCount()
})

// 计算小计函数
var calsSubtotal = function (oldVal, Dom) {
    var unitPrice = parseFloat(Dom.closest('tr').find('.unitPrice').text())
    var subTotal = oldVal * unitPrice
    Dom.closest('tr').find('.subtotal').text(subTotal.toFixed(2))
}

// 计算总价函数
// 判断tbodyInput
var calsTotalPrice = function () {
     // 定一个数量
     var count = 0;
    
    var totalPrice = 0;
    $('table tbody input[type=checkbox]').each(function (i, input) {

        if ($(input).prop('checked')) {
             // 自增
             count++;

            totalPrice += parseFloat($(input).closest('tr').find('.subtotal').text())
            
        }
    })
    $('.price').text(totalPrice.toFixed(2))
    // 把数量渲染到对象的dom位置
    
    $('.count').text(count)
}

 // 全部商品
 function calcGoodsCount() {
    $('.count').text( $('table tbody tr').length-1 )
}
calcGoodsCount(); // 一进入界面 就自定调用一次

// 删除选中商品
$('.deleteChecked').on('click', function () {
    // 循环单选框 如果选中 干掉自己(删除的是一行)
    $tbodyInput.each(function (i, input) {
        if ($(this).prop('checked')) {
            $(this).closest('tr').remove();
        }
    })

    // 计算总价
    calsTotalPrice();
    // 计算商品数量
    calcGoodsCount();
})


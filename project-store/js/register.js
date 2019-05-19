/* 

*/
$(function () {
    $('#registerForm').validate({

        rules: {
            username: {
                required: true,
                rangelength: [3, 6]
            },
            password: {
                required: true,  // 非空
                isPassword: true  // 自定义的密码验证
            },
            // 确认密码
            checkPassword: {
                required: true,  // 非空
                equalTo: "#password"  // 验证密码的一致性
            },
            // 确认密码
            checkPassword: {
                required: true,  // 非空
                equalTo: "#password"  // 验证密码的一致性
            },
             // 电话号码
             tel: {
                required: true, // 非空
                isTel: true   // 自定义的电话号码验证
            },

        },
        messages: {
            // 用户名提示信息
            username: {
                required: '用户名不能为空!',   // 非空提示
                rangelength:'长度在 3 ~ 6 位哦' // 长度提示
            },
            // 密码的提示信息
            password: {
                required: '密码不能为空哦',  // 非空
                isPassword: '   请输入5-10个,以字母开头、可带数字、“_”、“.”的字符串哦!'  // 密码格式提示
            },
            // 确认密码提示信息
            checkPassword: {
                required: '请再次输入密码!',  // 非空
                equalTo: '两次密码不一致' // 一致性
            },
            // 电话号码提示信息
            tel: {
                required: '电话号码不能为空',
                isTel: '电话号码格式不正确'
            }
        }
    })






    // 密码自定义验证
    jQuery.validator.addMethod("isPassword", function (value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });

    // 手机号自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {   
        var telReg = /^[1]+[3,8,5,7]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });
})

/* 获取手机验证码 */
$(".get-code").click(function () {
    var time = 60;
    var timer = setInterval(function(){
        time--;
        $(".get-code").text("（"+time+"秒）重发");
        if(time==0){
            clearInterval(timer);
            $(".get-code").text("获取验证码");
        }
    },1000);
});

// 生成验证码
$('#verification').codeVerify({
    type : 1,
    width : '100px',
    height : '36px',
    fontSize : '20px',
    codeLength : 4,
    btnId : 'submit',
    ready : function() {
    },
    success : function() {
        alert('验证匹配！');
    },
    error : function() {
        alert('验证码不匹配！');
    }
});



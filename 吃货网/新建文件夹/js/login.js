        $("#phone").blur(function(){
            // 获取手机文本框的值
            var phone = $(this).val();
            // 手机号码正则表达式
            var phonenvm =/^1(3|4|5|7|8|9)\d{9}$/;
            if($(this).val()=="")
            {
                $(this).parent().next().text("请输入手机号码").css({"color":"red","font-size":"13px"})
                // 光标聚焦
                $(this).focus();
            }
             // 判断手机号是否正确
             else if(!phonenvm.test(phone))
            {
                $(this).parent().next().text("输入手机号码格式不正确").css({"color":"red","font-size":"13px"})
                // 光标聚焦
                $(this).focus();
            }
            else
            {
                $(this).parent().next().text("")
            }
        })
        $("#password").blur(function(){
            if($(this).val()=="")
            {
                $(this).parent().next().text("请输入密码").css({"color":"red","font-size":"13px"})
                // 光标聚焦
                $(this).focus();
            }
            else if($(this).val().length<6)
            {
                $(this).parent().next().text("请输入6~16位密码").css({"color":"red","font-size":"13px"})
                // 光标聚焦
                $(this).focus();
            }
            else
            {
                $(this).parent().next().text("")
            }
        })
$("#phone").blur(function(){
    // 获取手机文本框的值
    var phone = document.getElementById('phone').value;
    // 手机号码正则表达式 
    var phonenvm =/^1(3|4|5|6|7|8|9)\d{9}$/;
    if($(this).val()=="")
    {
        $(this).parent().next().text("请输入手机号码").css({"color":"red","padding-left":"0px"})
        // 光标聚焦
        // $(this).focus();
    }
    // 判断手机号是否正确
    else if(!phonenvm.test(phone))
    {
        $(this).parent().next().text("输入手机号码格式不正确").css({"color":"red","font-size":"13px"})
        // 光标聚焦
        // $(this).focus();
    }
    else
    {
        $(this).parent().next().text("")
    }
})
// 输入动态码的整体部分
//点击动态码生成一个动态码
var strings
$(".numBtn").click(function(){
    function getstr(len){
        var template = '';//将所有可选的字符存储起来
        for(var i = 65;i < 65 + 26; i++)
        {
            template += String.fromCharCode(i); //A~Z对应的Unicode码
        }
        for(var i = 97; i < 97 + 26; i++)
        {
            template += String.fromCharCode(i); //a~z
        }
        for(var i = 48; i < 48 + 10; i++)
        {
            template += String.fromCharCode(i); //0~9
        }
        var result = "";
        for(var i = 0; i < len; i++)
        {
            var index = getnumber(0, template.length - 1); //随机获取一个下标
            result += template[index];
        }
        return result;
    }
        function getnumber(min, max){
            return Math.floor((Math.random() * (max - min +1) + min));
        }
        strings = getstr(4); //获取一个4位数
        // 显示验证码的文本框并填充验证码
        $("#numberCode").css("display","block").text(strings);
})
    
// 输入动态码
    $("#number").blur(function(){
        if($(this).val()=="")
        {
            $(this).parent().next().text("请输入短信动态码").css({"color":"red","font-size":"13px"})
        }
        else if($(this).val()!=strings)
        {
            $(this).parent().next().text("输入短信动态码不正确").css({"color":"red","font-size":"13px"})
             // 光标聚焦
            //  $(this).focus();
        }
        else
        {
            $(this).parent().next().text("")
        }
    })
// 输入密码
    $("#password").blur(function(){
        if($(this).val()=="")
        {
            $(this).parent().next().text("请输入密码").css({"color":"red","font-size":"13px"})
            // 光标聚焦
            // $(this).focus();
        }
        else if($(this).val().length<6)
        {
            $(this).parent().next().text("请输入6~16位密码").css({"color":"red","font-size":"13px"})
            // 光标聚焦
            // $(this).focus();
        }
        else
        {
            $(this).parent().next().text("")
        }
    })
// 确认密码
    $("#truepassword").blur(function(){
        if($(this).val()=="")
        {
            $(this).parent().next().text("请输入确认密码").css({"color":"red","font-size":"13px"})
            // 光标聚焦
            // $(this).focus();
        }
        else if($(this).val() != $("#password").val())
        {
            $(this).parent().next().text("确认密码与密码不一致").css({"color":"red","font-size":"13px"})
            // 光标聚焦
            // $(this).focus();
        }
        else
        {
            $(this).parent().next().text("")
        }
    })
// 判断输入密码的复杂程度
    $(function() {
        function checkStrong(val) {
            var modes = 0;
            if (val.length < 6) return 0;
            if (/\d/.test(val)) modes++; //数字
            if (/[a-z]/.test(val)) modes++; //小写
            if (/[A-Z]/.test(val)) modes++; //大写  
            if (/\W/.test(val)) modes++; //特殊字符
            if (val.length > 12) return 4;
            return modes;
        };
        $("#password").keyup(function() {
            var val = $(this).val();
            var num = checkStrong(val);
            switch (num) {
                case 0:
                $("#resultpwd span").css('background', '#ececec')
                    break;
                case 1:
                    $("#resultpwd span").eq(num - 1).css('background', 'red').next().css('background', '#ececec');
                    break;
                case 2:
                    $("#resultpwd span").eq(num - 1).css('background', 'orange').prev().css('background', 'orange').next().next().css('background', '#ececec');
                    break;
                case 3:
                    $("#resultpwd span").css('background', 'green');
                    break;
                case 4:
                    $("#resultpwd span").css('background', 'green');
                    break;
                default:
                    break;
            }
        })
    })
$("ul li").hover(function () {
    $(this).find("ul").fadeToggle(120)
})
$(".search-nav span").hover(function () {
    $(this).find("ul").fadeToggle(120)
})
 
// 点击侧边栏的菜单跳转到到对应的内容
$(".click-li").each(function(index){
    $(this).click(function(){
       $(".content-rightBox").eq(index).show().siblings().hide()
    })
    // 我的订单
    $(".order-li").each(function(index){
        $(this).click(function(){
             // 点击侧边栏的li标签时，右边【我的订单】盒子与li标签对应的span标签【添加】 span-active样式 并【移除前面】的 span-active样式
             $(".order_divbox1 span").eq(index).addClass("span-active").prevAll().removeClass("span-active")
             // 点击侧边栏的li标签时，右边【我的订单】盒子与li标签对应的span标签【添加】 span-active样式 并【移除后面】的 span-active样式
             $(".order_divbox1 span").eq(index).nextAll().removeClass("span-active")
             // 点击侧边栏的li标签时，右边【我的订单】盒子与li标签对应的【.order_divbox2 div】盒子显示
             $(".order_divbox2 div").eq(index).show().siblings().hide()
             // 装【我的订单】的盒子显示
             $(".content-rightBox").eq(1).show().siblings().hide()
        })
        // 点击右边的span标签时，下面与span标签对应的【.order_divbox2 div】盒子显示   
        $(".order_divbox1 span").each(function(index){
             $(this).click(function(){
                 $(".order_divbox1 span").eq(index).addClass("span-active").prevAll().removeClass("span-active")
                 $(".order_divbox1 span").eq(index).nextAll().removeClass("span-active")
                 $(".order_divbox2 div").eq(index).show().siblings().hide()
             })
         })
    })
    // 我的收藏
    $(".collect-li").each(function(index){
        $(this).click(function(){
             $(".collect_divbox1 span").eq(index).addClass("span-active").prevAll().removeClass("span-active")
             $(".collect_divbox1 span").eq(index).nextAll().removeClass("span-active")
             $(".collect_divbox2 div").eq(index).show().siblings().hide()
             $(".content-rightBox").eq(2).show().siblings().hide()
        })
        $(".collect_divbox1 span").each(function(index){
             $(this).click(function(){
                 $(".collect_divbox1 span").eq(index).addClass("span-active").prevAll().removeClass("span-active")
                 $(".collect_divbox1 span").eq(index).nextAll().removeClass("span-active")
                 $(".collect_divbox2 div").eq(index).show().siblings().hide()
             })
         })
    })
     // 抵用劵
    $(".card-li").each(function(index){
        $(this).click(function(){
             $(".card_divbox1 span").eq(index).addClass("span-active").prevAll().removeClass("span-active")
             $(".card_divbox1 span").eq(index).nextAll().removeClass("span-active")
             $(".card_divbox2 div").eq(index).show().siblings().hide()
             $(".content-rightBox").eq(3).show().siblings().hide()
        })
        $(".card_divbox1 span").each(function(index){
             $(this).click(function(){
                 $(".card_divbox1 span").eq(index).addClass("span-active").prevAll().removeClass("span-active")
                 $(".card_divbox1 span").eq(index).nextAll().removeClass("span-active")
                 $(".card_divbox2 div").eq(index).show().siblings().hide()
             })
        })
    })
     // 抵用劵
    $(".personal-li").each(function(index){
        $(this).click(function(){
             $(".content-rightBox").eq(4).show().siblings().hide()
        })
        $(".userbox").click(function(){
             $(".content-rightBox").eq(4).show().siblings().hide()
        })
    })
    // 点击修改信息的按钮时，跳出修改的盒子
    $(".modify").click(function(){
        $(".check-User").css("display","block")
    })
    // 点击关闭时，关闭修改的盒子
    $("#close").click(function(){
        $(".check-User").css("display","none")
    })


    //执行一个laydate实例
    laydate.render({
        elem: '#test1' //指定元素
    });

})

// // 上传或修改头像  代码不齐全
// DS.upfile = function(){
//     $('#userImage').each(function(){
//         var $this = $(this),
//             btn = $this.find('.upfile'),
//             img = $this.find('img');
//         btn.on('change',function(){
//             var file = $(this)[0].files[0],
//                 imgSrc = $(this)[0].value,
//                 url = URL.createObjectURL(file);
//             // 判断上传文件是不是图片
//             if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc))
//             {
//                 alert("请上传jpg或png格式的图片！");
//                 return false;
//             }else
//             {
//                 img.attr('src',url);
//                 img.css({'opacity':'1'});
//             }
//         });
//     });
// }();



// 上传或修改头像

$("#fileImage").change(function() { //fileImage  input[file]的ID

            // // 获取文件名称路径
            // imgSrc = $(this)[0].value;
            // alert(imgSrc);
            // // 获取文件名的后缀名（扩展名）不包括【.】
            // alert('上传文件后缀名为：' + this.value.toLowerCase().split('.').splice(-1));
            // // 获取上传文件的大小
            // alert('上传文件大小为：' + this.files[0].size/1024 + 'kb');


    // 获取上传文件对象
    var file = $(this)[0].files[0];
    // 读取文件URL
    var reader = new FileReader();
    // 获取上传文件的后缀名 并拼接一个 【.】+扩展名 的格式
    imgSrc ='.'+this.value.toLowerCase().split('.').splice(-1);
    alert(imgSrc);
    // 判断文件名路径是不是图片类型
    if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc))
    {
        alert("请上传jpg或png格式的图片！");
        return false;
    }
    reader.readAsDataURL(file);
    // 阅读文件完成后触发的事件
    reader.onload = function() {
        // 读取的URL结果：this.result
        // $("#fileImage").hide()
        $("#userImage").attr("src", this.result).show(); //userImage  img标签的ID
    }
});


// 鼠标移入头像文本框显示的 文字提示
$("#fileImage").mouseover(function(){
    $(".Image-text").css({"display":"block","zindex":"999"});
})
$("#fileImage").mouseout(function(){
    $(".Image-text").css({"display":"none","zindex":"999"});
})


//判断两个密码框的值是否相同
var pass1;
var pass2;
$("#password-").blur(function(){
    pass1 = $("#password-").val();
    // 判断输入的密码长度
    if(pass1.length<6||pass1.length>16){
        $(".tishi1").text("密码长度不够")
        // 光标聚焦
        $("#password-").focus();
    }
    else{
        $(".tishi1").text("")
    }
    
})
$("#password--").blur(function(){
    pass2 = $("#password--").val()
    // 判断输入的两次密码是否相同
    if(pass1!=pass2){
        $(".tishi2").text("密码不一致")
        // 光标聚焦
        $(this).focus();
    }
    else{
        $(".tishi2").text("")
    }
})
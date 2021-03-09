// 点击猫眼电影头部导航栏的样式
    $(".content-introduceMovie-top>span").each(function(index){
        if(index==0)
        {
            $(this).click(function(){
                $(this).addClass("nav-active").siblings().removeClass("nav-active")
                $(".content-movie>div").eq(0).show(500).siblings().hide(500)
            })
        }
        if(index==1)
        {
            $(this).click(function(){
                $(this).addClass("nav-active").siblings().removeClass("nav-active")
                $(".content-movie>div").eq(1).show(500).siblings().hide(500)
            })
        }
        console.log(index)
        if(index == 2)
        {
            
        }
        if(index==3)
        {
            $(this).click(function(){
                $(this).addClass("nav-active").siblings().removeClass("nav-active")
                $(".content-movie>div").eq(2).show(500).siblings().hide(500)
            })
        }
    })
// 点击"全部"按钮 显示相应的
    $(".movieAll").each(function(index){
        // //方法一
        // if(index == 0)
        // {
        //     $(this).click(function(){
        //     $(".content-introduceMovie-top>span").eq(index+1).addClass("nav-active").siblings().removeClass("nav-active")
        //     $(".content-movie>div").eq(index+1).show(500).siblings().hide(500)
        // })
        // }
        // if(index == 1)
        // {
        //     $(this).click(function(){
        //     $(".content-introduceMovie-top>span").eq(index+2).addClass("nav-active").siblings().removeClass("nav-active")
        //     $(".content-movie>div").eq(index+1).show(500).siblings().hide(500)
        // })
        // }
        // //方法二
        var a = 0
        if(index == 0)
        {
            a = 1
        }
        if(index == 1)
        {
            a = 3
        }
        $(this).click(function(){
            $(".content-introduceMovie-top>span").eq(a).addClass("nav-active").siblings().removeClass("nav-active")
            $(".content-movie>div").eq(index+1).show(500).siblings().hide(500)
        })
    })




    // 二级菜单的样式
    $("ul li").hover(function () {
        $(this).find("ul").fadeToggle(120)
    })
    // 点击写评论跳出盒子（小窗口）
    $(".commentbtn").click(function(){
        $(".commentBox").css("display","block")
    })
    // 关闭评论跳出的盒子（小窗口）
    $(".commentStar-close").click(function(){
        $(".commentBox").css("display","none")
    })
// 用户评论的星级评分
var starNum=0; //获取星星的数量
var star1 = ""
var star2 = ""
var star3 = ""
var star4 = ""
var star5 = ""
    $(function() {
        // 使用点击事件
        $(".star_div li").click(function(){//方法二：点击事件
            var _lefts = $(".star_div").offset().left;
            var e = e||window.event;
            var obj = e.pageX;
            var obg = e.pageY;
            let starwidth = 30;
            let n = $(this).index();
            let starPosition = obj-_lefts-n*starwidth;
            if(starPosition<15)
            {
                $(this).addClass("half-star").prevAll().removeClass("half-star").next().prevAll().addClass("empty-star")
                n =n+0.5
                // console.log(n)
            }
            else
            {
                $(this).addClass("empty-star").removeClass("half-star").prevAll().removeClass("half-star").next().prevAll().addClass("empty-star")
                n=n+1
                // console.log(n)
            }
            $(this).nextAll().removeClass("empty-star").removeClass("half-star")
            if(n<=0.5)
            {
                $(".commentStar-desc").text("超级烂啊！")
                star1 = "halfstar"
                star2 = "fullstar"
                star3 = "fullstar"
                star4 = "fullstar"
                star5 = "fullstar"
            }
            else if(n<=1)
            {
                $(".commentStar-desc").text("给脚看的!")
                star1 = "emptystar"
                star2 = "fullstar"
                star3 = "fullstar"
                star4 = "fullstar"
                star5 = "fullstar"
            }
            else if(n<=1.5)
            {
                $(".commentStar-desc").text("这是人看的？")
                star1 = "emptystar"
                star2 = "halfstar"
                star3 = "fullstar"
                star4 = "fullstar"
                star5 = "fullstar"
            }
            else if(n<=2)
            {
                $(".commentStar-desc").text("比较差")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "fullstar"
                star4 = "fullstar"
                star5 = "fullstar"
            }
            else if(n<=2.5)
            {
                $(".commentStar-desc").text("有点烂")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "halfstar"
                star4 = "fullstar"
                star5 = "fullstar"
            }
            else if(n==3)
            {
                $(".commentStar-desc").text("一般般")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "emptystar"
                star4 = "fullstar"
                star5 = "fullstar"
            }
            else if(n<=3.5)
            {
                $(".commentStar-desc").text("还可以吧")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "emptystar"
                star4 = "halfstar"
                star5 = "fullstar"
            }
            else if(n==4)
            {
                $(".commentStar-desc").text("还不错哦")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "emptystar"
                star4 = "emptystar"
                star5 = "fullstar"
            }
            else if(n<=4.5)
            {
                $(".commentStar-desc").text("很不错")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "emptystar"
                star4 = "emptystar"
                star5 = "halfstar"
            }
            else if(n==5)
            {
                $(".commentStar-desc").text("非常好棒极了")
                star1 = "emptystar"
                star2 = "emptystar"
                star3 = "emptystar"
                star4 = "emptystar"
                star5 = "emptystar"
            }
            starNum=n;
        })
    })
   
    // 用户评论的内容提交
    $("#addComment").click(function(){
        var time = getTimes()
        var star = 0
        var usersay = $("#usersay").val();
        // console.log(starNum)
        if(starNum<=0)
        {
            alert("请给电影星级评分")
            // 停止不往下执行
            return;
        }
        if(usersay == "")
        {
            alert("请输入评论内容")
            // 停止不往下执行
            return;
        }
        var strUser = '<div class="commentUser-box">'+
                        '<div class="p-user">'+
                            '<div class="p-user-image"><img src="./img/1.jpg" alt=""  class="userimg"></div>'+
                            '<div class="p-user-time"><span>电影侠</span><br><span class="p--time">'+time+'</span>'+
                                '<br/>'+
                                '<span>'+
                                    '<span class="full-star"><img src="./img/'+star1+'.png" alt=""></span>'+
                                    '<span class="full-star"><img src="./img/'+star2+'.png" alt=""></span>'+
                                    '<span class="full-star"><img src="./img/'+star3+'.png" alt=""></span>'+
                                    '<span class="full-star"><img src="./img/'+star4+'.png" alt=""></span>'+
                                    '<span class="full-star"><img src="./img/'+star5+'.png" alt=""></span>'+
                                '</span>'+
                            '</div>'+
                            '<span class="per"><i class="fa fa-thumbs-up"></i><span class="num">0</span></span>'+
                        '</div>'+
                                '<p>'+usersay+'</p>'+
                    '</div>'
        // 把评论前置最前面
        $(strUser).prependTo(".commentUser")
        // 提交评论后清空文本框
        $("#usersay").val("")
        // 提交后清空星星评分
        $(".star_div li").removeClass("empty-star").removeClass("half-star")
    })
    // 填充评论区的星星
    function addStarNumber(){

    }
    // 点赞功能 on绑定事件 事实更新页面的绑定元素
    $("body").on('click','.per',function(){
        var num = $(this).find("span").text();
        console.log($(this).attr("class"));
        if($(this).attr("class") == "per")
        {
            $(this).addClass("active");
            num++;
        }
        else
        {
            $(this).removeClass("active");
            num--;
        }
        $(this).find("span").text(num);
    });
    // 获取当前时间
    function getTimes(){
        var date = new Date();
        var year = date.getFullYear() 
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        var newtime = year +"-"+ month +"-"+ day +" "+ check(hours) +":"+ check(minutes) +":"+ check(second);
        return newtime;
    }
    // 拼接字符
    function check(num)
    {
        if(num < 10)
        {
            num = "0" + num
        }
        return num
    }
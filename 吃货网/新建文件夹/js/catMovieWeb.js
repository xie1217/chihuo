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


    // 二级菜单的样式
    $("ul li").hover(function () {
        $(this).find("ul").fadeToggle(120)
    })
   
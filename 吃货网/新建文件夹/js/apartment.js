      // 房源位置右侧的按钮
        $(".location-rightNearby ul li").each(function(index){
            $(this).click(function(){
                $(this).addClass("locationactive").siblings().removeClass("locationactive")
                $(".location-rightContent>div").eq(index).show().siblings().hide()
            })
        })
         // 展开---收起
        $(".openMore").click(function(){
            $(".reviews-box-comment-bottom").css("display","block")
            $(".closeMore").css("display","block")
            $(this).css("display","none")
        })
        $(".closeMore").click(function(){
            $(".reviews-box-comment-bottom").css("display","none")
            $(".openMore").css("display","block")
            $(this).css("display","none")
        })
        // 展开---收起
        $("#openMoreAmenities").click(function(){
            $(this).css("display","none")
            $(".amenities-box2").css({"display":"block","display":"flex"})
            $("#closeMoreAmenities").css("display","block")
        })
        $("#closeMoreAmenities").click(function(){
            $(this).css("display","none")
            $(".amenities-box2").css("display","none")
            $("#openMoreAmenities").css("display","block")
        })
        // 选择住房人数的jqurey
        $(".order-numBtn-text").click(function(){
            var text = "";
            $(".order-changeNUm").css("display","block")
            $(".one").click(function(){
                text=$(".one").text()
                $(".order-numBtn-text").text(text);
                $(".order-changeNUm").css("display","none")
            })
            $(".two").click(function(){
                text=$(".two").text()
                $(".order-numBtn-text").text(text);
                $(".order-changeNUm").css("display","none")
            })
        })
        // 点击内容导航栏的跳到指定的位置时，添加样式
        $(".apartment-content-headerNav ul li").click(function(){
            $(this).addClass("active").prevAll().removeClass("active")
            $(this).nextAll().removeClass("active")
            // 点击内容导航栏时，固定主要内容的导航栏并添加样式
            $(".apartment-content-headerNav").css({"position":"fixed","top":"0px","box-shadow": "0px 0px 8px #ccc"})
        })
        // 跳到概括的位置
        $("ul li:nth-child(1)").click(function(){
            var newheight = $(window).scrollTop()
            // 获取概括到文档的高度
            var theheight = $(".apartment-content-left").offset().top - 70
            $("html,body").animate({scrollTop:theheight})
        })
        // 跳到房东的位置
        $("ul li:nth-child(2)").click(function(){
            var newheight = $(window).scrollTop()
            var theheight = $(".apartment-content-host").offset().top - 60
            $("html,body").animate({scrollTop:theheight})
        })
        // 跳到位置的位置
        $("ul li:nth-child(3)").click(function(){
            var newheight = $(window).scrollTop()
            var theheight = $(".apartment-content-location").offset().top - 60
            $("html,body").animate({scrollTop:theheight})
        })
        // 跳到评价的位置
        $("ul li:nth-child(4)").click(function(){
            var newheight = $(window).scrollTop()
            var theheight = $(".apartment-content-reviews").offset().top - 60
            $("html,body").animate({scrollTop:theheight})
        })
        // 跳到设施的位置
        $("ul li:nth-child(5)").click(function(){
            var newheight = $(window).scrollTop()
            var theheight = $(".apartment-content-amenities").offset().top - 60
            $("html,body").animate({scrollTop:theheight})
        })
        // 到一定的移动到高度--固定定位   使用滚动事件
        $(window).scroll(function(){
            // 获取滚动的高度
            var top = $(window).scrollTop()
            // 获取文档的总高度
            var sumHeight = $(document).height()
            // 获取可视区窗体的高度
            var seeHeight = document.documentElement.clientHeight
            // 获取距离下面底部的距离
            var bottom = sumHeight - top - seeHeight
            console.log(bottom)
            if(top>600)
            {
                // 滚动距离达到600px时，固定主要内容的导航栏并添加样式
                $(".apartment-content-headerNav").css({"position":"fixed","top":"0px","box-shadow": "0px 0px 8px #ccc"})
                // 滚动距离达到600px时，右侧的订单盒子固定在的位置
                $(".right-orderbox").css({"position":"fixed","top":"150px"})
            }
            else if(top<600)
            {
                // // 滚动距离【没有】达到600px时，右侧的订单盒子取消固定的定位
                $(".apartment-content-headerNav").css({"position":"relative","box-shadow": "0px 0px 0px #ccc"})
                $(".right-orderbox").css({"position":"relative","top":"0px"})
            }
            if(bottom<120)
            {
                // 如果 右侧订单盒子的位置距离底部小于100px时，盒子固定定位往上移动（防止遮挡到下面底部的文字等样式）。
                $(".right-orderbox").css({"position":"fixed","top":"-60px"})
            }
        })
    
        //执行一个laydate实例
        laydate.render({
        elem: '#test1' //指定元素
        });
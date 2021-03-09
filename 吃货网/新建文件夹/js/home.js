$("ul li").hover(function () {
    $(this).find("ul").fadeToggle(120)
})

// 猫眼电影
$(".catMovie-nav ul li").each(function (index) {
    $(this).mouseover(function () {
        // $(this).addClass("active").siblings().removeClass("active")
        $(".catMovie-content div").eq(index).show().siblings().hide()
    })

    // 按钮移动图片 
    $(".btn-left").click(function () {
        $(".catMovie-content div").eq(index).css({
            "position": "relative",
            "left": "0px"
        })
    })
    $(".btn-right").click(function () {
        $(".catMovie-content div").eq(index).css({
            "position": "relative",
            "left": "-1170px"
        })
    })
    // 方法一的js
    $(".fa-chevron-circle-left").click(function () {
        $(".catMovie-content div").eq(index).css({
            "position": "relative",
            "left": "0px"
        })
    })
    $(".fa-chevron-circle-right").click(function () {
        $(".catMovie-content div").eq(index).css({
            "position": "relative",
            "left": "-1170px"
        })
    })


    // 图片轮播  无效果
    var num = 0;
    setInterval(function () {
        if (num > $(".catMovie-content div dl").length - 1) {
            num = 0;
        }
        // alert(num)
        $(".catMovie-content div dl").eq(index).animate({
            left: -1100 * num
        }, 2000)
        num++;
    }, 1000);
})

// 推荐民宿/公寓
$(".apartment-nav ul li").each(function (index) {
    $(this).mouseover(function () {
        $(this).addClass("apartment-active").siblings().removeClass("apartment-active")
        $(".apartment-address div").eq(index).show().siblings().hide()
        // 把显示的民宿/公寓变成弹性容器；（因为这里使用响应式布局；
        // 且使用display：none隐藏时，把这里原来弹性容器样式取消了，所有要从新变成弹性容器【flex】）
        $(".apartment-address div").eq(index).css("display", "flex")
    })
})
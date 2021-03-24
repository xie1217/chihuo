<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="food.Login" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Content/css/all.css">
</head>

<body>
    <form action="#" runat="server" method="post">
        <div class="header">
            <div class="top">
                <div class="inner">
                    <div class="logo">
                        <img src="Content/images/logo2.png" alt="">
                    </div>
                    <div class="sou">
                        <%--<input type="text" placeholder="请输入菜谱/食材/菜单">--%>
                        <asp:TextBox ID="searchText" runat="server" placeholder="请输入菜谱/食材/菜单" CssClass="searchText"></asp:TextBox>
                        <%--<button>搜索</button>--%>
                        <asp:Button ID="searchBtn" runat="server" Text="搜索" CssClass="searchBtn" />
                    </div>
                </div>
            </div>


            <div class="navbar-box">
                <ul class="navbar-box-ul">
                    <li class="navbar-box-ul-li"><a href="#">首页</a></li>
                    <li class="navbar-box-ul-li looktwo"><a href="#">吃货天堂 <span>
                        <img src="Content/images/msj_menuarrow.gif" alt=""></span></a>
                        <div class="navbar-slide">
                            <div class="navbar-slide-top">
                                <h3>家常菜谱</h3>
                                <ul class="navbar-slide-top-ul">
                                    <li><a href="#">家常菜</a></li>
                                    <li><a href="#">凉菜</a></li>
                                    <li><a href="#">素食</a></li>
                                    <li><a href="#">晚餐</a></li>
                                    <li><a href="#">私家菜</a></li>
                                    <li><a href="#">热菜</a></li>
                                    <li><a href="#">海鲜</a></li>
                                    <li><a href="#">孕妇餐</a></li>
                                    <li><a href="#">早餐</a></li>
                                    <li><a href="#">午餐</a></li>
                                    <li><a href="#">甜品点</a></li>
                                    <li><a href="#">汤粥</a></li>
                                    <li><a href="#">宝宝食谱-婴儿食谱</a></li>
                                    <li><a href="#">糕点主食</a></li>
                                    <li><a href="#">微波炉</a></li>
                                </ul>
                            </div>
                            <div class="navbar-slide-middle">
                                <div class="navbar-slide-middle__item">
                                    <h3>中华菜系</h3>
                                    <ul>
                                        <li><a href="#">粤菜</a></li>
                                        <li><a href="#">东北菜</a></li>
                                        <li><a href="#">湘菜</a></li>
                                        <li><a href="#">鲁菜</a></li>
                                        <li><a href="#">浙菜</a></li>
                                        <li><a href="#">湖北菜</a></li>
                                        <li><a href="#">清真菜</a></li>
                                    </ul>
                                </div>
                                <div class="navbar-slide-middle__item">
                                    <h3>各地小吃</h3>
                                    <ul>
                                        <li><a href="#">四川小吃</a></li>
                                        <li><a href="#">广东小吃</a></li>
                                        <li><a href="#">北京小吃</a></li>
                                        <li><a href="#">陕西小吃</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="navbar-slide-middle">
                                <div class="navbar-slide-middle__item">
                                    <h3>外国菜谱</h3>
                                    <ul>
                                        <li><a href="#">韩国料理</a></li>
                                        <li><a href="#">日本料理</a></li>
                                        <li><a href="#">法国菜</a></li>
                                        <li><a href="#">意大利餐</a></li>
                                    </ul>
                                </div>
                                <div class="navbar-slide-middle__item">
                                    <h3>烘培</h3>
                                    <ul>
                                        <li><a href="#">蛋糕面包</a></li>
                                        <li><a href="#">饼干配方</a></li>
                                        <li><a href="#">甜品点心</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="navbar-slide-middle">
                                <div class="navbar-slide-middle__item">
                                    <h3>厨房百科</h3>
                                    <ul>
                                        <li><a href="#">摆盘围边</a></li>
                                        <li><a href="#">烹饪技巧</a></li>
                                        <li><a href="#">生活妙招</a></li>
                                        <li><a href="#">美食专题</a></li>
                                    </ul>
                                </div>
                                <div class="navbar-slide-middle__item">
                                    <h3>食材百科</h3>
                                    <ul>
                                        <li><a href="#">蔬菜</a></li>
                                        <li><a href="#">水果</a></li>
                                        <li><a href="#">谷类</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="navbar-box-ul-li"><a href="#">吃货菜谱</a></li>
                    <li class="navbar-box-ul-li"><a href="#">手机版下载</a></li>
                </ul>
            </div>
        </div>


        <div class="main">
            <div class="inner">
                <h1>登陆后，更幸福</h1>
                <div class="box">
                    <div class="left">
                        <ul>
                            <li><a href="#">QQ账号登录</a></li>
                            <li><a href="#">新浪微博账号登录</a></li>
                            <li><a href="#">人人网账号登录</a></li>
                            <li><a href="#">百度账号登录</a></li>
                            <li><a href="#">开心网账号登录</a></li>
                            <li><a href="#">盛大通行证登录</a></li>
                        </ul>
                    </div>
                    <%--      <form action="" method="post" runat="server">--%>
                    <div class="right">
                        <div class="zhuce">
                            <h2>登陆吃货网 <span>还没有账号？<a href="#">注册账号</a></span></h2>
                            <ul>
                                <li>用户名/邮箱：
                                <asp:TextBox ID="userText" runat="server" CssClass="recordLeft"></asp:TextBox>
                                    <%--<input type="text" placeholder="用户名邮箱" id="left">--%>
                                </li>
                                <li>密码：
                                <asp:TextBox ID="pwdText" runat="server" CssClass="recordUser"></asp:TextBox>
                                    <%--<input type="password" placeholder="密码">--%>
                                </li>
                                <li>
                                    <%-- <button>登陆</button>--%>
                                    <asp:Button ID="recordBtn" runat="server" CssClass="recordBtn" Text="登录" /><a href="#">忘记密码？</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <%--</form>--%>
                </div>
            </div>


            <div class="footer">
                <div class="fl">
                    <img src="images/logo_f.png" alt="">
                    <p>一个已被用户注册访问超过<span>13,000,000,000</span>次</p>
                    <p>帮助了超过<span>10,000,000</span>学会烹饪美食的网络</p>
                    <p>每天有超过<span>9,000,000</span>人通过吃货网和移动APP解决他们的烹饪问题</p>
                    <p>现在这些教学还在不断的增长着，欢迎来一起使用吃货网</p>
                </div>
                <div class="fr">
                    <ul>
                        <li>
                            <h4>关注73.3万</h4>
                            <p>点击进入</p>
                            <p>吃货网官方微博</p>
                        </li>
                        <li>
                            <h3>关注9.7万</h3>
                            <p>点击进入</p>
                            <p>吃货网QQ空间</p>
                        </li>
                        <li>
                            <h2></h2>
                            <p>扫描二维码添加</p>
                            <p>吃货网为微信好友</p>
                        </li>
                        <li class="mr0">
                            <h1></h1>
                            <p>扫描二维码下载</p>
                            <p>吃货网手机客户端</p>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="foot">
                <a href="#">公司简介</a>
                <a href="#">企业文化</a>
                <a href="#">公司动态</a>
                <a href="#">免责声明</a>
                <a href="#">联系我们</a>
                <a href="#">招贤纳士</a>
                <a href="#">商务合作</a>
                <a href="#">网站地图</a>
                <a href="#">友情连接</a>
                <a href="#">吃货网移动APP</a>
                <p>ICP证号：京ICP备14030359号 京公网安备11010802009977 Copyright @ 2003-2014 MEISHIJ CO.LTD</p>
            </div>
        </div>
    </form>
</body>

</html>

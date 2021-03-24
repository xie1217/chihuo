using BLL;
using MODAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Tsukkomi
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_Click(object sender, EventArgs e)
        {
            //1、先获取数据
            string userName = this.userName.Text;
            string passWord = this.passWord.Text;

            //2、判断是否为空
            if (userName == "")
            {
                Response.Write("<script>alert('请输入用户名！');</script>");
                return;
            }
            if (passWord == "")
            {
                Response.Write("<script>alert('请输入密码！');</script>");
                return;
            }


            User user = new User()
            {
                username = userName,
                password = passWord
            };


            //3、判断用户是否存在
            if (UserManager.CheckLoginIn(user))
            {
                //会话，可以跨页面展示  session（保存在服务端的）   Cookie（保存在用户电脑里）
                //HTTP协议（无状态协议）=》它只需要传输数据
                //给请求贴标签，通过标签来标识当前是谁访问了我（每次请求都带着这个标签过来，我就知道是谁了）
                //记住：关键字是严格区分大小写的！！
                Session["username"] = userName; //它只能存储字符串！！
                Session["password"] = passWord;
                //跳转到首页
                Response.Redirect("Index.aspx"); //因为没有创建Index.aspx 跳转会报错
            }
            else
            {
                Response.Write("<script>alert('用户名或密码错误！');</script>");
            }
        }
    }
}
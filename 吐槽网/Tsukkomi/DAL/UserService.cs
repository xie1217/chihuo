using MODAL;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserService
    {
        //用户注册
        public static bool InsertUser(User user)
        {
            string sql = string.Format("INSERT INTO [dbo].[User]([username],[password],[nickname]) VALUES ('{0}','{1}','{2}')", user.username, user.password, user.nickname);
            return DBHelper.updateData(sql);
        }

        //用户登录
        public static bool CheckLoginIn(User user)
        {
            string sql = string.Format("SELECT * FROM[dbo].[User] where username='{0}' and password='{1}'", user.username, user.password);
            SqlDataReader dr = DBHelper.getData(sql);
            //如果查找得到用户，返回为真
            if (dr.Read())
            {
                dr.Close();
                return true;
            }
            dr.Close();
            return false;
        }

        //查询用户信息
        public static User GetUser(string username)
        {
            string sql = string.Format("SELECT * FROM [dbo].[User] where username='{0}'", username);
            SqlDataReader dr = DBHelper.getData(sql);
            User user = null;
            if (dr.Read())
            {
                user = new User();
                user.username = dr["username"].ToString();
            }
            dr.Close();
            return user;
        }
    }
}

using DAL;
using MODAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class UserManager
    {
        //注册
        public static bool insertUser(User user)
        {
            User users = UserService.GetUser(user.username);
            if (users != null)
            {
                return false;
            }
            else
            {
                return UserService.InsertUser(user);
            }
        }

        //登录
        public static bool CheckLoginIn(User user)
        {
            return UserService.CheckLoginIn(user);
        }
    }
}

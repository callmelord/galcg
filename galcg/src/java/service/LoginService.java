package service;

public class LoginService {
    /**
     * 登陆功能
     * @param username
     * @param password
     * @return boolean
     */
    
    public boolean isLogin(String username, String password) {
        boolean flag = false;
        if ("callopingpig@126.com".equals(username.trim()) && "111111".equals(password.trim())) {
            flag = true;
        }
        return flag;
    }
}

package com.siemens.oa.entity;

/**
 * Created by gxurn9 on 11/17/2017.
 */
public class User {
    private int UserID;
    private String UserName;
    private String PassWord;
    private String DisplayName;
    private boolean Status;

    public User(){
        this.Status = true;
    }

    public int getUserID(){
        return UserID;
    }

    public String getUserName(){
        return UserName;
    }

    public void setUserName(String userName){
        this.UserName = userName;
    }

    public String getPassWord(){
        return PassWord;
    }

    public void setPassWord(String passWord){
        this.PassWord = passWord;
    }

    public String getDisplayName(){
        return DisplayName;
    }

    public void setDisplayName(String displayName){
        this.DisplayName = displayName;
    }

    public boolean getStatus(){
        return Status;
    }

    public void setStatus(boolean status){
        this.Status = status;
    }
}

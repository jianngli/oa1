package com.siemens.oa.entity;

/**
 * Created by gxurn9 on 11/17/2017.
 */
public class Time {
    private int TimeID;
    private int WorkID;
    private int Day;
    private int Hour;
    private boolean M_Status;

    public Time(){
        this.M_Status = true;
    }

    public int getTimeID(){
        return TimeID;
    }

    public int getWorkID(){
        return WorkID;
    }

    public int getDay(){
        return Day;
    }

    public void setDay(int day){
        this.Day = day;
    }

    public int getHour(){
        return Hour;
    }

    public void setHour(int hour){
        this.Hour = hour;
    }

    public boolean getMstatus(){
        return M_Status;
    }

    public void setM_Status(boolean m_status){
        this.M_Status = m_status;
    }

}

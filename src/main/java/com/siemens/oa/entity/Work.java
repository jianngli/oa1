package com.siemens.oa.entity;

/**
 * Created by gxurn9 on 11/17/2017.
 */
public class Work {
    private int WorkID;
    private int UserID;
    private int ProjectID;
    private int TaskID;
    private int WeekID;

    public int getWorkID(){
        return WorkID;
    }

    public int getUserID(){
        return UserID;
    }

    public int getProjectID(){
        return ProjectID;
    }

    public int getTaskID(){
        return TaskID;
    }

    public int getWeekID(){
        return WeekID;
    }

    public void setWeekID(int weekID){
        this.WeekID = weekID;
    }
}

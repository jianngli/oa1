package com.siemens.oa.entity;

/**
 * Created by gxurn9 on 11/17/2017.
 */
public class Task {
    private int TaskID;
    private String TaskName;

    public int getTaskID(){
        return TaskID;
    }

    public String getTaskName(){
        return TaskName;
    }

    public void setTaskName(String taskName){
        this.TaskName = taskName;
    }

}

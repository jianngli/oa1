package com.siemens.oa.entity;

/**
 * Created by gxurn9 on 11/17/2017.
 */
public class Project {
    private int ProjectID;
    private String ProjectName;

    public int getProjectID(){
        return ProjectID;
    }

    public String getProjectName(){
        return ProjectName;
    }

    public void setProjectName(String projectName){
        this.ProjectName = projectName;
    }
}

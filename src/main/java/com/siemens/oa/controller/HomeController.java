package com.siemens.oa.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Controller
@RequestMapping("/")
public class HomeController {

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @RequestMapping(value = "home")
    public String home(ModelMap map) {
        //这里判断是否登录
        return "index";
    }

    @RequestMapping(value = "login")
    public String doLogin(ModelMap map) {
        //这里判断是否登录
        return "login";
    }

    /**
     * 根据时间，获取工作和项目细节
     *
     * @return
     */
    @RequestMapping(value = "getHoursByTime")
    @ResponseBody
    public HashMap<String, Object> getHoursByTime(@RequestParam String time) {
        HashMap<String, Object> map = new HashMap<>();
        logger.info("这里是controller");
        map.put("code", 201);//
        map.put("time", time);
        map.put("message", "模拟登录，登录失败！");
        return map;
    }

}

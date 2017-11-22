package com.siemens.oa.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public HashMap<String, Object> doLogin(@RequestParam String userName,
                                           @RequestParam String password) {
        logger.info("这里是controller");
        HashMap<String, Object> map = new HashMap<>();
        map.put("code", 200);
        map.put("userName", userName);
        map.put("password", password);
        map.put("message", "登录成功！");
        return map;
    }

}

package com.tali.safetynest.controllers;

import java.io.IOException;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;
import com.tali.safetynest.models.User;
import com.tali.safetynest.services.UserService;

@Controller
public class Users {
private UserService userService;

public Users(UserService userService) {
    this.userService = userService;
}
    
    
    	@PostMapping("/")
    public void registration(HttpServletRequest request) {
    		System.out.println("in post");
    		String role = request.getParameter("role");
    		String email = request.getParameter("email");
    		String peopleNum = request.getParameter("peopleNum");
    		String allowPets = request.getParameter("allowPets");
    		String dayNum = request.getParameter("dayNum");
    		String zipcode = request.getParameter("zipCode");
    		String name = request.getParameter("name");
    		System.out.println(zipcode);
    		
        User user = new User();
        user.setUsername(email);
        user.setZipcode(Integer.parseInt(zipcode));
        user.setName(name);
        user.setProvider(Boolean.parseBoolean(role));
        user.setRoomNumber(Integer.parseInt(peopleNum));
        user.setDays(Integer.parseInt(dayNum));
        user.setPets(Boolean.parseBoolean(allowPets));
        userService.saveUser(user);    
        
    	}
        
    	@RequestMapping("/{zipcode}")
        public void seekerPage(@PathVariable(value="zipcode") int zipcode, HttpServletRequest request, HttpServletResponse response) throws IOException {
    		User user = userService.findOneByZipcode(zipcode);
    		String json = new Gson().toJson(user);
    	    response.setContentType("application/json");
    	    response.setCharacterEncoding("UTF-8");
    	    response.getWriter().write(json);

    		
    	}
    
    
}

package com.tali.safetynest.services;

import org.springframework.stereotype.Service;

import com.tali.safetynest.models.User;
import com.tali.safetynest.repositories.UserRepository;

@Service
public class UserService {
    private UserRepository userRepository;
    
    public UserService(UserRepository userRepository)     {
        this.userRepository = userRepository;
    }
    
    
     
     // 2 
    public void saveUser(User user) {
        userRepository.save(user);
    }    
    
    // 3
    public User findOneByZipcode(int zipcode) {
        return userRepository.findOneByZipcode(zipcode);
    }
    
}
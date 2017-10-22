package com.tali.safetynest.services;

import java.util.List;

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
    public List <User> findOne() {
        return userRepository.getSingleUser();
    }
    public void destroyUser(Long id) {
        userRepository.delete(id);
    }

    
}
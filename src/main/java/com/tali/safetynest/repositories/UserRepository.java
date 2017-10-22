package com.tali.safetynest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tali.safetynest.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	User findByUsername(String username);
	User findOneByZipcode(int zipcode);
	@Query("SELECT u FROM User u WHERE is_provider = true")
     List<User> getSingleUser();
}

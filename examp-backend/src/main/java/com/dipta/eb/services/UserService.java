package com.dipta.eb.services;

import java.util.Set;

import com.dipta.eb.models.User;
import com.dipta.eb.models.UserRole;

public interface UserService {
	
	//create
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	//get
	public User getUser(String userName);
	//delete
	public void deleteUser(Long id);
}

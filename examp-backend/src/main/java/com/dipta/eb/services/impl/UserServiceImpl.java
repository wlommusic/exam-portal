package com.dipta.eb.services.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dipta.eb.models.User;
import com.dipta.eb.models.UserRole;
import com.dipta.eb.repo.RoleRepo;
import com.dipta.eb.repo.UserRepo;
import com.dipta.eb.services.UserService;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private RoleRepo roleRepo;
	// creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		User local = this.userRepo.findByUserName(user.getUserName());
		if(local !=null) {
			System.out.println("user already exists");
			throw new Exception("user already exists");
		}else {
			for(UserRole ur:userRoles) {
				roleRepo.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local = this.userRepo.save(user);
		}
		return local;
	}
	// get user
	@Override
	public User getUser(String userName) {
		return this.userRepo.findByUserName(userName);
	}
	//delete user
	@Override
	public void deleteUser(Long id) {
		this.userRepo.deleteById(id);
		System.out.println("user deleted with"+" id:"+id);
	}

}

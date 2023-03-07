package com.dipta.eb.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dipta.eb.models.User;

public interface UserRepo extends JpaRepository<User, Long> {
	public User findByUserName(String userName);
}

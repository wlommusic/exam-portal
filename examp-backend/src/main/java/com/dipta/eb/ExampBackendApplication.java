package com.dipta.eb;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dipta.eb.models.Role;
import com.dipta.eb.models.User;
import com.dipta.eb.models.UserRole;
import com.dipta.eb.services.UserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ExampBackendApplication implements CommandLineRunner{
	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(ExampBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting....");
		
//		 User user= new User();
//		 user.setFirstName("dipta");
//		 user.setLastName("panda");
//		 user.setUserName("Admin");
//
//		// encoding password with bcrypt
//		user.setPassword(this.bCryptPasswordEncoder.encode("admin"));
//
//		 user.setEmail("abc@gmail.com");
//
//		 Role role1 = new Role();
//		 role1.setRoleId(1L);
//		 role1.setRole("ADMIN");
//		Set<UserRole> userRoleSet = new HashSet<UserRole>();
//		UserRole uRole = new UserRole();
//		uRole.setRole(role1);
//		uRole.setUser(user);
//
//		userRoleSet.add(uRole);
//		User user2 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user.getUserName());

		
	}

}

package com.dipta.eb.controller;

import com.dipta.eb.config.JWTUtil;
import com.dipta.eb.models.JwtRequest;
import com.dipta.eb.models.Jwtresponse;
import com.dipta.eb.models.User;
import com.dipta.eb.services.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private JWTUtil jwtUtil;

    // get token
    @PostMapping("/get-token")
    public ResponseEntity<?> generateToken (@RequestBody JwtRequest jwtRequest) throws Exception {
      try {
          authenticate(jwtRequest.getUserName(),jwtRequest.getPassword());
      }catch (UsernameNotFoundException e){
          e.printStackTrace();
          throw new Exception("username not found");
      }
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUserName());
      String token = this.jwtUtil.generateToken(userDetails);
      return ResponseEntity.ok(new Jwtresponse(token));
    };

    public void authenticate(String userName,String password) throws Exception {
        try {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName,password));
        }catch (DisabledException e){
            throw new Exception("USER DISABLED "+e.getMessage());
        }catch (BadCredentialsException e){
            throw new Exception("bad credentials "+e.getMessage());
        }
    }
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        return (User) this.userDetailsService.loadUserByUsername(principal.getName());
    }
}

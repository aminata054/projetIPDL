package com.africaCulture.africaquiz.controller;

import com.africaCulture.africaquiz.model.LoginRequest;
import com.africaCulture.africaquiz.model.User;
import com.africaCulture.africaquiz.service.UserService;
import com.africaCulture.africaquiz.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

  @Autowired
  private UserService userService;

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  @Autowired
  private JwtUtil jwtUtil;

  @PostMapping("/register")
  public ResponseEntity<User> register(@RequestBody User registrationRequest) {
    try {
      User newUser = userService.registerUser(
          registrationRequest.getUsername(),
          registrationRequest.getEmail(),
          registrationRequest.getPassword());
      return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    } catch (IllegalArgumentException e) {
      return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
    try {
      UserDetails userDetails = userService.loadUserByUsernameOrEmail(loginRequest.getUsername()); // Use the
      // UserDetailsService method

      if (passwordEncoder.matches(loginRequest.getPassword(), userDetails.getPassword())) {
        // Authentication successful, generate JWT
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(jwt); // Return the JWT in the response body
      } else {
        // Authentication failed (wrong password)
        return new ResponseEntity<>("Mot de passe incorrect.", HttpStatus.UNAUTHORIZED);
      }
    } catch (IllegalArgumentException e) {
      // Authentication failed (user not found)
      return new ResponseEntity<>("Nom d'utilisateur incorrect.", HttpStatus.UNAUTHORIZED);
    }
  }

}
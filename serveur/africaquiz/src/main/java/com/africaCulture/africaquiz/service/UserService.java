package com.africaCulture.africaquiz.service;

import com.africaCulture.africaquiz.model.User;
import com.africaCulture.africaquiz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  @Transactional
  public User registerUser(String username, String email, String password) {
    if (userRepository.existsByUsername(username)) {
      throw new IllegalArgumentException("Nom d'utilisateur déjà existant.");
    }
    if (userRepository.existsByEmail(email)) {
      throw new IllegalArgumentException("Adresse e-mail déjà existante.");
    }

    User newUser = new User(username, passwordEncoder.encode(password), email);
    return userRepository.save(newUser);
  }

  public User getUserByUsername(String username) {
    return userRepository.findByUsername(username)
        .orElseThrow(() -> new IllegalArgumentException("Utilisateur non trouvé avec ce nom d'utilisateur."));
  }

  public User getUserByEmail(String email) {
    return userRepository.findByEmail(email)
        .orElseThrow(() -> new IllegalArgumentException("Utilisateur non trouvé avec cette adresse e-mail."));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
        .orElseThrow(
            () -> new UsernameNotFoundException("Utilisateur non trouvé avec le nom d'utilisateur : " + username));

    List<GrantedAuthority> authorities = new ArrayList<>();
    authorities.add(new SimpleGrantedAuthority(user.getRole())); // Ajouter le rôle comme une autorité

    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
  }
}
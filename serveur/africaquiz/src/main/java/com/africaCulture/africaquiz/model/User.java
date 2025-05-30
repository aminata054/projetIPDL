package com.africaCulture.africaquiz.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users", schema = "africaquiz_schema")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String username;

  @Column(nullable = false)
  private String password;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(name = "date_creation", nullable = false, updatable = false)
  private LocalDateTime dateCreation = LocalDateTime.now();

  @Column(nullable = false)
  private String role = "USER"; // Rôle par défaut

  // Constructeur par défaut (requis par JPA)
  public User() {
  }

  // Constructeur pour l'enregistrement
  public User(String username, String password, String email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  // Getters
  public Long getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public String getPassword() {
    return password;
  }

  public String getEmail() {
    return email;
  }

  public LocalDateTime getDateCreation() {
    return dateCreation;
  }

  public String getRole() {
    return role;
  }

  // Setters (si vous avez besoin de modifier ces propriétés)
  public void setId(Long id) {
    this.id = id;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setDateCreation(LocalDateTime dateCreation) {
    this.dateCreation = dateCreation;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
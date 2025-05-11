package com.africaCulture.africaquiz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Categorie {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nom; // Exemple : "Histoire", "Musique", "Sport"...

  // ----- Constructeurs -----
  public Categorie() {
  }

  public Categorie(String nom) {
    this.nom = nom;
  }

  // ----- Getters et Setters -----
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNom() {
    return nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }
}

package com.africaCulture.africaquiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.africaCulture.africaquiz.model.Categorie;
import com.africaCulture.africaquiz.service.CategorieService;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*") // pour que le frontend React puisse appeler sans problème
public class CategorieController {

  @Autowired
  private CategorieService categorieService;

  // Ajouter une catégorie
  @PostMapping
  public Categorie ajouterCategorie(@RequestBody Categorie categorie) {
    return categorieService.ajouterCategorie(categorie);
  }

  // Récupérer toutes les catégories
  @GetMapping
  public List<Categorie> recupererToutesLesCategories() {
    return categorieService.recupererToutesLesCategories();
  }
}

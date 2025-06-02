package com.africaCulture.africaquiz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.africaCulture.africaquiz.model.Categorie;
import com.africaCulture.africaquiz.repository.CategorieRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CategorieService {

  @Autowired
  private CategorieRepository categorieRepository;

  // Ajouter une catégorie
  public Categorie ajouterCategorie(Categorie categorie) {
    return categorieRepository.save(categorie);
  }

  // Récupérer toutes les catégories
  public List<Categorie> recupererToutesLesCategories() {
    return categorieRepository.findAll();
  }

  // Récupérer une catégorie par id
  public Optional<Categorie> recupererCategorieParId(Long id) {
    return categorieRepository.findById(id);
  }

  // Supprimer une catégorie par id
  public void supprimerCategorie(Long id) {
    categorieRepository.deleteById(id);
  }
}

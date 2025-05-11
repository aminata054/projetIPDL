package com.africaCulture.africaquiz.service;

import com.africaCulture.africaquiz.model.Question;
import com.africaCulture.africaquiz.model.QuestionDTO;
import com.africaCulture.africaquiz.model.ReponseQuestionDTO;
import com.africaCulture.africaquiz.model.ResultatReponseDTO;
import com.africaCulture.africaquiz.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class QuizService {

  @Autowired
  private QuestionRepository questionRepository;

  // ✅ 1. Renvoie un nombre aléatoire de questions par catégorie
  public List<QuestionDTO> getRandomQuestionsByCategorie(Long categorieId, int nombre) {
    List<Question> allQuestions = questionRepository.findByCategorieId(categorieId);
    Collections.shuffle(allQuestions);
    return allQuestions.stream()
        .limit(nombre)
        .map(this::toDTO)
        .collect(Collectors.toList());
  }

  // ✅ 2. Renvoie TOUTES les questions d'une catégorie (pas random)
  public List<QuestionDTO> getQuestionsByCategorie(Long categorieId) {
    return questionRepository.findByCategorieId(categorieId).stream()
        .map(this::toDTO)
        .collect(Collectors.toList());
  }

  // ✅ 3. Convertit une Question en QuestionDTO
  private QuestionDTO toDTO(Question question) {
    return new QuestionDTO(
        question.getId(),
        question.getEnonce(),
        question.getOption1(),
        question.getOption2(),
        question.getOption3(),
        question.getOption4());
  }

  public List<Question> genererQuiz(Long categorieId, int nb) {
    return questionRepository.findRandomQuestionsByCategorie(categorieId, nb);
  }

  public Map<String, Object> calculerScore(List<ReponseQuestionDTO> reponses) { // Modifié pour accepter
                                                                                // ReponseQuestionDTO
    int score = 0;
    List<ResultatReponseDTO> resultats = new ArrayList<>();

    for (ReponseQuestionDTO reponseQuestion : reponses) {
      Question question = questionRepository.findById(reponseQuestion.getQuestionId()).orElse(null);
      if (question != null) {
        boolean estCorrecte = reponseQuestion.getReponseChoisie().equals(question.getBonneReponse());
        if (estCorrecte) {
          score++;
        }
        resultats.add(new ResultatReponseDTO( // Création d'un ResultatReponseDTO
            question.getId(),
            reponseQuestion.getReponseChoisie(),
            question.getBonneReponse(),
            estCorrecte));
      }
    }

    Map<String, Object> response = new HashMap<>();
    response.put("scoreTotal", score);
    response.put("resultatsParQuestion", resultats);
    return response;
  }

}

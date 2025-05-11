package com.africaCulture.africaquiz.controller;

import com.africaCulture.africaquiz.model.QuestionDTO;
import com.africaCulture.africaquiz.service.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

  @Autowired
  private QuizService quizService;

  @GetMapping("/start")
  public ResponseEntity<List<QuestionDTO>> startQuiz(
      @RequestParam Long categorieId,
      @RequestParam int nombre) {
    List<QuestionDTO> questions = quizService.getRandomQuestionsByCategorie(categorieId, nombre);
    return ResponseEntity.ok(questions);
  }
}

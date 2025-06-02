package com.africaCulture.africaquiz.controller;

import com.africaCulture.africaquiz.model.Question;
import com.africaCulture.africaquiz.model.QuestionDTO;
import com.africaCulture.africaquiz.model.SoumissionQuizDTO;
import com.africaCulture.africaquiz.service.QuestionService;
import com.africaCulture.africaquiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

  @Autowired
  private QuestionService questionService;

  @PostMapping
  public Question ajouterQuestion(@RequestBody Question question) {
    return questionService.ajouterQuestion(question);
  }

  @GetMapping
  public List<Question> recupererToutesLesQuestions() {
    return questionService.recupererToutesLesQuestions();
  }

  @Autowired
  private QuizService quizService;

  @GetMapping("/categorie/{id}")
  public ResponseEntity<List<QuestionDTO>> getQuestionsByCategorie(@PathVariable Long id) {
    List<QuestionDTO> questions = quizService.getQuestionsByCategorie(id);
    return ResponseEntity.ok(questions);
  }

  @PostMapping("/quiz/submit")
  public ResponseEntity<Map<String, Object>> submitQuiz(@RequestBody SoumissionQuizDTO soumission) {
    Map<String, Object> resultat = quizService.calculerScore(soumission.getReponses());
    return ResponseEntity.ok(resultat);
  }

  @GetMapping("/quiz/start/{categorieId}")
  public ResponseEntity<List<Question>> genererQuiz(
      @PathVariable Long categorieId,
      @RequestParam(defaultValue = "5") int nb) {
    List<Question> questions = quizService.genererQuiz(categorieId, nb);
    return ResponseEntity.ok(questions);
  }

}

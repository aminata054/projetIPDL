package com.africaCulture.africaquiz.service;

import com.africaCulture.africaquiz.model.Question;
import com.africaCulture.africaquiz.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

  @Autowired
  private QuestionRepository questionRepository;

  public Question ajouterQuestion(Question question) {
    return questionRepository.save(question);
  }

  public List<Question> recupererToutesLesQuestions() {
    return questionRepository.findAll();
  }
}

package com.africaCulture.africaquiz.repository;

import com.africaCulture.africaquiz.model.Question;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Question, Long> {
  List<Question> findByCategorieId(Long categorieId);
}

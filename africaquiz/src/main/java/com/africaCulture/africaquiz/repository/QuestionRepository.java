package com.africaCulture.africaquiz.repository;

import com.africaCulture.africaquiz.model.Question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
  List<Question> findByCategorieId(Long categorieId);

  @Query(value = "SELECT * FROM question WHERE categorie_id = :categorieId ORDER BY RANDOM() LIMIT :nb", nativeQuery = true)
  List<Question> findRandomQuestionsByCategorie(@Param("categorieId") Long categorieId, @Param("nb") int nb);

}

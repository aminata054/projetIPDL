package com.africaCulture.africaquiz.model;

public class ReponseQuestionDTO {
  private Long questionId;
  private String reponseChoisie;

  // Getters et Setters
  public Long getQuestionId() {
    return questionId;
  }

  public void setQuestionId(Long questionId) {
    this.questionId = questionId;
  }

  public String getReponseChoisie() {
    return reponseChoisie;
  }

  public void setReponseChoisie(String reponseChoisie) {
    this.reponseChoisie = reponseChoisie;
  }

}

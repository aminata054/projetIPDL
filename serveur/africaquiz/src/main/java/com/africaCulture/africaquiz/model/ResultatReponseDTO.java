package com.africaCulture.africaquiz.model;

public class ResultatReponseDTO {
  private Long questionId;
  private String reponseChoisie;
  private String bonneReponse;
  private boolean estCorrecte;

  // Constructeurs, getters et setters
  public ResultatReponseDTO() {
  }

  public ResultatReponseDTO(Long questionId, String reponseChoisie, String bonneReponse, boolean estCorrecte) {
    this.questionId = questionId;
    this.reponseChoisie = reponseChoisie;
    this.bonneReponse = bonneReponse;
    this.estCorrecte = estCorrecte;
  }

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

  public String getBonneReponse() {
    return bonneReponse;
  }

  public void setBonneReponse(String bonneReponse) {
    this.bonneReponse = bonneReponse;
  }

  public boolean isEstCorrecte() {
    return estCorrecte;
  }

  public void setEstCorrecte(boolean estCorrecte) {
    this.estCorrecte = estCorrecte;
  }
}
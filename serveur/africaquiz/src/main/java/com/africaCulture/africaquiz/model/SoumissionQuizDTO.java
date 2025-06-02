package com.africaCulture.africaquiz.model;

import java.util.List;

public class SoumissionQuizDTO {
  private List<ReponseQuestionDTO> reponses;

  public List<ReponseQuestionDTO> getReponses() {
    return reponses;
  }

  public void setReponses(List<ReponseQuestionDTO> reponses) {
    this.reponses = reponses;
  }
}

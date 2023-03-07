import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private _http: HttpClient) {}

  getQuestionsFromQuizId(qId: any) {
    return this._http.get(`${APIURL}/question/quiz/all/${qId}`);
  }
  tQuestionsFromQuizIdForTest(qId: any) {
    return this._http.get(`${APIURL}/question/quiz/${qId}`);
  }
  addNewQuestion(question: any) {
    return this._http.post(`${APIURL}/question/`, question);
  }
  deleteQuestion(qId: any) {
    return this._http.delete(`${APIURL}/question/${qId}/`);
  }
  public evalQuiz(questions:any){
    return this._http.post(`${APIURL}/question/eval-quiz`,questions)
  }
}

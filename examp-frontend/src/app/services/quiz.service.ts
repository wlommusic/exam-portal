import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private _http: HttpClient) {}
  //get
  public getQuiz() {
    return this._http.get(`${APIURL}/quiz/`);
  }
  //add
  public addQuiz(quiz:any) {
    return this._http.post(`${APIURL}/quiz/`, quiz);
  }
  //delete
  public deleteQuiz(qId:any){
    return this._http.delete(`${APIURL}/quiz/${qId}`);
  }

  // single quiz
  public getSingleQuiz(qId:any){
    return this._http.get(`${APIURL}/quiz/${qId}`);
  }

  //update
  public updateQuiz(quiz:any){
return this._http.put(`${APIURL}/quiz/`,quiz)
  }

  public findQuizByCategory(cId:any){
    return this._http.get(`${APIURL}/quiz/category/${cId}`)
  }

  public getActiveQuiz(){
    return this._http.get(`${APIURL}/quiz/active/`);
  }

  public getActiveQuizOfCategory(cId:any){
    return this._http.get(`${APIURL}/quiz/category/active/${cId}`)
  }
  
}

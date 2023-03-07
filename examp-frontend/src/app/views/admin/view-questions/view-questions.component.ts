import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css'],
})
export class ViewQuestionsComponent {
  qId: any;
  qTitle: any;
  questions: any = [];

  constructor(
    private _router: ActivatedRoute,
    private _questions: QuestionsService,
    private _snack:MatSnackBar,
  ) {}


  ngOnInit(): void {
    this.qId = this._router.snapshot.params['id'];
    this.qTitle = this._router.snapshot.params['title'];
    // console.log(this.qId,this.qTitle);
    this._questions.getQuestionsFromQuizId(this.qId).subscribe(
      (data: any) => {
        // console.log(data);
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
    
  }
  deleteQuestion(quesId: any) {
    this._questions.deleteQuestion(quesId).subscribe(
      (data: any) => {
        this.questions = this.questions.filter((question:any)=>question.quesId != quesId);
        // console.log(data);
        this._snack.open('question deleted', '', { duration: 3000 });    
      },
      (error: any) => {
        console.log(error);
        this._snack.open('error', '', { duration: 3000 });
      }
    );
  }
}

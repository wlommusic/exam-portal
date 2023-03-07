import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css'],
})
export class ViewQuizesComponent {
  constructor(private _quiz: QuizService, private _snack: MatSnackBar,) {}
  quizzes: any = [];
  ngOnInit(): void {
    this._quiz.getQuiz().subscribe(
      (data: any) => {
        this.quizzes = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteQuiz(qId: any) {
    this._quiz.deleteQuiz(qId).subscribe(
      (data) => {
        this.quizzes = this.quizzes.filter((quiz:any)=>quiz.qId!=qId)
        console.log('quiz deleted');
        this._snack.open('quiz deleted', '', { duration: 3000 });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

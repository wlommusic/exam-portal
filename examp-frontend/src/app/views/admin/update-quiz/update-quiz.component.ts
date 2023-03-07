import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent {
  constructor(private _route: ActivatedRoute, private _quiz: QuizService,private _cat:CategoryService, private _snack: MatSnackBar,private _router:Router) {}

  qId: any = 0;
  quizFormData: any;
  categories: any;

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qId'];
    //alert("message: "+this.qId);
    this._quiz.getSingleQuiz(this.qId).subscribe(
      (data) => {
        // console.log(data);
        this.quizFormData = data;
        this._snack.open('quiz loaded', '😀', { duration: 3000 });
      },
      (error: any) => {
        console.log(error);
        this._snack.open('error', '😅', { duration: 3000 });
      }
    );
    this._cat.categories().subscribe(
      (data) => {
        // console.log(data);
        this.categories=data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  submitQuizData() {
    this._quiz.updateQuiz(this.quizFormData).subscribe(
      (data) => {
        // console.log(data);
        this._snack.open('quiz updated', '😀', { duration: 3000 });
        this._router.navigate(["/admin/quiz/"])
      },
      (error: any) => {
        console.log(error);
        this._snack.open('error', '😀', { duration: 3000 });
      }
    )
  }
}

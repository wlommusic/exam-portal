import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent {
  constructor(private _route: ActivatedRoute, private _quiz: QuizService) {}

  catId: any;
  quizzes: any;

  ngOnInit() {
    this._route.params.subscribe({
      next: (p) => {
        this.catId = p['catId'];
        if (this.catId == 0) {
          this._quiz.getActiveQuiz().subscribe({
            next: (data) => ((this.quizzes = data)),
            error: (err) => console.log(err),
          });
        } else {
          console.log('error loading');
          this._quiz.getActiveQuizOfCategory(this.catId).subscribe({
            next: (data) => ((this.quizzes = data)),
            error: (err) => console.log(err),
          })
          this.quizzes = [];
          //6.04
        }
      },
    });
  }
}

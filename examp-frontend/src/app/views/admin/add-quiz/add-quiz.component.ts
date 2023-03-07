import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  constructor(
    private _category: CategoryService,
    private _snack: MatSnackBar,
    private _quiz: QuizService,
  ) {}

  categories: any = [];

  quizFormData = {
    title: '',
    description: '',
    maxMarks: '',
    noOfQuestions: '',
    active: true,
    category: {
      cId: '',
    },
  };

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(this.categories);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitQuizData() {
      this._quiz.addQuiz(this.quizFormData).subscribe(
        (data: any) => {
          // console.log(data);
          this._snack.open('quiz added', '', { duration: 3000 });
          this.quizFormData = {
            title: '',
            description: '',
            maxMarks: '',
            noOfQuestions: '',
            active: true,
            category: {
              cId: '',
            },
          };
        },
        (error) => {
          console.log(error);
          this._snack.open('some error occured', '', { duration: 3000 });
        }
      );
  
    }
  }

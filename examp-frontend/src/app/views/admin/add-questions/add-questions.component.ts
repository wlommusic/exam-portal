import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
})
export class AddQuestionsComponent {
  public editor:any = ClassicEditor;
  qId: any;
  qTitle: any;
  question: any = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  constructor(
    private _router: ActivatedRoute,
    private _question: QuestionsService,
    private _snack:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._router.snapshot.params['id'];
    this.qTitle = this._router.snapshot.params['title'];
    this.question.quiz['qId'] = this.qId;
  }

  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }
    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }
    this._question.addNewQuestion(this.question).subscribe(
      (data: any) => {
        // console.log(data);
        this.question.content='';
        this.question.option1='';
        this.question.option2='';
        this.question.option3='';
        this.question.option4='';
        this.question.answer='';
        this._snack.open('question added', '', { duration: 3000 });
      },
      (error: any) => {
        console.log(error);
        this._snack.open('error occured', '', { duration: 3000 });
      }
    );
  }
}

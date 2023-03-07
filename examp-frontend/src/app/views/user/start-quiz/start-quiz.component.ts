
import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css'],
})
export class StartQuizComponent {
  
  constructor(
    private _locationst: LocationStrategy,
    private _route: ActivatedRoute,
    private _ques: QuestionsService
  ) {}

  qId: any;
  questions: any;
  marksGot: any = 0;
  correctAnswers: any = 0;
  attempted: any = 0;
  isSubmited=false;
  timer:any;

 
 

  ngOnInit() {
    this.preventBackButton();
    this.qId = this._route.snapshot.params['qId'];
    this.loadQuestions();
  }
  loadQuestions() {
    this._ques.tQuestionsFromQuizIdForTest(this.qId).subscribe({
      next: (data:any) => (
        (this.questions = data),
        this.timer = this.questions.length*2*60,
         this.startTimer()
      ),
      error: (err) => console.log(err),
    });
  }

  preventBackButton() {
    history.pushState(null, 'null', location.href);
    this._locationst.onPopState(() => {
      history.pushState(null, 'null', location.href);
    });
  }
  submit(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon:"info"
    }).then((e)=>{
      if(e.isConfirmed){
        this.evalQuiz();
      }
    })
  }
  startTimer(){
    let t =window.setInterval(()=>{
      if(this.timer==0){
        this.evalQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
   
  };


  getFormattedTime(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} mins: ${ss} secs`;
  }

  evalQuiz(){
    this._ques.evalQuiz(this.questions).subscribe({
      next:(data:any)=>{
        this.marksGot = Number(data.marksGot).toFixed(2);
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmited = true;
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }
  printReport(){
    window.print();
  }

 
}

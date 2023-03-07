package com.dipta.eb.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.dipta.eb.models.exam.Questions;
import com.dipta.eb.models.exam.Quiz;
import com.dipta.eb.services.QuestionService;
import com.dipta.eb.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
    @Autowired
    QuestionService questionService;
    @Autowired
    QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Questions> addQuestion (@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.addQuestion(questions));
    }
    //update question
    @PutMapping("/")
    public ResponseEntity<Questions> updateQuestion (@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.updateQuestion(questions));
    }

    // get all question of 1 quiz
    @GetMapping("/quiz/{qId}")
    public ResponseEntity<?> getQuestionsOfQuiz (@PathVariable("qId") Long qId) {

        Quiz q = this.quizService.getQuiz(qId);
        Set<Questions> ques = q.getQuestions();
        List<Questions> list = new ArrayList(ques);
        if(list.size()>Integer.parseInt(q.getNoOfQuestions())){
            list = list.subList(0,Integer.parseInt(q.getNoOfQuestions()+1));
        }
        list.forEach(q1->{
            q1.setAnswer("");
        });
        Collections.shuffle(list);
        return ResponseEntity.ok(list);


    }

    @GetMapping("/quiz/all/{qId}")
    public ResponseEntity<?> getQuestionsOfQuizAdmin (@PathVariable("qId") Long qId) {
       Quiz q = new Quiz();
       q.setqId(qId);
       Set<Questions> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(q);
       return ResponseEntity.ok(questionsOfQuiz);

    }

    // get single question
    @GetMapping("/{quesId}")
    public Questions getQues(@PathVariable("quesId") Long quesId){
        return this.questionService.getQuestion(quesId);
    }
    @DeleteMapping("/{quesId}")
    public void  deleteQuiz(@PathVariable("quesId")Long quesId){
         this.questionService.deleteQuiz(quesId);
    }

    @PostMapping("/eval-quiz")
    public ResponseEntity<?> evalQuiz(@RequestBody List<Questions> questions){
        double marksGot = 0;
        int correctAnswers = 0;
        int attempted = 0;

        System.out.println(questions);
        for(Questions q:questions){
            Questions question = this.questionService.get(q.getQuesId());
            if(question.getAnswer().equals(q.getGivenAnswer())){
            correctAnswers++;
                double singleMark =  Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();
                   marksGot+=singleMark;
            }
            if( q.getGivenAnswer() !=null){
                attempted++;
            }

        };
        Map<String,Object> map =  Map.of("marksGot",marksGot,"correctAnswers",correctAnswers,"attempted",attempted);
        return ResponseEntity.ok(map);
    };
}

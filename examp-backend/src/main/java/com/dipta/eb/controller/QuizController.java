package com.dipta.eb.controller;

import com.dipta.eb.models.exam.Category;
import com.dipta.eb.models.exam.Quiz;
import com.dipta.eb.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    //add
    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz (@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }
    //update
    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz (@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }
    //get quizzes
    @GetMapping("/")
    public ResponseEntity<?> getQuizzes () {
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }
    // get quiz
    @GetMapping("/{qId}")
    public Quiz getQuiz(@PathVariable("qId")Long qId){
        return this.quizService.getQuiz(qId);
    }
    //delete
    @DeleteMapping("/{qId}")
    public void  deleteQuiz(@PathVariable("qId")Long qId){
        this.quizService.deleteQuiz(qId);
    }

    @GetMapping("/category/{cId}")
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cId")Long cId){
        Category category= new Category() ;
        category.setcId(cId);
        return this.quizService.getQuizzesOfCategory(category);
    }
    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes(){
        return this.quizService.getActiveQuiz();
    }
    @GetMapping("/category/active/{cId}")
    public List<Quiz> getActiveAndCategory(@PathVariable("cId")Long cId){
        Category category= new Category() ;
        category.setcId(cId);
        return this.quizService.getActiveQuizOfCategory(category);
    }

}

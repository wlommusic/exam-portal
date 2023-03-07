package com.dipta.eb.services;

import com.dipta.eb.models.exam.Category;
import com.dipta.eb.models.exam.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface QuizService {
    Quiz addQuiz(Quiz quiz);
    Quiz updateQuiz(Quiz quiz);
    Set<Quiz> getQuizzes();
    Quiz getQuiz(Long qId);
    void deleteQuiz(Long qId);


    public List<Quiz> getQuizzesOfCategory(Category category);
    public List<Quiz> getActiveQuiz();
    public List<Quiz> getActiveQuizOfCategory(Category category);
}

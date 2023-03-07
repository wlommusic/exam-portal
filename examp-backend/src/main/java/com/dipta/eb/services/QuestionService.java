package com.dipta.eb.services;

import com.dipta.eb.models.exam.Questions;
import com.dipta.eb.models.exam.Quiz;

import java.util.Set;

public interface QuestionService {
    Questions addQuestion (Questions questions);
    Questions updateQuestion (Questions questions);
    Set<Questions> getAllQuestion();
    Questions getQuestion(Long quesId);
    void deleteQuestions(Long quesId);
    Set<Questions> getQuestionsOfQuiz(Quiz quiz);

    void deleteQuiz(Long quesId);
    public Questions get(Long questionId);
}

package com.dipta.eb.services.impl;

import com.dipta.eb.models.exam.Category;
import com.dipta.eb.models.exam.Quiz;
import com.dipta.eb.repo.QuizRepo;
import com.dipta.eb.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {
    @Autowired
    private QuizRepo quizRepo;
    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new LinkedHashSet<>(this.quizRepo.findAll());
    }

    @Override
    public Quiz getQuiz(Long qId) {
        return this.quizRepo.findById(qId).get();
    }

    @Override
    public void deleteQuiz(Long qId) {
        this.quizRepo.deleteById(qId);

    }

    @Override
    public List<Quiz> getQuizzesOfCategory(Category category) {
        return this.quizRepo.findBycategory(category);
    }

    @Override
    public List<Quiz> getActiveQuiz() {
        return this.quizRepo.findByActive(true);
    }

    @Override
    public List<Quiz> getActiveQuizOfCategory(Category category) {
        return this.quizRepo.findByCategoryAndActive(category,true);
    }

}

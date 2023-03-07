package com.dipta.eb.services.impl;

import com.dipta.eb.models.exam.Questions;
import com.dipta.eb.models.exam.Quiz;
import com.dipta.eb.repo.QuestionsRepo;
import com.dipta.eb.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    QuestionsRepo questionsRepo;

    @Override
    public Questions addQuestion(Questions questions) {
        return this.questionsRepo.save(questions);
    }

    @Override
    public Questions updateQuestion(Questions questions) {
        return this.questionsRepo.save(questions);
    }

    @Override
    public Set<Questions> getAllQuestion() {
        return (Set<Questions>) this.questionsRepo.findAll();
    }

    @Override
    public Questions getQuestion(Long quesId) {
        return this.questionsRepo.findById(quesId).get();
    }

    @Override
    public void deleteQuestions(Long quesId) {
        Questions   questions  = new Questions();
            questions.setQuesId(quesId);
        this.questionsRepo.delete(questions);
    }

    @Override
    public Set<Questions> getQuestionsOfQuiz(Quiz quiz) {
        return this.questionsRepo.findByQuiz(quiz);
    }

    @Override
    public void deleteQuiz(Long quesId) {
        Questions questions = new Questions();
        questions.setQuesId(quesId);
        this.questionsRepo.delete(questions);
    }

    @Override
    public Questions get(Long questionId) {
        return this.questionsRepo.getOne(questionId);
    }
}

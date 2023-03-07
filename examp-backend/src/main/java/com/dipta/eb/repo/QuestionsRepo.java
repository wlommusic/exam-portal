package com.dipta.eb.repo;

import com.dipta.eb.models.exam.Questions;
import com.dipta.eb.models.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionsRepo extends JpaRepository<Questions,Long> {

    Set<Questions> findByQuiz(Quiz quiz);
}

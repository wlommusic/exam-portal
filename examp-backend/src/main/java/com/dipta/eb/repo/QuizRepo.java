package com.dipta.eb.repo;

import com.dipta.eb.models.exam.Category;
import com.dipta.eb.models.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepo extends JpaRepository<Quiz,Long> {
    public List<Quiz> findBycategory(Category category);
    public List<Quiz> findByActive(Boolean b);
    public List<Quiz> findByCategoryAndActive(Category category,Boolean b);

}

package com.dipta.eb.repo;

import com.dipta.eb.models.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Long> {

}

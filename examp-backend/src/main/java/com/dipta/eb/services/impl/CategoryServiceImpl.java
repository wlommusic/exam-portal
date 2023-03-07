package com.dipta.eb.services.impl;

import com.dipta.eb.models.exam.Category;
import com.dipta.eb.repo.CategoryRepo;
import com.dipta.eb.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepo.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
       return this.categoryRepo.save(category);
    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(this.categoryRepo.findAll());
    }

    @Override
    public Category getCategory(Long cId) {
        return this.categoryRepo.findById(cId).get();
    }

    @Override
    public void deleteCategory(Long cId) {
    Category category = new Category();
    category.setcId(cId);
    this.categoryRepo.delete(category);
    }
}

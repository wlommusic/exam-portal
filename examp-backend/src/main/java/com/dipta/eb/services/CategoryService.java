package com.dipta.eb.services;

import com.dipta.eb.models.exam.Category;

import java.util.Set;

public interface CategoryService {
    Category addCategory(Category category);
    Category updateCategory(Category category);
    Set<Category> getCategories();
    Category getCategory(Long cId);
    void deleteCategory(Long cId);


}

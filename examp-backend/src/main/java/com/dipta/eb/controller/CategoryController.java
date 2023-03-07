package com.dipta.eb.controller;
import com.dipta.eb.models.exam.Category;
import com.dipta.eb.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    // add category
    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category c1 = this.categoryService.addCategory(category);
        return ResponseEntity.ok(c1);
    }
    // get category
    @GetMapping("/{categoryId}")
    public  Category getCategory(@PathVariable("categoryId")Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }
    // get all categories
    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }
    //update
    @PutMapping("/")
    public  Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }
    //delete
    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId")Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }

}

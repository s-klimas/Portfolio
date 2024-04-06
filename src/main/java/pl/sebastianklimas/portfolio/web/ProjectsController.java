package pl.sebastianklimas.portfolio.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/projects")
public class ProjectsController {
    @GetMapping("/recipe-manager")
    public String recipeManager() {
        return "recipe-manager";
    }

    @GetMapping("/java-spring-course-project")
    public String jscp() {
        return "java-spring-course-project";
    }

    @GetMapping("/kraje-javaFX")
    public String krajeJavaFX() {
        return "kraje-javaFX";
    }
}

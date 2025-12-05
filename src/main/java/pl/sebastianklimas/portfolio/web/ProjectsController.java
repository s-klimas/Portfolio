package pl.sebastianklimas.portfolio.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/projects")
public class ProjectsController {

    @GetMapping
    public String projects() {
        return "projects";
    }

    @GetMapping("/recipes-manager")
    public String recipesManager() {
        return "project-full-1";
    }

    @GetMapping("/coupon-calculator")
    public String couponCalculator() {
        return "project-full-2";
    }

    @GetMapping("/ai-guesser")
    public String aiGuesser() {
        return "project-full-3";
    }

    @GetMapping("/portfolio")
    public String portfolio() {
        return "project-full-4";
    }
}

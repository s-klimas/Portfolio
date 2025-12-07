package pl.sebastianklimas.portfolio.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/skills")
public class SkillsController {

    @GetMapping
    public String skills() {
        return "skills";
    }

    @GetMapping("/java")
    public String java() {
        return "skills-java";
    }

    @GetMapping("/databases")
    public String databases() {
        return "skills-databases";
    }

    @GetMapping("/tools")
    public String tools() {
        return "skills-platforms-tools";
    }

    @GetMapping("/others")
    public String others() {
        return "skills-others";
    }
}

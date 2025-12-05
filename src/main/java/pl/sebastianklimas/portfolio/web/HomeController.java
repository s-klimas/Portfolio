package pl.sebastianklimas.portfolio.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "projects";
    }

    @GetMapping("/about-me")
    public String aboutMe() {
        return "about-me";
    }
}

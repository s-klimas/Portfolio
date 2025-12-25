package pl.sebastianklimas.portfolio.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CardsController {

    @GetMapping("/cards")
    public String cards() {
        return "cards/cards";
    }
}

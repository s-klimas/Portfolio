package pl.sebastianklimas.portfolio.web;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.*;

@Controller
public class CVController {

    @GetMapping(path = "/cv")
    public void downloadFile2(HttpServletResponse response) {
        try {
            Resource resource = new ClassPathResource("files/CVKlimasSebastian.pdf");

            response.setContentType("application/pdf");

            response.setHeader("Content-Disposition", "attachment; filename=" + resource.getFilename());

            InputStream inputStream = resource.getInputStream();

            OutputStream outputStream = response.getOutputStream();

            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            inputStream.close();
            outputStream.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

# 💼 Portfolio

> 🏆 Using a sledgehammer to crack a nut. A simple portfolio website built with **Java**, **Spring Web**, **Spring MVC**, **Thymeleaf**. Designed in **Figma** and deployed using **Docker**. 

---

## 🚀 Tech Stack

| Category       | Technologies |
|----------------|--------------|
| **Backend**    | ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/Spring_Web-6DB33F?style=for-the-badge&logo=spring&logoColor=white) ![SpringMVC](https://img.shields.io/badge/Spring_MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white) |
| **Templating** | ![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white) |
| **Frontend**   | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Design**     | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) |
| **DevOps**     | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |

---

## 📝 Description

This project renders its pages using classic Spring MVC controllers.  
Each section of the site (`projects`, `skills`, `about-me`) is tied to a specific HTML template rendered by Thymeleaf.  
The front-end stays lightweight, using only custom CSS and JavaScript for layout, navigation, and animations.

The site also contains a server-side file download endpoint that streams a PDF CV from the application's resources.

---

## 💡 Interesting Techniques

### 1. Controller-Based Template Rendering
Controllers return simple view names such as `"projects"`, `"skills"`, or `"project-full-1"`, letting Spring and Thymeleaf resolve the corresponding `.html` templates automatically.

### 2. Server-Side File Streaming (CV Download)
The `/cv` endpoint streams a PDF from the classpath using:
- `ClassPathResource`
- `response.getOutputStream()`
- Manual buffer copy loop

A straightforward approach for binary file download.

### 3. Modular Routing via `@RequestMapping`
Each controller handles a clean vertical slice of the site:
- `/` and `/about-me` in `HomeController`
- `/projects/**` in `ProjectsController`
- `/skills/**` in `SkillsController`

This keeps the routing readable and scalable.

---

## 🏫 Notable Technologies and Libraries

### Spring Web + Spring MVC
Used for controller-based routing, template resolution, and response handling.

### Thymeleaf
Handles dynamic server-side HTML rendering.

### Figma
Source for UI layout, spacing, and color structure.

### Docker Multi-Stage Build
The JAR is built in a Maven JDK image and shipped in a minimal OpenJDK runtime container.

---


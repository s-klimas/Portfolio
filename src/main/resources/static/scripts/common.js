function hideAll() {
    const toHide = document.querySelector(`.skill-select-info`);
    toHide.style.display = "none";

    document.querySelectorAll(`.skill`).forEach((item) => {
        item.style.display = "none";
    })
}

function deactivateAll() {
    document.querySelectorAll(`.skill-point`).forEach((element) => {
        element.classList.remove("skill-point-active");
    });
}

function java() {
    console.log("java");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-java`).classList.add("skill-point-active");
    document.querySelector(`.skill-java`).style.display = "flex";
}

function spring() {
    console.log("spring");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-spring`).classList.add("skill-point-active");
    document.querySelector(`.skill-spring`).style.display = "flex";
}

function orm() {
    console.log("orm");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-orm`).classList.add("skill-point-active");
    document.querySelector(`.skill-orm`).style.display = "flex";
}

function testing() {
    console.log("testing");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-testing`).classList.add("skill-point-active");
    document.querySelector(`.skill-testing`).style.display = "flex";
}

function javaTooling() {
    console.log("javaTooling");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-java-tooling`).classList.add("skill-point-active");
    document.querySelector(`.skill-java-tooling`).style.display = "flex";
}

function mvc() {
    console.log("mvc");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-mvc`).classList.add("skill-point-active");
    document.querySelector(`.skill-mvc`).style.display = "flex";
}

function desktop() {
    console.log("desktop");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-desktop`).classList.add("skill-point-active");
    document.querySelector(`.skill-desktop`).style.display = "flex";
}

function postgresql() {
    console.log("postgresql");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-postgresql`).classList.add("skill-point-active");
    document.querySelector(`.skill-postgresql`).style.display = "flex";
}

function h2() {
    console.log("h2");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-h2`).classList.add("skill-point-active");
    document.querySelector(`.skill-h2`).style.display = "flex";
}

function mysql() {
    console.log("mysql");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-mysql`).classList.add("skill-point-active");
    document.querySelector(`.skill-mysql`).style.display = "flex";
}

function liquibase() {
    console.log("liquibase");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-liquibase`).classList.add("skill-point-active");
    document.querySelector(`.skill-liquibase`).style.display = "flex";
}

function nosql() {
    console.log("nosql");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-nosql`).classList.add("skill-point-active");
    document.querySelector(`.skill-nosql`).style.display = "flex";
}

function intellij() {
    console.log("intellij");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-intellij`).classList.add("skill-point-active");
    document.querySelector(`.skill-intellij`).style.display = "flex";
}

function github() {
    console.log("github");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-github`).classList.add("skill-point-active");
    document.querySelector(`.skill-github`).style.display = "flex";
}

function gitlab() {
    console.log("gitlab");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-gitlab`).classList.add("skill-point-active");
    document.querySelector(`.skill-gitlab`).style.display = "flex";
}

function docker() {
    console.log("docker");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-docker`).classList.add("skill-point-active");
    document.querySelector(`.skill-docker`).style.display = "flex";
}

function postman() {
    console.log("postman");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-postman`).classList.add("skill-point-active");
    document.querySelector(`.skill-postman`).style.display = "flex";
}

function frontend() {
    console.log("frontend");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-frontend`).classList.add("skill-point-active");
    document.querySelector(`.skill-frontend`).style.display = "flex";
}

function figma() {
    console.log("figma");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-figma`).classList.add("skill-point-active");
    document.querySelector(`.skill-figma`).style.display = "flex";
}

function php() {
    console.log("php");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-php`).classList.add("skill-point-active");
    document.querySelector(`.skill-php`).style.display = "flex";
}

function python() {
    console.log("python");

    hideAll();
    deactivateAll();

    document.querySelector(`.skill-point-python`).classList.add("skill-point-active");
    document.querySelector(`.skill-python`).style.display = "flex";
}

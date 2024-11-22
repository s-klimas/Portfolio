const selectLanguage = document.querySelector(`.select-language`);
const optionPl = document.querySelector(`.option-pl`);
const optionEn = document.querySelector(`.option-en`);
const selectTech = document.querySelector(`.select-tech`);

window.addEventListener('DOMContentLoaded', async () => {
    let currentLanguage = getCookie("language");
    if (currentLanguage === "en") {
        optionEn.setAttribute('selected', true);
        loadEnVer();
    } else {
        optionPl.setAttribute('selected', true);
        loadPlVer();
    }
});

selectLanguage.addEventListener(`change`, e => {
    e.preventDefault();

    if (e.target.value === "pl") {
        document.cookie = "language=pl; path=/;";
        loadPlVer();
    } else if (e.target.value === "en") {
        document.cookie = "language=en; path=/;";
        loadEnVer();
    } else {
        console.log("Unknown value")
    }
})

selectTech.addEventListener(`change`, e => {
    e.preventDefault();

    switch (e.target.value) {
        case 'all':
            document.querySelectorAll(`.all`).forEach(element => {
                element.style.removeProperty(`display`);
            });
            break;
        case 'AI':
            hideAll();
            document.querySelectorAll(`.ai`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'API':
            hideAll();
            document.querySelectorAll(`.api`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'assertj':
            hideAll();
            document.querySelectorAll(`.assertj`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'h2-mysql':
            hideAll();
            document.querySelectorAll(`.h2-mysql`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'docker':
            hideAll();
            document.querySelectorAll(`.docker`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'github-pages':
            hideAll();
            document.querySelectorAll(`.github-pages`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'hibernate':
            hideAll();
            document.querySelectorAll(`.hibernate`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'frontend':
            hideAll();
            document.querySelectorAll(`.frontend`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'java':
            hideAll();
            document.querySelectorAll(`.java`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'java-fx':
            hideAll();
            document.querySelectorAll(`.java-fx`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'junit-5':
            hideAll();
            document.querySelectorAll(`.junit-5`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'liquibase':
            hideAll();
            document.querySelectorAll(`.liquibase`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'mailtrap':
            hideAll();
            document.querySelectorAll(`.mailtrap`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'mackaroo':
            hideAll();
            document.querySelectorAll(`.mackaroo`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'mockito':
            hideAll();
            document.querySelectorAll(`.mockito`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'OOP':
            hideAll();
            document.querySelectorAll(`.oop`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'scene-builder':
            hideAll();
            document.querySelectorAll(`.scene-builder`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'serialization':
            hideAll();
            document.querySelectorAll(`.serialization`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'spring':
            hideAll();
            document.querySelectorAll(`.spring`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'streams':
            hideAll();
            document.querySelectorAll(`.streams`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
        case 'thymeleaf':
            hideAll();
            document.querySelectorAll(`.thymeleaf`).forEach(element => {
                element.style.removeProperty(`display`);
            })
            break;
    }
})

function hideAll() {
    document.querySelectorAll(`.all`).forEach(element => {
        element.style.display = `none`;
    });
}

function loadPlVer() {
    document.querySelectorAll("[data-lang]").forEach(element => {
        if (element.getAttribute(`data-lang`) === "pl") {
            element.style.removeProperty(`display`);
        }
        if (element.getAttribute(`data-lang`) === "en") {
            element.style.display = `none`;
        }
    });
}

function loadEnVer() {
    document.querySelectorAll("[data-lang]").forEach(element => {
        if (element.getAttribute(`data-lang`) === "en") {
            element.style.removeProperty(`display`);
        }
        if (element.getAttribute(`data-lang`) === "pl") {
            element.style.display = `none`;
        }
    });
}

function getCookie(cookieName) {
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        let [name, value] = cookie.split("=");

        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}

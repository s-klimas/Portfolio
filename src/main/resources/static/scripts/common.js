const selectLanguage = document.querySelector(`.select-language`);
const optionPl = document.querySelector(`.option-pl`);
const optionEn = document.querySelector(`.option-en`);

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

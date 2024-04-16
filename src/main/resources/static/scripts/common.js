const selectLanguage = document.querySelector(`.select-language`);

window.addEventListener('DOMContentLoaded', async () => {
    console.log(document.cookie);

});

selectLanguage.addEventListener(`change`, e => {
    e.preventDefault();

    if (e.target.value === "pl") {
        document.cookie = "language=pl";
        loadPlVer();
    } else if (e.target.value === "en") {
        document.cookie = "language=en";
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
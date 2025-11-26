function java() {
    console.log("ok");
    const elements = document.querySelector(`.grid`);
    elements.classList.remove("grid");

    document.querySelector(`.java`).classList.add("circle-to-full");
}
import hu from "../locales/hu.json"

function setLocale(lang: "hu" | "en") {
    localStorage.setItem("lang", lang);
}

function getLocale() {
    let lang = localStorage.getItem("lang");

    if (!lang) {
        lang = "hu"
    }

    if (lang == "hu") {
        return hu;
    } else {
        //Todo: change to en when english translations made
        return hu;
    }
}

export {setLocale, getLocale}
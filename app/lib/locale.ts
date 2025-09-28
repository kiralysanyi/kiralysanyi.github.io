import hu from "../locales/hu.json"
import en from "../locales/en.json"

function setLocale(lang: "hu" | "en") {
    localStorage.setItem("lang", lang);
    location.reload();
}

function getLocale() {
    let lang = localStorage.getItem("lang");

    if (!lang) {
        lang = "hu"
    }

    if (lang == "hu") {
        return hu;
    } else {
        return en;
    }
}

export {setLocale, getLocale}
const languageToggle = document.querySelector("#languageToggle");
const languageMenu = document.querySelector("#languageMenu");
const languageOptions = document.querySelectorAll(".language-option");
const currentFlag = document.querySelector("#currentFlag");

const flags = {
  da: "/pictures/danishflagg.png",
  en: "/pictures/englishflag.png",
};

function setLanguage(lang) {
  document.querySelectorAll("[data-da][data-en]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });

  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  if (currentFlag) {
    currentFlag.src = flags[lang];
    currentFlag.alt = lang === "da" ? "Dansk flag" : "English flag";
  }
}

const savedLanguage = localStorage.getItem("language") || "da";
setLanguage(savedLanguage);

languageToggle?.addEventListener("click", () => {
  languageMenu?.classList.toggle("open");
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const lang = option.dataset.lang;
    setLanguage(lang);
    languageMenu?.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-dropdown")) {
    languageMenu?.classList.remove("open");
  }
});

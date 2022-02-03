const ham_menu_button = document.getElementById("ham_menu_button");
const ham_menu = document.getElementById("ham_menu");
const ham_menu_close = document.getElementById("ham_menu_close");
let theme_button = document.getElementById("theme_button");

// *******😁😁😁 ----> function to toggle hamburger menu visibility
const funToToggleHamMenu = () => {
  ham_menu.classList.toggle("hidden");
};

//*******😁😁😁 ----> function to toggle theme
const funToToggleTheme = () => {
  // *******😁😁😁 ----> adding a class to the body element of the colore to toggle theme
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    //*******😁😁😁 ----> add class to sun to become moon when dark mode enable
    theme_button.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.classList.remove("dark");
    theme_button.classList.replace("fa-moon", "fa-sun");
  }
};
//*******😁😁😁 ----> calling toggle theme fucntion to get data from the local storage if present to add that theme

funToToggleTheme();

//*******😁😁😁 ----> call function  these button are clicked
ham_menu_button.onclick = funToToggleHamMenu;
ham_menu_close.onclick = funToToggleHamMenu;

//*******😁😁😁 ----> add event to to dark theme and light theme and adding theme value and getting from the localstorage

theme_button.addEventListener("click", (event) => {
  //*******😁😁😁 ----> check them is present or not in the local storage
  let theme = localStorage.theme;
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  //*******😁😁😁 ----> calling toggle theme fucntion to toggle on click on sun
  funToToggleTheme();
});

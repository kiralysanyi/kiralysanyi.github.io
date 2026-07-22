// icons from heroicons: https://heroicons.com/solid
const menuicon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>
`

const closeicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
`

// mobile only, see mobile.css
let isMenuOpen = false

function toggleMenu() {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");

    if (isMenuOpen) {
        nav.classList.remove("nav-show")
        setTimeout(() => {
            header.classList.remove("header-show")
            setTimeout(() => {
                header.style.borderRadius = "999px"
            }, 100);
        }, 200);

    } else {
        header.style.borderRadius = "0px"
        setTimeout(() => {
            header.classList.add("header-show")
            setTimeout(() => {
                nav.classList.add("nav-show")
            }, 200);
        }, 100);
    }

    isMenuOpen = !isMenuOpen
}

document.getElementById("menubtn").addEventListener("click", toggleMenu)
document.getElementById("nav").addEventListener("click", () => {
    isMenuOpen = true;
    toggleMenu();
})
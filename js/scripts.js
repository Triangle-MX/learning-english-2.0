function closeMenu() {
    document.getElementById('sidebar').classList.add("fadeOut");
    document.getElementById('sidebar').classList.remove("sidebar-open");
    document.getElementById('main').classList.remove("sidebar-is-open");
};

function openMenu() {
    document.getElementById('sidebar').setAttribute("class","sidebar-open animated fadeInRight");
    document.getElementById('main').setAttribute("class","sidebar-is-open animated");
    document.getElementById('main').onclick(closeMenu);
};

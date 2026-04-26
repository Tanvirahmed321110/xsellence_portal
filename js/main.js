
function openSidebarDesktop() {
    const collaps_btn = document.getElementById('collaps-btn');
    const main_content = document.getElementById('main-content');
    const sidebar = document.getElementById('sidebar');
    const notic_board = document.getElementById('notic-board');

    // ✅ validation (important)
    if (!collaps_btn || !main_content || !sidebar || !notic_board) {
        console.warn("Sidebar elements not found ❌");
        return;
    }

    collaps_btn.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-small');
        main_content.classList.toggle('main-content-big');
        notic_board.classList.toggle('big');
    });
}



const mobile_menu_btn = document.getElementById('mobile-menu-btn')
const menuIcon = document.getElementById('menu-icon');

let isOpen = false;

// icons
const hamburger = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="7" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="11" y1="17" x2="21" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const closeIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

menuIcon.innerHTML = hamburger;

mobile_menu_btn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    isOpen = !isOpen;

    menuIcon.innerHTML = isOpen ? closeIcon : hamburger;
});
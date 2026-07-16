
// for notification 
const notificationSidebar = document.getElementById('notification-sidebar');

if (notificationSidebar) {

    const overlay = document.getElementById('overlay');

    // open button
    document.getElementById('notification-btn').onclick = () => {
        notificationSidebar.classList.add('open');
        overlay.classList.add('show');
        console.log('click')
    }

    // close button
    document.getElementById('close3').onclick = close;
    overlay.onclick = close;

    function close() {
        notificationSidebar.classList.remove('open');
        overlay.classList.remove('show');
    }
}
else {
    console.log('notificationSidebar not found')
}


const sidebar = document.getElementById('sidebar');
function openSidebarDesktop() {
    const collaps_btn = document.getElementById('collaps-btn');
    const main_content = document.querySelector('.main-content');
    const notic_board = document.getElementById('notic-board');

    // ✅ validation (important)
    if (!collaps_btn || !main_content || !sidebar || !notic_board) {
        console.log("Sidebar elements not found ❌");
        return;
    }

    collaps_btn.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-small');
        main_content.classList.toggle('main-content-big');
        notic_board.classList.toggle('big');
    });
}

openSidebarDesktop()


function mobileSidebar() {
    const mobile_menu_btn = document.getElementById('mobile-menu-btn')
    const menuIcon = document.getElementById('menu-icon');

    if (!mobile_menu_btn || !menuIcon) {
        console.log("Sidebar elements not found ❌");
        return;
    }

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
}

mobileSidebar();


// Dashboard dark theme toggle
(function () {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('dashboardTheme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    window.toggleTheme = function () {
        document.body.classList.toggle('dark-theme');

        const activeTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('dashboardTheme', activeTheme);
    };

    if (themeToggle) {
        themeToggle.setAttribute('title', 'Theme');
        themeToggle.setAttribute('aria-label', 'Toggle dark theme');
    }
})();

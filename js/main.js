
const collaps_btn = document.getElementById('collaps-btn')
const main_content = document.getElementById('main-content')
const sidebar = document.getElementById('sidebar')
const notic_board = document.getElementById('notic-board')


collaps_btn.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-small')
    main_content.classList.toggle('main-content-big')
    notic_board.classList.toggle('big')
})
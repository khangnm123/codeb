// thêm class
function MenuAdd() {
    const down = document.getElementById('menu');
    down.classList.add('show');
}
//xóa class
function MenuClose() {
     const close = document.getElementById('menu');
    close.classList.remove('show');
}

// thêm class
function Search() {
    const down = document.getElementById('search');
    down.classList.add('off');
}
//xóa class
function Close() {
     const close = document.getElementById('search');
    close.classList.remove('off');
}
const dark = document.getElementById('btnDark');
btnDark.addEventListener('click', function(){
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark');
});
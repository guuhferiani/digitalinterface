//DOM JS

document.addEventListener('DOMContentLoaded', () => {
    
    // objeto no HTML (Icone Sol ou Lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = document.documentElement;

    //Função Mudar/Alternar a cor do Tema (Dark / Light)

    function changeTheme() {
        //tema atual
        const currentTheme = rootHtml.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        
        rootHtml.setAttribute('data-theme', isDark ? 'light' : 'dark');
        //troca do icone
        toggleTheme.classList.toggle('bi-sun', !isDark);
        toggleTheme.classList.toggle('bi-moon', isDark);
    }

    if (toggleTheme) {
        toggleTheme.addEventListener('click', changeTheme);
    }



});
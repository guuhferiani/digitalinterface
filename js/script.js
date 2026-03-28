//DOM JS
document.addEventListener('DOMContentLoaded', () => {
    
    // VAR GLOBAL
    // objeto no HTML (Icone Sol ou Lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = document.documentElement;
    // Var para Menu Hamburger
    //botao do menu 
    const menuHamburger = document.getElementById('menuHamburger');
    //estrutura do menu = conteudo/lista
    const menuMobile = document.getElementById('menuMobile');
    // Verificação ou condição
    const icon = menuHamburger?.querySelector('i');
    /* todas as Classes menu-link do HTML */
    const menuLinks = document.querySelectorAll('.menu-link');



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


    //Alternar o menu Mobile e icone
    function toggleMenu()  {

        //lista NAV
        // Variavel conceito de Estado
        const isOpen = menuMobile.classList.toggle('active');
        //condicao
        if(icon) {
            icon.classList.toggle('bi-list', !isOpen);
            icon.classList.toggle('bi-x-lg', isOpen);
        }
    }

    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);
    }


    //Ativar link clicado == Menu
    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menuLinks.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // botao voltar ao topo
    const btnTopo = document.getElementById('btn-topo');
    

});
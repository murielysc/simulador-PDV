/*------------Modo claro/escuro------------*/
function alterarModo() {
    const icone = document.getElementById('icone-modo');

    if (icone.classList.contains('fa-moon')) 
        icone.classList.replace('fa-moon','fa-sun');
    else
    icone.classList.replace('fa-sun','fa-moon');

    document.body.classList.toggle('dark-mode');
        
    
}
/*-----------Recolher / Ampliar menu lateral-----------*/

function processarSideBar(){
    //ocultar os nomes (textos) do menu

    const textos = document.getElementsByClassName('texto-menu');
    for (let i = 0; i < textos.length; i++) 
        textos[i].classList.toggle('texto-collapse');


//centralizar os ícones que sobraram na barra
const menu = document.querySelectorAll('.sidebar nav');

for (let i = 0; i < menu.length; i++) 
    menu[i].classList.toggle('icone-centralizado');

    //Reduzir o comprimento da barra lateral de menu

    const barra = document.getElementById('sidebar');
    barra.classList.toggle('collapsed');
}

/* -----------Verificando se esta logado--------------- */
function verificarLogin() {
    const logado = sessionStorage.getItem('logado') == 'true';
    const nome = sessionStorage.getItem('nome');
   
    if (!logado)
        window.location.href = 'login.html';//manda para login.html
    else {
        const usuario = document.getElementById('usuario');
        usuario.innerHTML = `Olá ${nome}`;
    }
}

    /* -------------forçando verificaçao de loginno carregamento da página----------------- */
    window.onload = verificarLogin;
    
/* -----------------deslogar o login do usuário------------------- */

function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}
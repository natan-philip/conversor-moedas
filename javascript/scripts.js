// SELETORES DO MENU DROPDOWN
const btnMoeda = document.querySelectorAll('.btn-moeda');
const menuDropdown = document.querySelectorAll('.menu-moedas');

btnMoeda.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();

        // Pega o menu correspondente ao botão clicado (de ou para)
        const menuMoedas = btn.dataset.dropdown;
        const menuClicado = document.querySelector(`[data-menu="${menuMoedas}"]`);

        // garante que esteja fechado
        menuDropdown.forEach(function(menu) {
            if (menu !== menuClicado) {
                menu.classList.add('escondido');
            }
        });
        // abre o menu clicado
        menuClicado.classList.toggle('escondido');
        console.log(menuClicado);
    });
});

// adiciona eventos nos intens do menu
menuDropdown.forEach(function(menu) {
    const itens = menu.querySelectorAll('li');
        itens.forEach(function(item) {
           item.addEventListener('click', function() {

            // pega a bandeira e o codigo da moeda
            const urlBandeira = item.dataset.bandeira;
            const moeda = item.dataset.moeda;

            // seleciona o botao correspondente
            const qualMenu = menu.dataset.menu;
            const btnClicado = document.querySelector(`[data-dropdown="${qualMenu}"]`);

            // atualiza a bandeira e o codigo do botao selecionado
            btnClicado.querySelector('.bandeira').setAttribute('src', urlBandeira);
            btnClicado.querySelector('.codigo').textContent = moeda;

            //remove a selecao do menu
            itens.forEach(function(i) {
                i.classList.remove('selecionado');
            });

            // marca o item clicado
            item.classList.add('selecionado');

            // fecha o menu
            menu.classList.add('escondido');

            console.log(`Dropdown "${qualMenu}" selecionou:`, moeda);
            // chama a funcao de conversao
            fazerConversao();
        });
    });
});
// fechar todos os menus ao clicar fora do menu
document.addEventListener('click', function(e) {
    const fecharBtn = Array.from(btnMoeda).some(b => b.contains(e.target));
    const fecharMenu = Array.from(menuDropdown).some(m => m.contains(e.target));

    // se nao clicou no botao ou no menu
    if (!fecharBtn && !fecharMenu) {
        menuDropdown.forEach(function(menu) {
            menu.classList.add('escondido');
        });
    }
});
// funcao para pegar moedas selecionadas
function moedasSelecionadas(menuMoedas) {
    const botao = document.querySelector(`[data-dropdown="${menuMoedas}"]`);
    return botao.querySelector('.codigo').textContent;
}
// FUNCAO DE CONVERSAO
function fazerConversao(){
    const moedaDe = moedasSelecionadas('de');
    const moedaPara = moedasSelecionadas('para');

    console.log(`Converter de ${moedaDe} para ${moedaPara}`);
}
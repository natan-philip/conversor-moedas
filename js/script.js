// Link da API
const API_URL = 'https://economia.awesomeapi.com.br/json/last/';

// Pegar elementos do HTML
const formulario = document.getElementById('conversorDev');
const botoesMoeda = document.querySelectorAll('.btn-moeda');
const menusMoedas = document.querySelectorAll('.menu-moedas');

// Quando clicar no botao de moeda, abre o menu
botoesMoeda.forEach(function (botao) {
    botao.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Descobre qual menu abrir (de ou para)
        const qualMenu = botao.dataset.dropdown;
        const menu = document.querySelector(`[data-menu="${qualMenu}"]`);

        // Fecha os outros menus
        menusMoedas.forEach(function (m) {
            if (m !== menu) {
                m.classList.add('escondido');
            }
        });

        // Abre ou fecha o menu clicado
        menu.classList.toggle('escondido');
    });
});

// Quando clicar em uma moeda do menu
menusMoedas.forEach(function (menu) {
    const itens = menu.querySelectorAll('li');

    itens.forEach(function (item) {
        item.addEventListener('click', function () {
            // Pega os dados da moeda clicada
            const bandeira = item.dataset.bandeira;
            const codigoMoeda = item.dataset.moeda;

            // Descobre qual botao atualizar
            const qualMenu = menu.dataset.menu;
            const botao = document.querySelector(`[data-dropdown="${qualMenu}"]`);

            // Atualiza a bandeira e o codigo no botao
            botao.querySelector('.bandeira').src = bandeira;
            botao.querySelector('.codigo').textContent = codigoMoeda;

            // Remove a selecao de todos os itens
            itens.forEach(function (i) {
                i.classList.remove('selecionado');
            });

            // Marca o item clicado como selecionado
            item.classList.add('selecionado');

            // Fecha o menu
            menu.classList.add('escondido');

            // Se o menu "de" for alterado e tiver um valor no input, formata o valor
            if (qualMenu === 'de' && inputValor.value) {
                formatarInput();
            }

            // Faz a conversao automaticamente
            converter();
        });
    });
});

// Fechar menus quando clicar fora
document.addEventListener('click', function (e) {
    let clicouNoBotao = false;
    let clicouNoMenu = false;

    // Verifica se clicou em algum botao
    botoesMoeda.forEach(function (b) {
        if (b.contains(e.target)) {
            clicouNoBotao = true;
        }
    });

    // Verifica se clicou em algum menu
    menusMoedas.forEach(function (m) {
        if (m.contains(e.target)) {
            clicouNoMenu = true;
        }
    });

    // Se nao clicou no botao nem no menu, fecha tudo
    if (!clicouNoBotao && !clicouNoMenu) {
        menusMoedas.forEach(function (menu) {
            menu.classList.add('escondido');
        });
    }
});

// Funcao para pegar qual moeda esta selecionada
function pegarMoedaSelecionada(tipo) {
    const botao = document.querySelector(`[data-dropdown="${tipo}"]`);
    const codigo = botao.querySelector('.codigo').textContent;
    return codigo;
}

// formatar o valor a ser convertido
const inputValor = document.getElementById('valorConverter');

function formatarInput() {
    const moedaDe = pegarMoedaSelecionada('de');
    const valorNumerico = parseFloat(inputValor.value.replace(/[^\d,]/g, '').replace(',', '.'));

        if (!isNaN(valorNumerico) && valorNumerico > 0) {
            inputValor.value = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: moedaDe,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(valorNumerico);
        }
}

inputValor.addEventListener('blur',formatarInput);
    
// funcao converter moedas
async function converter() {

    const inputResultado = document.getElementById('valorConvertido');
    const moedaDe = pegarMoedaSelecionada('de');
    const moedaPara = pegarMoedaSelecionada('para');
    // montando a url da api com as moedas selecionadas
    const URL = (API_URL + moedaDe + '-' + moedaPara);

    // acessando o servidor da api
    try {
        const response = await fetch(URL);
        const data = await response.json();

        const cotacao = data[moedaDe + moedaPara].bid;
        const valorMoeda = parseFloat(inputValor.value.replace(/[^\d,]/g, '').replace(',', '.'));
        const valorConvertido = (valorMoeda * cotacao).toFixed(2);

        inputResultado.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moedaPara }).format(valorConvertido);
    } catch (err) {
        alert("error ao acessar servidor");
    }
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    converter();
});
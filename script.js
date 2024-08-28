// script.js

// Referências aos elementos do DOM
const formCadastroCliente = document.getElementById('formCadastroCliente');
const nomeClienteInput = document.getElementById('clienteNome');
const emailClienteInput = document.getElementById('clienteEmail');
const eventosUl = document.getElementById('eventos');
const comprasUl = document.getElementById('compras');

// Dados do cliente
let cliente = null;

// Lista de eventos disponíveis
const eventosDisponiveis = [
    { id: 1, nome: "Show de Rock", image:"/img/42816a.jpeg", preco: 100 },
    { id: 2, nome: "Peça de Teatro", preco: 80 },
    { id: 3, nome: "Concerto Clássico", preco: 120 },
    { id: 4, nome: "Festival de Jazz", preco: 150 },
];


// Lista de compras do cliente
let compras = [];

// Função para cadastrar o cliente
formCadastroCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = nomeClienteInput.value;
    const email = emailClienteInput.value;

    cliente = { nome, email };
    alert(`Cliente ${nome} cadastrado com sucesso!`);

    nomeClienteInput.value = '';
    emailClienteInput.value = '';

    // Exibir a lista de eventos
    exibirEventos();
});

// Função para exibir os eventos disponíveis
function exibirEventos() {
    eventosUl.innerHTML = ''; // Limpa a lista antes de exibir

    eventosDisponiveis.forEach(evento => {
        const li = document.createElement('li');
        li.textContent = `${evento.image}${evento.nome} - R$${evento.preco}`;

        // Botão de comprar
        const comprarBtn = document.createElement('button');
        comprarBtn.textContent = 'Comprar';
        comprarBtn.onclick = () => comprarIngresso(evento);

        li.appendChild(comprarBtn);
        eventosUl.appendChild(li);
    });
}

// Função para registrar a compra de um ingresso
function comprarIngresso(evento) {
    if (cliente === null) {
        alert("Por favor, cadastre um cliente antes de comprar ingressos.");
        return;
    }
    compras.push(evento);
    exibirCompras();
}

// Função para exibir as compras realizadas
function exibirCompras() {
    comprasUl.innerHTML = ''; // Limpa a lista antes de exibir

    compras.forEach((compra, index) => {
        const li = document.createElement('li');
        li.textContent = `${compra.nome} - R$${compra.preco}`;

        // Botão de excluir
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.onclick = () => excluirCompra(index);

        li.appendChild(excluirBtn);
        comprasUl.appendChild(li);
    });
}

// Função para excluir uma compra
function excluirCompra(index) {
    compras.splice(index, 1);
    exibirCompras();
}

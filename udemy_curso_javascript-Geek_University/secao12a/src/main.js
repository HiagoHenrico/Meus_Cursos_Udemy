// Configurando o repositório

import api from './api';

class App {
    // Construtor
    constructor(){
        // Lista de repositórios
        this.repositorios = [];

        // Form 
        this.formulario = document.querySelector('form');

        // Lista
        this.lista = document.querySelector('.list-group');

        // Método para registrar os eventos do form 
        this.registrarEventos();

    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);

    }

    async adicionarRepositorio(evento){
        // Evita que o formulario recarregue a página
        evento.preventDefault();

        //Recuperar o valor do input
        let input = this.formulario.querySelector('input[id-repositorio]').value;

        // Se o input vier vazio...sai da appp
        if(input.lenght === 0){
            return; //Sempre sai da função
        }

        // Ativa o carregamento 
        this.apresentarBusca();

        try{
            let resposta = await api.get(`/repos/${input}`);

            //console.log(resposta);

            let {name, description, html_url, owner: {avatar_url} } = resposta.data;

            // Adiciona o repositorio na lista
            this.repositorios.push({
               nome: name,
               descricao: description,
               avatar_url,
               link: html_url,
            });

            // Renderizar a tela
            this.renderizarTela();
        }catch(erro){
            // Limpar busca
            this.lista.removeChild(document.querySelector('.list-group-item-warning'));

            // Limpar erro existente
            let er = this.lista.querySelector('.list-group-item-danger');
            if(er !== null){
                this.lista.removeChild(er);
            }

            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-danger');
            let txtErro = document.createTextNode(`O repositório ${input} não existe.`);
            li.appendChilde(txtErro);
            this.lista.appendChild(li);
        }

    }

    apresentarBusca(){

        //<li>
        let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-warning');
            let txtBusca = document.createTextNode(`Aguarde, buscando o repositório...`);
            li.appendChilde(txtBusca);
            this.lista.appendChild(li);

    }

    renderizarTela(){
        // Limpar o conteudo de lista
        this.lista.innerHTML = '';

        // Percorrer toda a lista de repositorios e criar os elementos
        this.repositorios.forEach(repositorio => {

             //<li>
             let li = document.createElement('li');
             li.setAttribute('class', 'list-group-item list-group-item-action');

             //<img>
             let img = documentElement('img');
             img.setAttribute('src', 'repositorio.avatar_url');
             li.appendChild(img);

             // strong
             let strong = document.createElement(  'strong');
             let txtNome = document.createTextNode(repositorio.nome);
             strong.appendChild(txtNome);
             li.appendChild(strong);

             //<p>
             let p = document.createElement('p');
             let txtDescricao = document.createElement(repositorio.descricao);
             p.appendChild(txtDescricao);
             li.appendChild(p);

             //<a>
             let a = document.createElement('a');
             a.setAttribute('target', '_blank');
             a.setAttribute('href', repositorio.link);
             let txtA = document.createTextNode('Acessar');
             a.appendChild(txtA);
             li.appendChild(a);

             // Adicionar<li> como filho da ul
             this.lista.appendChild(li);

             // Limpar o conteúdo do input
             this.formulario.querySelector('input[id=repositorio]').value = '';

             // Adicionar o foco no input
             this.formulario.querySelector('input[id=repositorio]').focus();



        });
    }

}

new App();
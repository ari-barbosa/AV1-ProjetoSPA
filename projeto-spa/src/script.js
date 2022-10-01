// criando o menu 
      const header = document.createElement('header');
      
      const flexContainerMenu = document.createElement('div');
            flexContainerMenu.classList.add('flex-container', 'menu');
      
      const divTitulo = document.createElement('div');
            divTitulo.classList.add('titulo');
      const h1Titulo = document.createElement('h1');
      const texth1Titulo = document.createTextNode('FlexTurismos');
      
      const ulMenu = document.createElement('ul');
            ulMenu.classList.add('list-items');
      
      const liMenu1 = document.createElement('li');
      const aMenu1 = document.createElement('a');
      aMenu1.value = 'quemSomos';
      const textMenu1 = document.createTextNode('Quem somos');
      
      aMenu1.addEventListener('click', function chamaPaginaQuemSomos(event) {
            var tela = event.target.value
            chamaPagina(tela) });
      
      const liMenu2 = document.createElement('li');
      const aMenu2 = document.createElement('a');
      aMenu2.value = 'Servicos';
      const textMenu2 = document.createTextNode('Serviços');
      
      aMenu2.addEventListener('click', function chamaPaginaServicos(event) {
            var tela = event.target.value
            chamaPagina(tela) });
      
      const liMenu3 = document.createElement('li');
      const aMenu3 = document.createElement('a');
      aMenu3.value = 'Planos';
      const textMenu3 = document.createTextNode('Planos');
      
      aMenu3.addEventListener('click', function chamaPaginaPlanos(event) {
            var tela = event.target.value
            chamaPagina(tela); });
      
      document.getElementsByTagName('body')[0].appendChild(header);
      header.appendChild(flexContainerMenu);
      flexContainerMenu.appendChild(divTitulo);
      divTitulo.appendChild(h1Titulo);
      h1Titulo.appendChild(texth1Titulo);
      flexContainerMenu.appendChild(ulMenu);
      
      ulMenu.appendChild(liMenu1);
      liMenu1.appendChild(aMenu1);
      aMenu1.appendChild(textMenu1);
      
      ulMenu.appendChild(liMenu2);
      liMenu2.appendChild(aMenu2);
      aMenu2.appendChild(textMenu2);
      
      ulMenu.appendChild(liMenu3);
      liMenu3.appendChild(aMenu3);
      aMenu3.appendChild(textMenu3);

      

      const divPrincipal = document.createElement('div');
            divPrincipal.classList.add('div-principal');

      document.getElementsByTagName('body')[0].appendChild(divPrincipal);

      // criando a apresentação

      const flexContainerApresentacao = document.createElement('div');
            flexContainerApresentacao.classList.add('flex-container');


      const divTituloApresentacao = document.createElement('div');
            divTituloApresentacao.classList.add('flex-container-apresentacao');
    
      const TituloApresentacao = document.createElement('div');
            TituloApresentacao.classList.add('texto-apresentacao');

      const h1Apresentacao = document.createElement('h1');
      const textApresentacao = document.createTextNode("Flex Turismos");

      const pApresentacao = document.createElement('p');
      const pTextApresentacao = document.createTextNode("O melhor serviço para você! ");

      const linkApresentacao = document.createElement('a');
            linkApresentacao.classList.add('btn');
            linkApresentacao.setAttribute('href', '#');

      const textLink = document.createTextNode("Saiba mais");


      divPrincipal.appendChild(flexContainerApresentacao);
      flexContainerApresentacao.appendChild(divTituloApresentacao);
      divTituloApresentacao.appendChild(TituloApresentacao);
      TituloApresentacao.appendChild(h1Apresentacao);
      h1Apresentacao.appendChild(textApresentacao);
      TituloApresentacao.appendChild(pApresentacao);
      pApresentacao.appendChild(pTextApresentacao);
      

      TituloApresentacao.appendChild(linkApresentacao);
      linkApresentacao.appendChild(textLink);

      const div = document.createElement('div');
      const divImg = document.createElement('div');
      const imgBanner = document.createElement('img');
            imgBanner.src = '../imagens/0-main.png';

      TituloApresentacao.appendChild(div);
      div.appendChild(divImg);
      divImg.appendChild(imgBanner);

      const conteudoApresentacao = document.createElement('div');
            conteudoApresentacao.classList.add('conteudoApresentacao');
            conteudoApresentacao.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus augue quis eros imperdiet molestie. Nulla sed nibh ipsum. Duis et egestas arcu, sed posuere risus. Cras imperdiet eros ut fermentum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem quam, iaculis ut euismod eu, dignissim non ante. Etiam ac metus arcu. Aliquam bibendum, turpis ac ultricies venenatis, lacus enim ornare est, eget dictum elit odio at diam. Etiam quis consequat nisl, id vulputate nisi. Duis orci nulla, molestie in risus vel, consequat bibendum turpis. Mauris semper elit non auctor cursus. Vestibulum tincidunt nisl lacus, eu blandit leo auctor sed. Praesent lacinia vulputate semper. Fusce non urna ac orci rhoncus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus augue quis eros imperdiet molestie. Nulla sed nibh ipsum. Duis et egestas arcu, sed posuere risus. Cras imperdiet eros ut fermentum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem quam, iaculis ut euismod eu, dignissim non ante. Etiam ac metus arcu. Aliquam bibendum, turpis ac ultricies venenatis, lacus enim ornare est, eget dictum elit odio at diam. Etiam quis consequat nisl, id vulputate nisi. Duis orci nulla, molestie in risus vel, consequat bibendum turpis. Mauris semper elit non auctor cursus. Vestibulum tincidunt nisl lacus, eu blandit leo auctor sed. Praesent lacinia vulputate semper. Fusce non urna ac orci rhoncus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus augue quis eros imperdiet molestie. Nulla sed nibh ipsum. Duis et egestas arcu, sed posuere risus. Cras imperdiet eros ut fermentum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem quam, iaculis ut euismod eu, dignissim non ante. Etiam ac metus arcu. Aliquam bibendum, turpis ac ultricies venenatis, lacus enim ornare est, eget dictum elit odio at diam. Etiam quis consequat nisl, id vulputate nisi. Duis orci nulla, molestie in risus vel, consequat bibendum turpis. Mauris semper elit non auctor cursus. Vestibulum tincidunt nisl lacus, eu blandit leo auctor sed. Praesent lacinia vulputate semper. Fusce non urna ac orci rhoncus interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus augue quis eros imperdiet molestie. Nulla sed nibh ipsum. Duis et egestas arcu, sed posuere risus. Cras imperdiet eros ut fermentum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem quam, iaculis ut euismod eu, dignissim non ante. Etiam ac metus arcu. Aliquam bibendum, turpis ac ultricies venenatis, lacus enim ornare est, eget dictum elit odio at diam. Etiam quis consequat nisl, id vulputate nisi. Duis orci nulla, molestie in risus vel, consequat bibendum turpis. Mauris semper elit non auctor cursus. Vestibulum tincidunt nisl lacus, eu blandit leo auctor sed. Praesent lacinia vulputate semper. Fusce non urna ac orci rhoncus interdum. ";
      
      div.appendChild(conteudoApresentacao);

// Criando uma div que mantém a apresentação em todas as páginas 
      const divApresentacao = document.createElement('div');
            divApresentacao.classList.add('divApresentacao');
            divApresentacao.appendChild(flexContainerApresentacao);

      divPrincipal.appendChild(divApresentacao);


            
// Criar página/aba "quem somos?"

function quemSomos(){
      const flexContainerQuemSomos = document.createElement('div');
            flexContainerQuemSomos.classList.add('flex-container');
            flexContainerQuemSomos.setAttribute('id', 'quem-somos');

      const divQuemSomos = document.createElement('div');
            divQuemSomos.classList.add('div-somos');
      const h2QuemSomos = document.createElement('h2');
      const textH2 = document.createTextNode('Quem somos');
      const pQuemSomos = document.createElement('p');
      const textPQuemSomos = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum gravida ornare. Fusce finibus enim ligula, at iaculis elit congue in. Vivamus quis massa leo. Nulla at leo volutpat, porttitor velit a, vulputate est. Curabitur porta enim massa, eget gravida enim aliquam quis. Nullam a accumsan magna, in commodo nunc. Aliquam sagittis lacinia erat, eu egestas orci imperdiet ut. Pellentesque accumsan, nulla eu convallis lobortis, lorem turpis posuere neque, in interdum tellus erat sed velit. Sed ut neque non nunc finibus sollicitudin. Phasellus bibendum metus in ultrices porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sapien eget lectus iaculis bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sapien eget lectus iaculis bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sapien eget lectus iaculis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus augue quis eros imperdiet molestie. Nulla sed nibh ipsum. Duis et egestas arcu, sed posuere risus. Cras imperdiet eros ut fermentum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem quam, iaculis ut euismod eu, dignissim non ante. Etiam ac metus arcu. Aliquam bibendum, turpis ac ultricies venenatis, lacus enim ornare est, eget dictum elit odio at diam. Etiam quis consequat nisl, id vulputate nisi. Duis orci nulla, molestie in risus vel, consequat bibendum turpis. Mauris semper elit non auctor cursus. Vestibulum tincidunt nisl lacus, eu blandit leo auctor sed. Praesent lacinia vulputate semper. Fusce non urna ac orci rhoncus interdum.");

      divPrincipal.appendChild(flexContainerQuemSomos);
      flexContainerQuemSomos.appendChild(divApresentacao);
      flexContainerQuemSomos.appendChild(divQuemSomos);
      divQuemSomos.appendChild(h2QuemSomos);
      h2QuemSomos.appendChild(textH2);
      divQuemSomos.appendChild(pQuemSomos);
      pQuemSomos.appendChild(textPQuemSomos); 
      

      const divImgQuemSomos = document.createElement('div');
      const imgQuemSomos = document.createElement('img');
            imgQuemSomos.src = '../imagens/1-quem-somos.png';

      flexContainerQuemSomos.appendChild(divImgQuemSomos);
      divImgQuemSomos.appendChild(imgQuemSomos);
      

}


function Servicos(){
// criando página/aba de serviços
      const containerExterno = document.createElement('div');
            containerExterno.classList.add('container-externo');

      const divflexContainerServicos = document.createElement('div');
            divflexContainerServicos.classList.add('flex-container');
            divflexContainerServicos.setAttribute('id', 'servicos');

      const listServicos = document.createElement('div');
            listServicos.classList.add('list-servicos');

      const divh2 = document.createElement('div');
            divh2.classList.add('div-servicos');
      const h2Servicos = document.createElement('h2');
      const textH2Servicos = document.createTextNode('Serviços');

      const itemServico = document.createElement('div');
            itemServico.classList.add('item-servico');    

      const divImgServico = document.createElement('div');

      const imgServico = document.createElement('img');
            imgServico.src = '../imagens/icon-2.png';

      const pServicos = document.createElement('p');
      const textPservicos = document.createTextNode('Hospedagens');
      const aServicos = document.createElement('a');
      aServicos.setAttribute('href', '#');
      const textLinkServico = document.createTextNode("Comprar Agora");

      // criando o item 2
      const itemServico2 = document.createElement('div');
            itemServico2.classList.add('item-servico');  

      const divImgServico2 = document.createElement('div');
      
      const imgServico2 = document.createElement('img');
            imgServico2.src = '../imagens/icon-1.png';

      const pServicos2 = document.createElement('p');
      const textPservicos2 = document.createTextNode('Pacotes de viagens');
      const aServicos2 = document.createElement('a');
            aServicos2.setAttribute('href', '#');

      const textLinkServico2 = document.createTextNode("Comprar Agora");

      // criando o item 3
      const itemServico3 = document.createElement('div');
            itemServico3.classList.add('item-servico');  

      const divImgServico3 = document.createElement('div');

      const imgServico3 = document.createElement('img');
            imgServico3.src = '../imagens/icon-3.png';

      const pServicos3 = document.createElement('p');
      const textPservicos3 = document.createTextNode('Roteiros Personalizados');
      const aServicos3 = document.createElement('a');
            aServicos3.setAttribute('href', '#');

      const textLinkServico3 = document.createTextNode("Comprar Agora");

      listServicos.appendChild(divh2);
      divh2.appendChild(h2Servicos);
      h2Servicos.appendChild(textH2Servicos);

      divPrincipal.appendChild(containerExterno);
      containerExterno.appendChild(divApresentacao);
      containerExterno.appendChild(divflexContainerServicos);
      containerExterno.appendChild(listServicos);
      listServicos.appendChild(itemServico);
      itemServico.appendChild(divImgServico);
      divImgServico.appendChild(imgServico);
      itemServico.appendChild(pServicos);
      pServicos.appendChild(textPservicos);
      itemServico.appendChild(aServicos);
      aServicos.appendChild(textLinkServico);

      // item 2
      listServicos.appendChild(itemServico2);
      itemServico2.appendChild(divImgServico2);
      divImgServico2.appendChild(imgServico2);
      itemServico2.appendChild(pServicos2);
      pServicos2.appendChild(textPservicos2);
      itemServico2.appendChild(aServicos2);
      aServicos2.appendChild(textLinkServico2);

      // item 3
      listServicos.appendChild(itemServico3);
      itemServico3.appendChild(divImgServico3);
      divImgServico3.appendChild(imgServico3);
      itemServico3.appendChild(pServicos3);
      pServicos3.appendChild(textPservicos3);
      itemServico3.appendChild(aServicos3);
      aServicos3.appendChild(textLinkServico3)

}


function Planos() {
      // criando página/aba de planos
      const divflexContainerPlanos = document.createElement('div');
            divflexContainerPlanos.classList.add('flex-container');
            divflexContainerPlanos.setAttribute('id', 'planos');

      const divh2Planos = document.createElement('div');
            divh2Planos.classList.add('div-planos');
      const h2Planos= document.createElement('h2');
      const textH2Planos = document.createTextNode('Planos');

      // plano 01
      const listPlans = document.createElement('div');
            listPlans.classList.add('list-planos');

      const itemPlano = document.createElement('div');
            itemPlano.classList.add('item-plano');
      const h3Plano = document.createElement('h3');
      const textH3Plano = document.createTextNode('Plano 1');

      const ulPlano = document.createElement('ul');
      const liPlano1 = document.createElement('li');
      const textLiPlano1 = document.createTextNode('Suporte 24h');

      const liPlano2 = document.createElement('li');
      const textLiPlano2 = document.createTextNode('Serviços de quarto');

      const liPlano3 = document.createElement('li');
      const textLiPlano3 = document.createTextNode('Guia Turistico');

      const aPlano = document.createElement('a');
            aPlano.setAttribute('href', '#');

      const textLinkPlano = document.createTextNode("Saiba Mais!");



      divPrincipal.appendChild(divflexContainerPlanos);
      divflexContainerPlanos.appendChild(divApresentacao);
      divflexContainerPlanos.appendChild(divApresentacao);
      divflexContainerPlanos.appendChild(divh2Planos);
      divh2Planos.appendChild(h2Planos);
      h2Planos.appendChild(textH2Planos);
      divflexContainerPlanos.appendChild(listPlans);
      listPlans.appendChild(itemPlano);
      itemPlano.appendChild(h3Plano);
      h3Plano.appendChild(textH3Plano);
      itemPlano.appendChild(ulPlano);
      ulPlano.appendChild(liPlano1);
      liPlano1.appendChild(textLiPlano1);
      ulPlano.appendChild(liPlano2);
      liPlano2.appendChild(textLiPlano2);
      ulPlano.appendChild(liPlano3);
      liPlano3.appendChild(textLiPlano3);
      itemPlano.appendChild(aPlano);
      aPlano.appendChild(textLinkPlano);


      // Plano 02 
      const itemPlano2 = document.createElement('div');
            itemPlano2.classList.add('item-plano');
      const h3Plano2 = document.createElement('h3');
      const textH3Plano2 = document.createTextNode('Plano 2');

      const ulPlanoItem2 = document.createElement('ul');
      const liPlanoItem2 = document.createElement('li');
      const textLiPlanoItem2 = document.createTextNode('Serviços de quarto');

      const liPlanoItem3 = document.createElement('li');
      const textLiPlanoItem3 = document.createTextNode('Guia Turistico');

      const liPlanoItem4 = document.createElement('li');
      const textLiPlanoItem4 = document.createTextNode('Roteiro de trilhas');

      const liPlanoItem5 = document.createElement('li');
      const textLiPlanoItem5 = document.createTextNode('Serviços personalizados');

      listPlans.appendChild(itemPlano2);
      itemPlano2.appendChild(h3Plano2);
      h3Plano2.appendChild(textH3Plano2);

      itemPlano2.appendChild(ulPlanoItem2);
      ulPlanoItem2.appendChild(liPlanoItem2);
      liPlanoItem2.appendChild(textLiPlanoItem2);

      ulPlanoItem2.appendChild(liPlanoItem3);
      liPlanoItem3.appendChild(textLiPlanoItem3);

      ulPlanoItem2.appendChild(liPlanoItem4);
      liPlanoItem4.appendChild(textLiPlanoItem4);

      ulPlanoItem2.appendChild(liPlanoItem5);
      liPlanoItem5.appendChild(textLiPlanoItem5);

      // Plano 03
      const itemPlano3 = document.createElement('div');
            itemPlano3.classList.add('item-plano');
      const h3Plano3 = document.createElement('h3');
      const textH3Plano3 = document.createTextNode('Plano 2');

      const ulPlanoItem3 = document.createElement('ul');
      const liPlanoItem6 = document.createElement('li');
      const textLiPlanoItem6 = document.createTextNode('Serviços de quarto');

      const liPlanoItem7 = document.createElement('li');
      const textLiPlanoItem7 = document.createTextNode('Guia Turistico');

      const liPlanoItem8 = document.createElement('li');
      const textLiPlanoItem8 = document.createTextNode('Roteiro de trilhas');

      const liPlanoItem9 = document.createElement('li');
      const textLiPlanoItem9 = document.createTextNode('Serviços personalizados');

      const liPlanoItem10 = document.createElement('li');
      const textLiPlanoItem10 = document.createTextNode('Área Vip');

      listPlans.appendChild(itemPlano3);
      itemPlano3.appendChild(h3Plano3);
      h3Plano3.appendChild(textH3Plano3);

      itemPlano3.appendChild(ulPlanoItem3);
      ulPlanoItem3.appendChild(liPlanoItem6);
      liPlanoItem6.appendChild(textLiPlanoItem6);

      ulPlanoItem3.appendChild(liPlanoItem7);
      liPlanoItem7.appendChild(textLiPlanoItem7);

      ulPlanoItem3.appendChild(liPlanoItem8);
      liPlanoItem8.appendChild(textLiPlanoItem8);

      ulPlanoItem3.appendChild(liPlanoItem9);
      liPlanoItem9.appendChild(textLiPlanoItem9);

      ulPlanoItem3.appendChild(liPlanoItem10);
      liPlanoItem10.appendChild(textLiPlanoItem10);

}

// criando o footer 
const footer = document.createElement('footer');
const divFooter = document.createElement('div');
      divFooter.classList.add('flex-container', 'footer');

const pCopy1 = document.createElement('p');
const TextPCopy1 = document.createTextNode('&copy; 2021 CSS Flexbox');

document.getElementsByTagName('body')[0].appendChild(footer);
divPrincipal.appendChild(divFooter);
footer.appendChild(divFooter);
divFooter.appendChild(pCopy1);
pCopy1.appendChild(TextPCopy1);


// API Cotação do dolar no dia 30/09/22

async function BuscaDados(){

const url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='09-30-2022'&$format=json";

    const response = await fetch(url)
    .then(data => data.json())
    .catch(err => console.log(err))

      for (res of response.value){

            const divAPI = document.createElement('div');
                  divAPI.classList.add('divAPI');
            const h1API = document.createElement('h1');
                  h1API.innerText = "Dólar Hoje";
            const pAPI = document.createElement('p');
            pAPI.innerText = res.cotacaoCompra.toFixed(2);

            document.getElementsByTagName('body')[0].appendChild(divAPI);
            divAPI.appendChild(h1API);
            divAPI.appendChild(pAPI);

      }
}

BuscaDados();


// Criando botao para voltar ao topo na página inicial
 const botaoTopo = document.createElement('img');
      botaoTopo.setAttribute('id', 'back-to-top');
      botaoTopo.setAttribute('onclick', 'paraCima();');
      botaoTopo.src = '../imagens/seta.png';

footer.appendChild(botaoTopo);

function paraCima() {
const botao = document.querySelector("#back-to-top");

botao.addEventListener('click', function() {
 window.scrollTo(0, 0);
});
}

function paraBaixo() {      
       window.scrollTo(3000, 3000);
      }

// funçäo para trocar tela

function chamaPagina(tela) {
      while(divPrincipal.firstChild){
            divPrincipal.removeChild(divPrincipal.lastChild);
      }
      if(tela === "quemSomos"){
            quemSomos();
            paraBaixo();

            
      }
  
      else if (tela === "Servicos") {
            Servicos();
            paraBaixo();

            
      }
      else if (tela === "Planos") {
           Planos();
           paraBaixo();

      }
}
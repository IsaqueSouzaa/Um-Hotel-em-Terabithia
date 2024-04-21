var visitante = [];

        var hotel = "Hotel Transilvânia"

        function recep() {

            alert("Seja bem-vindo ao " + hotel);
        }
        recep();

        var nome = prompt("Insira o seu nome, por favor");

        function validacao() {

            var senha = parseInt(prompt("Insira a sua senha, por favor"));

            if (senha !== 2678) {
                alert("Senha incorreta. Por favor, tente novamente!");
                validacao()
            }
            else {
                alert("Bem-vindo ao " + hotel + ", " + nome + ". É um prazer tê-lo por aqui!")
                inicio();
            }
        }

        validacao();

        function inicio() {

            var escolha = parseInt(prompt("Escolha:\n 1.Reservar Quarto\n 2.Cadastro hóspedes\n 3.Lista\n 4.Eventos\n 5. Abastecer\n 6. Manutenção\n 7. Sair"));

            switch (escolha) {
                case 1:
                    reserva();
                    break;
                case 2:
                    cadastro();
                    break;
                case 3:
                    menu();
                    break;

                case 4:
                    eventos();
                    break;

                case 5:
                    combustivel();
                    break;

                case 6:
                    manutencao();
                    break;
                case 7:
                    sair();
                    break;
                
                    default:
                    erro();
                    break;
            }
        }

        function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("Muito obrigado e até logo, "+ nome);
        window.close(); 
    } else {
        inicio();
    }
}
       
        function erro() {

            alert('Por favor, informe um número entre 1 e 7');
            inicio();
        }

        function sair() {

            var confirma = confirm('Você deseja sair?');
            if (confirma) {
                alert("Muito obrigado e até logo, " + nome);
                window.close();
            } else {
                inicio();
            }
        }

        function reserva() {

            var valor = parseInt(prompt("Qual o valor padrão da diária?"));

            if (valor < 1) {
                alert("Valor inválido, " + nome);
                reserva();
            }

            var dia = parseInt(prompt("Quantas diárias serão necessárias?"));

            if (dia < 1) {
                alert("Valor inválido, " + nome);
                reserva();
            }

            else if (dia > 30) {
                alert("Infelizmente temos diárias apenas de 30 dias seguidos")
                reserva();
            }

            var calculo = valor * dia

            alert("O valor de " + dia + " dias de hospedagem é de " + calculo + " reais");


            var hospede = prompt("Qual o nome do hóspede?");

            var quarto = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));

            if (quarto < 1) {
                alert(" Quarto indisponivel");
            }

            else if (quarto > 20)
                alert("Quarto indisponivel");

            else {
                alert("Quarto Livre");
            }

            var confirm = prompt(nome + ", você confirma a hospedagem para " + hospede + " por " + dia + " dias para o quarto " + quarto + " por " + calculo + " reais? S/N")

            if (confirm == "n") {
                alert(nome + ", reserva cancelada");
                inicio;
            }

            else {
                alert(nome + ", reserva efetuada para " + hospede + ".");
                inicio();

            }

        }

        function cadastro() {

            var diaria = parseInt(prompt("Qual o valor padrão da diária ?"));

            if (diaria < 1) {
                alert("Valor inválido, " + nome);
                cadastro();
            }

            var dias = parseInt(prompt("Quantas diárias serão necessárias?"))

            var apagar = diaria * dias

            var hospede = []

            var idade = []
            var total = 0;

            var meia = 0
            var gratuita = 0

            var indice = 0

            while (pergunta != "pare") {
                hospede.push(prompt("Qual o nome do hóspede?"));
                idade.push(parseInt(prompt("Qual a idade do hóspede?")));
                var pergunta = prompt("Deseja inserir mais um hospede? Se não digite pare")

                if (idade[indice] < 6) {
                    alert(hospede[indice] + ", possui gratuidade.");
                    gratuita++;
                }
                else if (idade[indice] > 60) {
                    meia++;
                    alert(hospede[indice] + ", paga meia.");
                }
                indice++
            }

            total = apagar * (hospede.length - (gratuita + meia));
            total += (apagar * meia) / 2

            var confirma = prompt(nome + ", você confirma a hospedagem para " + hospede + " por " + dias + " dias por " + total + "? S/N")

            if (confirma == "s" || confirma == "sim") {
                alert("Reserva feita com sucesso")
                inicio();
            }

            else if (confirma == "n" || confirma == "não") {
                alert("Reserva cancelada")
                inicio();
            }
            else {
                alert("Digite 'sim' ou 'não'")
                cadastro()
            }

        }



        function menu() {

            var opcao = prompt("Opções:\n1- cadastrar\n2- pesquisar\n3- listar\n4- sair\n");

            switch (opcao) {
                case "1":
                    cadastrar();
                    break;
                case "2":
                    pesquisar();
                    break;
                case "3":
                    lista();
                    break;
                case "4":
                    inicio();
                    break;
                default:
                    errorr();
                    break;
            }
        }



        function cadastrar() {
            if (visitante.length >= 16) {
                alert("Máximo de cadastros atingido");
            } else {
                var nome = prompt("Digite o nome do hóspede");
                visitante.push(nome);
                alert("Hóspede cadastrado com sucesso!");
            }
            menu();
        }

        function pesquisar() {
            var nome = prompt("Digite o nome do hóspede que deseja pesquisar");

            var encontrado = false;
            for (var i = 0; i < visitante.length; i++) {
                if (visitante[i] === nome) {
                    alert("Hóspede " + nome + " foi encontrado");
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                alert("Hóspede não encontrado.");
            }
            menu();
        }

        function lista() {
            if (visitante.length === 0) {
                alert("Não há hóspedes cadastrados.");
            } else {
                var listaHospedes = "Lista de Hóspedes:\n";
                for (var i = 0; i < visitante.length; i++) {
                    listaHospedes += (i + 1) + ". " + visitante[i] + "\n";
                }
                alert(listaHospedes);
            }
            menu();
        }
        function errorr() {

            alert("Por favor, escolha uma opção válida (1 a 4).");
            menu();
        }

        function eventos() {
    var pessoas = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if (pessoas > 350 || pessoas < 1) {
        alert("Número de convidados inválido");
        eventos();
    } else if (pessoas <= 150) {
        alert("Use o auditório Laranja");
        alert("Agora vamos ver a agenda do evento.");
        cronograma();
    } else if (pessoas > 150 && pessoas <= 220) {
        var cadeiras_adicionais = pessoas - 150;
        alert("Use o auditório Laranja (inclua mais " + cadeiras_adicionais + " cadeiras)");
        alert("Agora vamos ver a agenda do evento.");
        cronograma();
    } else if (pessoas > 150 && pessoas <= 350) {
        alert("Use o auditório Colorado");
        alert("Agora vamos ver a agenda do evento.");
        cronograma();
    }
}

function cronograma() {
    var dia = prompt("Qual o dia do seu evento?");
    var hora = parseInt(prompt("Qual a hora do seu evento?"));

    if (
        dia != "domingo" &&
        dia != "segunda" &&
        dia != "terça" &&
        dia != "quarta" &&
        dia != "quinta" &&
        dia != "sexta" &&
        dia != "sábado"
    ) {
        alert("Dia inválido");
        cronograma();
        return;
    }

    if (
        hora < 7 ||
        (hora > 23 && (dia != "sábado" && dia != "domingo")) ||
        (hora > 15 && (dia == "sábado" || dia == "domingo"))
    ) {
        alert("Auditório indisponível");
        cronograma();
        return;
    }

    var empresa = prompt("Qual o nome da empresa?");
    alert("Auditório reservado para " + empresa + ". " + dia + " às " + hora + "hs.");
    garcom();
}

function garcom() {
   
    var hora = parseInt(prompt("Qual a duração do evento em horas?"));
   
    var convidados = parseInt(prompt("Quantos convidados terá o evento?"));

    var garconsConvidados = Math.ceil(convidados / 12);
   
    var garconsHoras = Math.ceil(hora / 2);
   
    var totalGarcons = Math.max(garconsConvidados, garconsHoras);
   
    var custoGarcons = totalGarcons * hora * 10.50;

    alert("São necessários " + totalGarcons + " garçons.");
   
    alert("Custo: R$ " + custoGarcons.toFixed(2));
   
    alert("Agora vamos calcular o custo do buffet do hotel para o evento.");

    buffet(convidados, empresa);
}

function buffet(convidados, empresa) {
   
    var litrosCafe = convidados * 0.2;
   
    var litrosAgua = convidados * 0.5;
   
    var quantidadeSalgados = convidados * 7;

    var custoCafe = litrosCafe * 0.80;
   
    var custoAgua = litrosAgua * 0.40;
   
    var custoSalgados = (quantidadeSalgados / 100) * 34;

    alert("O evento precisará de " + litrosCafe.toFixed(2) + " litros de café, " + litrosAgua.toFixed(2) + " litros de água, " + quantidadeSalgados + " salgados.");
   
    alert("Custo do Buffet: R$ " + (custoCafe + custoAgua + custoSalgados).toFixed(2));

    relatorioEvento(convidados, empresa);
}

function relatorioEvento(convidados, empresa) {
    var horaInicio = parseInt(prompt("Qual a hora de início do evento?"));
    
    var horaFim = parseInt(prompt("Qual a hora de término do evento?"));

    var duracaoEvento = horaFim - horaInicio;

    var totalGarcons = Math.ceil(convidados / 12);
    
    var custoGarcons = totalGarcons * 10.50 * duracaoEvento;

    
    var litrosCafe = convidados * 0.2;
    
    var litrosAgua = convidados * 0.5;
   
    var quantidadeSalgados = convidados * 7;

    var custoCafe = litrosCafe * 0.80;
   
    var custoAgua = litrosAgua * 0.40;
   
    var custoSalgados = (quantidadeSalgados / 100) * 34;

    var custoBuffet = custoCafe + custoAgua + custoSalgados;

    var valorTotal = custoGarcons + custoBuffet;

    var mensagem = "Evento no Auditório ";
    if (convidados <= 150) {
        mensagem += "Laranja.";
    } else {
        mensagem += "Colorado.";
    }
    mensagem += "\nNome da Empresa: " + empresa + ".";
    mensagem += "\nDuração do evento: " + duracaoEvento + " horas.";
    mensagem += "\nQuantidade de garçons: " + totalGarcons + ".";
    mensagem += "\nQuantidade de Convidados: " + convidados + ".";
    mensagem += "\nCusto do garçons: R$ " + custoGarcons.toFixed(2) + ".";
    mensagem += "\nCusto do Buffet: R$ " + custoBuffet.toFixed(2) + ".";
    mensagem += "\nValor total do Evento: R$ " + valorTotal.toFixed(2) + ".";

    var confirmacao = prompt(mensagem + "\n\nGostaria de efetuar a reserva? S/N");
    if (confirmacao.toLowerCase() === "s") {
        alert(empresa + ", reserva efetuada com sucesso.");
        inicio();
    } else {
        alert("Reserva não efetuada.");
        inicio();
    }
}



     function calcularCombustivelMaisBarato(alcoolWayneOil, gasolinaWayneOil, alcoolStarkPetrol, gasolinaStarkPetrol) {
    

    
    const capacidadeTanque = 42;

    const custoTotalAlcoolWayneOil = alcoolWayneOil * capacidadeTanque;
    
    const custoTotalGasolinaWayneOil = gasolinaWayneOil * capacidadeTanque;
    
    const custoTotalAlcoolStarkPetrol = alcoolStarkPetrol * capacidadeTanque;

    const custoTotalGasolinaStarkPetrol = gasolinaStarkPetrol * capacidadeTanque;

    console.log("Custo Total Álcool Wayne Oil:", custoTotalAlcoolWayneOil);
    
    console.log("Custo Total Gasolina Wayne Oil:", custoTotalGasolinaWayneOil);
    
    console.log("Custo Total Álcool Stark Petrol:", custoTotalAlcoolStarkPetrol);
    
    console.log("Custo Total Gasolina Stark Petrol:", custoTotalGasolinaStarkPetrol);

    const maisBaratoWayneOil = custoTotalAlcoolWayneOil < custoTotalGasolinaWayneOil ? 'álcool' : 'gasolina';
    
    const maisBaratoStarkPetrol = custoTotalAlcoolStarkPetrol < custoTotalGasolinaStarkPetrol ? 'álcool' : 'gasolina';

    const diferencaAlcoolGasolinaWayneOil = (custoTotalGasolinaWayneOil - custoTotalAlcoolWayneOil) / custoTotalGasolinaWayneOil;
    
    const diferencaAlcoolGasolinaStarkPetrol = (custoTotalGasolinaStarkPetrol - custoTotalAlcoolStarkPetrol) / custoTotalGasolinaStarkPetrol;

    const maisAtraenteWayneOil = diferencaAlcoolGasolinaWayneOil >= 0.3 ? 'álcool' : 'gasolina';
    
    const maisAtraenteStarkPetrol = diferencaAlcoolGasolinaStarkPetrol >= 0.3 ? 'álcool' : 'gasolina';

    let mensagem = '';

    if (maisBaratoWayneOil === 'álcool' && maisAtraenteWayneOil === 'álcool') {
        mensagem = 'É mais barato abastecer com álcool no posto Wayne Oil.';
    } else if (maisBaratoWayneOil === 'gasolina' && maisAtraenteWayneOil === 'gasolina') {
        mensagem = 'É mais barato abastecer com gasolina no posto Wayne Oil.';
    }

    if (maisBaratoStarkPetrol === 'álcool' && maisAtraenteStarkPetrol === 'álcool') {
        if (mensagem) {
            mensagem += '\n';
        }
        mensagem += 'É mais barato abastecer com álcool no posto Stark Petrol.';
    } else if (maisBaratoStarkPetrol === 'gasolina' && maisAtraenteStarkPetrol === 'gasolina') {
        if (mensagem) {
            mensagem += '\n';
        }
        mensagem += 'É mais barato abastecer com gasolina no posto Stark Petrol.';
    }

    return mensagem;
}





    function combustivel(){
const alcoolWO = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));

const gasolinaWO = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));

const alcoolSP = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));

const gasolinaSP = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));
       
        var resultado = calcularCombustivelMaisBarato(alcoolWO, gasolinaWO, alcoolSP, gasolinaSP);
        alert(resultado);

        inicio();
}

    
    function manutencao() {
    
    let menorValor = Infinity;
    let empresaMenorValor = "";

    
    while (true) {
       
        let nomeEmpresa = prompt("Qual o nome da empresa?");

       
        let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));

        
        let quantidadeAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));

        
        let percentualDesconto = parseFloat(prompt("Qual a porcentagem de desconto?"));

        
        let quantidadeMinimaDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

        
        let valorTotal = valorPorAparelho * quantidadeAparelhos;

        
        if (quantidadeAparelhos >= quantidadeMinimaDesconto) {
           
            let desconto = (percentualDesconto / 100) * valorTotal;
            valorTotal -= desconto;
        }

        
        alert(`O serviço de ${nomeEmpresa} custará R$ ${valorTotal.toFixed(2)}`);

        
        if (valorTotal < menorValor) {
            menorValor = valorTotal;
            empresaMenorValor = nomeEmpresa;
        }

        
        let resposta = prompt("Deseja informar novos dados? (S/N)");

        
        if (resposta.toUpperCase() === 'N') {
            break;
        }
    }

   
    alert(`O orçamento de menor valor é o de ${empresaMenorValor} por R$ ${menorValor.toFixed(2)}`);
    
    
    inicio();
}

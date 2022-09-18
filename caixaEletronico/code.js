
var saldo = 100.5; //Variavel Global
//variavel local
var senha;
const validaSenha = 3589;
const nome = prompt("Informe seu nome!");
alert(`Olá! ${nome}, é um prazer ter você por aqui :)`);

function inicio() {
    //ESCOPO
    //Variavel Local
    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferencia 6.) Sair'));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            extrato();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            tranferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function ver_saldo() {
    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validaSenha) {
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    } else {
        alert("Senha incorreta! operação invalida!!!");
        ver_saldo();
    }
}

function fazer_deposito() {

    var deposito = parseFloat(prompt('Qual o valor para depósito?'));

    // Not a Number --> Isso é um não-número?
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número.');
        fazer_deposito();
    } else if (deposito <= 0) {
        alert("Operação não realizada!");
        fazer_deposito();
    } else {
        saldo += deposito;
        //saldo = saldo + deposito;
        ver_saldo();
    }
}

function fazer_saque() {
    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validaSenha) {
        var saque = parseFloat(prompt('Qual o valor para saque?'));

        if (isNaN(saque) || saque === '') {
            alert('Por favor, informe um número.');
            fazer_saque();
        } else if (saque > saldo) {
            alert("Operação não realizada!!!");
            fazer_saque();
        } else if (saque <= 0) {
            alert("Operação não realizada!!!");
            fazer_saque();

        } else {
            saldo -= saque;
            //saldo = saldo - saque;
            ver_saldo();
        }
    } else {
        alert("Senha incorreta! Operação invalida!!!");
        fazer_saque();
    }

}

function extrato() {
    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validaSenha) {
        alert("Seus extratos: \n 1- Americanas = R$320,99 \n 2- Mercado Livre = R$69,99 \n 3- IPVA = 1.100,75 \n 4- Netshoes = R$356,90");
        inicio();
    } else {
        alert("Senha incorreta!Operação não realizada!!!");
        extrato();
    }

}

function tranferencia() {
    senha = parseInt(prompt("Digite sua senha: "));
    numeroConta = parseInt(prompt("Informe o numero da conta: "));

    if (isNaN(numeroConta) || numeroConta === '') {
        alert("Informe um numero valido!!");
        tranferencia();
    } else {
        if (isNaN(senha) || senha === '' || senha != validaSenha) {
            alert("Senha invalida!!")
            tranferencia();
        } else if (senha === validaSenha) {
            valorTransf = parseFloat(prompt("Digite o valor que deseja transferir: "));
            if (valorTransf > saldo || valorTransf <= 0 || valorTransf === '') {
                alert("Operação não realizada!!!");
                tranferencia();
            } else {
                saldo -= valorTransf;
                inicio();
            }
        }
    }
}
function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`${nome}, foi um prazer ter você por aqui!`);
        window.close();
    } else {
        inicio();
    }
}

inicio();
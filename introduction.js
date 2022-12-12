alert(`Atividade 1`);

let number = parseInt(prompt("Digite o número que deseja comparar..."));
let secNumber = parseInt(prompt("Digite o número que deseja comparar..."));
let diferenca = (number,secNumber,'op');
if(number > secNumber && number == secNumber){
    diferenca = number-secNumber;
}else if(number < secNumber){
    diferenca = secNumber-number;
};
if(number > secNumber){
    alert(`O primeiro número,  ${number}, é maior e diferença é ${diferenca}.`);
}else if(number < secNumber){
    alert(`O segundo número,${secNumber}, é maior e a diferença é ${diferenca}.`);
}else{
    alert(`Os números ${number} e ${secNumber}, tem o mesmo valor.`);
};


alert(`Atividade 2`);

let number1 = parseFloat(prompt("Digite o número que deseja comparar..."));
let number2 = parseFloat(prompt("Digite o número que deseja comparar..."));

if(number1 > number2){
    alert(`O primeiro número,  ${ number1}, é maior.`);
}else if(number1 < number2){
    alert(`O segundo número,${number2}, é maior.`);
}else{
    alert(`Os números ${number1} e ${number2}, tem o mesmo valor.`);
}


alert(`Atividade 3`);

let salary = parseInt(prompt("Insira aqui seu salário..."));
let emprestimo = parseInt(prompt("Insira o valor das prestações do empréstimo..."));
let percent = salary*(30/100);
if(emprestimo > percent){
    alert(`Empréstimo não concedido.`);
}else if(emprestimo < percent){
    alert(`Empréstimo concedido.`)
};


alert(`Atividade 4`);

let value1 = parseInt(prompt("Digite o valor aqui..."));
if(value1 % 3 != 0 && value1 % 5 != 0){
    alert(`Valor inválido.`);
};

if(value1 % 3 == 0){
    alert(`Valor divisível por 3.`);
}else if(value1 % 5 == 0){
    alert(`Valor divisível por 5.`);
}else if(value1 % 3 != 0 && value1 != 0 && value1 % 2 == 0 ){
    alert (`O número ${value1} é par.`);
};


alert(`Atividade 5`);

let numeroReferenteDia = parseInt(prompt("Insira um número de 1 a 7, corresponde ao dia da semana..."));
if(numeroReferenteDia < 0 && numeroReferenteDia > 7){
    alert(`Valor inválido, o número precisa estar entre 1 e 7.`);
};
if(numeroReferenteDia == 1){
    alert(`Domingo.`);
} else if(numeroReferenteDia == 2){
    alert(`Segunda-feira.`);
}else if(numeroReferenteDia == 3){
    alert(`Terça-feira.`);
}else if(numeroReferenteDia == 4){
    alert(`Quarta-feira.`);
}else if(numeroReferenteDia == 5){
    alert(`Quinta-feira.`);
}else if(numeroReferenteDia == 6){
    alert(`Sexta-feira.`);
}else if(numeroReferenteDia == 7){
    alert(`Sábado.`);
};


alert(`Atividade 6`);

let salarioAtual = parseFloat(prompt("Qual o salário atual ?"));
let reajuste = parseFloat(prompt("Qual o valor do reajuste?"));
let novoSalario = salarioAtual*(reajuste/100) + salarioAtual;
alert(`O valor do sálario com o reajuste será de r$ ${novoSalario}.`);


alert(`Atividade 7`);

let valorEmDolar = parseInt(prompt("Digite aqui o valor..."));
let cotacao = parseFloat(prompt("Digite aqui o valor da cotação atual do dólar..."));
let valorEmReais = valorEmDolar * cotacao;
alert(`$ ${valorEmDolar},00 , é equivalente a R$ ${valorEmReais},00 , tendo ${cotacao} como cotação.`); 


alert(`Atividade 9`);

let tempoGasto = parseInt(prompt("Qual foi o tempo gasto?"));
let velocidade = parseInt(prompt("Qual foi a velocidade?"));
let distanciaPercorrida = tempoGasto * velocidade;
let litrosUsados = distanciaPercorrida / 12
alert(`Seu veículo percorreu ${distanciaPercorrida} km a ${velocidade} km/h em ${tempoGasto}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina .`);


alert(`Atividade 10`);

let valorVariavel = parseInt(prompt("Qual o valor?"));
let taxaVariavel = parseInt(prompt("Qual a taxa?"));
let tempoVariavel = parseInt(prompt("Qual o tempo?"));
if(tempoVariavel = 0){
    alert(`Valor inválido, o tempo informado deve ser em dias.`);
}else if(tempoVariavel = parseFloat){
    alert(`Valor inválido, o tempo informado deve ser em dias.`);
};
let prestacaoValor = valorVariavel + (valorVariavel*(taxaVariavel/100)*tempoVariavel);
alert(`O valor da prestação é de R$ ${prestacaoValor} reais.`);
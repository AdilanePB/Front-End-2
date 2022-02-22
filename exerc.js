let numbers = [1, 3, 5, 8, 12, 42, 96, 1024] ;
let soma = 0 ;

function SomaNumbers() {

    for(var i = 0; i <numbers.length; i++){

        soma = soma + numbers[i]

    }
    console.log(soma);
}

SomaNumbers()
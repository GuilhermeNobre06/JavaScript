var idade = 69;
console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
} else if (idade < 18 || idade > 65){
        console.log('voto voluntario')
    } else {
        console.log('Voto obrigatorio')
}
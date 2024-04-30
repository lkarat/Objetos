console.log("aula de objetos");

const meuCarro={
    marca:'Toyota',
    cor:'Prata',
    ano:2021,
    classe:'Sedan',
    isFlex:true
}
console.log(meuCarro)
console.log(meuCarro.cor);
console.log(meuCarro['isFlex']);
meuCarro.cor="azul"
console.log(meuCarro.cor);

meuCarro['ano']=2025
console.log(meuCarro.ano);

//parei na p. 4 "adicionando propriedades..."

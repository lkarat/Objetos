console.log("Exercícios de Aula! Prática 1");

function imprimirObjeto() {
    const estudante = {
        nome: "Zezinho",
        sobreNome: "Juvêncio",
        matricula: 5559555,
        notasDosemestre: [9, 7, 6.33],
        professorFavorito: "fefinha"

    }
    estudante.modulo = "JavaScript"
    console.log(estudante)
    console.log(estudante.modulo)
    console.log(estudante.nome)
    console.log(estudante.notasDosemestre[1])

    const novoEstudante = {
        ...estudante,
        nome: "Astrodev",
        notasDosemestre: [
            ...estudante.notasDosemestre,
            10,],

        modulo: "React"
    }
    novoEstudante.ano = 1985
    console.log(novoEstudante)
    let estudantesDaFefinha = []
    estudantesDaFefinha.push(estudante,novoEstudante)
    console.log(estudantesDaFefinha);

}

imprimirObjeto()




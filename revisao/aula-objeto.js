const endereco = {
    rua: 'Rua dos Bobos',
    numero: 0
}

const user = {
    name: 'Renan',
    idade: 39,
    email: 'renancavichi@gmail.com',
    cidade: 'Caragua',
    prof: true,
    end: endereco,
    familia: {
        mae: 'Maria',
        pai: 'João',
        irmao: 'José'
    },
    pets: [{nome: 'Tobias', raca: 'viralata'}, 'Gato', 'Peixe']
} 

const obj1 = {
    prop1: 1,
    prop2: 2
}

const obj2 = {
    prop3: 3,
    prop4: 4
}

const tudo = {...obj1, prop1: 5, ...obj2, prop4: 5}
tudo.prop4 = 6
delete tudo.prop1
tudo.prop5 = 5
tudo.prop6 = {teste1: '1', teste2: '2'}
// const tudo = { prop1: 1, prop2: 2 }

console.log(tudo)
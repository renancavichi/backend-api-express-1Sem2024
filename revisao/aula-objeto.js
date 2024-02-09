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



console.log(user.pets[0].nome)
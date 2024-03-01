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

//spread ou espalhamento
const tudo = {...obj1, ...obj2}
// {prop1: 1, prop2: 2, prop3: 3, prop4: 4}
 
// const prop1 = tudo.prop1
// const prop2 = tudo.prop2
// const prop3 = tudo.prop3
// const prop4 = tudo.prop4

//Atribuição via desestruturação (destructuring assignment)
const array1 = [10, 'ola', 'teste', {prop1: 'oi'}]

//desestruturar array pela posição, separando por virgula
const [idade, , ,teste] = array1

console.log('TESTE: ', idade, prop1)
 
//const {prop1, prop2, prop3, prop4} = tudo 


// const exemplo = (props) => {
//     console.log(props.prop1, props.prop2, props.prop3, props.prop4)
// }

// const exemplo = (props) => {
//     const {prop1, prop2, prop3, prop4} = props
//     console.log(prop1, prop2, prop3, prop4)
// }

const exemplo = ({prop1, prop2, prop3, prop4}) => {
    console.log(prop1, prop2, prop3, prop4)
}

console.log(prop1)
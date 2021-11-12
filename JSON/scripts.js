
const objs = [
    {
        "nome": "Victor",
        "idade": 24,
        "esta_trabalhando": true,
        "detalhes_profissão": {
            "profissao": "Progamador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Estudar", "Correr", "Jogar"]
    },
    {
        "nome": "Lucas",
        "idade": 24,
        "esta_trabalhando": true,
        "detalhes_profissão": {
            "profissao": "Nutricionista",
            "empresa": "Empresa Y"
        },
        "hobbies": ["Estudar", "Academia", "Jogar"]
    }
]

console.log(objs)

//JSON
//CONVERTER OBJETO PARA JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//CONVERTER JSON PARA OBJETO
const objData = JSON.parse(jsonData);

console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
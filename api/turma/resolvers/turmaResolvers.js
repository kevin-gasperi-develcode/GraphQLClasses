const turmas = [
    {
        id: 1,
        descricao: "básico"
    }, 
    {
        id: 2,
        descricao: "intermediário"
    }
]


const turmaResolvers = {
  Query: {
    turmas: (a,b,c,d ) => {
        turmas
    }
  },
}; 


// os 4 paramentros parent>dados do nível superior da query, args> pega o localizador como o e.g o ID, context> autenticação e afins, info> onde o resolver recebe infos referente a query e o schema 
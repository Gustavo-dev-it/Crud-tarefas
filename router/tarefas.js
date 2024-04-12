const express = require('express')
const router = express.Router()

// lista mockada
let listaTarefas = [
   
    {
        id:1,
        tarefa: "Lavar Roupa",

    },
     {
        id:2, 
        tarefa: "Estudar"
    }
]

// READ -> Buscar todos os produtos
router.get('/tarefas', (req, res) => {
    res.json(listaTarefas)
})

// READ -> Buscar o produto pelo ID
router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)  
    const tarefa = listaTarefas[index]
    res.json(tarefa)
})

// CREATE -> Criar um produto
router.post('/tarefas', (req, res) => {
    const novaTarefa = req.body

    const tarefa = {
        id: listaTarefas.length + 1,
        nome: novaTarefa.nome,
        preco: novaTarefa.preco
    }

    listaTarefas.push(tarefa)

    res.json({ mensagem: "Tarefa cadastrada com sucesso!"})
})

// DELETE  -> Deletar um produto
router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    listaTarefas.splice(index, 1)
    res.json({ mensagem: "Tarefa excluido com sucesso"})
})

// UPDATE -> Alterar um produto
router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const novoasTarefas = req.body

    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)

    const tarefaAlterada = {
        id: id,
        nome: novasTarefas.nome,
        preco: novasTarefas.preco
    }

    listaProdutos[index] = TarefaAlterada

    res.json({ mensagem: "Tarefa alterada com sucesso!"})

})





module.exports = router
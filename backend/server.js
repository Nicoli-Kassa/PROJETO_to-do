import express from 'express'; // framework para criar rotas e lidar com requisições HTTP
import cors from 'cors'; // middleware para permitir requisições de outros domínios

const app = express(); // cria a aplicação backend
app.use(cors()); // habilita CORS para permitir que o frontend acesse esse servidor
app.use(express.json()); // permite que o servidor entenda requisições com corpo em JSON

// Simula um banco de dados em memória
let tasks = [];
let id = 1;

// BUSCAR TASKS
app.get("/tasks", (req, res) => { // quando o frontend fizer uma requisição GET para /tasks
  res.json(tasks); // envia a lista de tarefas como resposta em JSON
});

// ADICIONAR TASK
app.post("/tasks", (req, res) => { // quando o frontend fizer uma requisição POST para /tasks
  const newTask = { // cria uma nova tarefa com um ID único e o texto recebido
    id: id++,
    text: req.body.text, // Lê o campo text do corpo da requisição (req.body.text).
    completed: false // Inicializa a tarefa como não concluída
  };
  tasks.push(newTask); // Adiciona a nova tarefa ao array tasks
  res.json(newTask); // Envia a nova tarefa criada como resposta em JSON
});

// ATUALIZAR TASK
app.put("/tasks/:id", (req, res) => { // quando o frontend fizer uma requisição PUT para /tasks/:id
  const taskId = parseInt(req.params.id); // Lê o ID da tarefa a ser atualizada da URL
  const task = tasks.find(task => task.id === taskId); // Encontra o índice da tarefa no array tasks
  if (!task) return res.status(404).json({ error: "Tarefa não encontrada" }); // Se a tarefa não existir, retorna erro 404

  task.completed = req.body.completed; // Atualiza o status de conclusão da tarefa com o valor recebido
  res.json(task); // Envia a tarefa atualizada como resposta em JSON
});

// DELETAR TASK
app.delete("/tasks/:id", (req, res) => { // quando o frontend fizer uma requisição DELETE para /tasks/:id
    tasks = tasks.filter(task => task.id !== parseInt(req.params.id)); // Remove a tarefa com o ID especificado
    res.json({ message: "Tarefa removida com sucesso!" }); // Envia uma mensagem de sucesso
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
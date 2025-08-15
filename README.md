# To-Do List

Este projeto é uma aplicação web de lista de tarefas (To-Do List) desenvolvida com React no frontend e uma API REST no backend. O objetivo é permitir ao usuário organizar suas tarefas diárias, marcá-las como concluídas, adicionar novas tarefas e deletar tarefas existentes, tudo com uma interface moderna e responsiva.

---

## Funcionalidades

- Adicionar tarefas
- Listar tarefas do dia/mês
- Marcar tarefas como concluídas
- Deletar tarefas
- Barra de rolagem estilizada
- Layout responsivo
- Navegação entre dias e meses

---

## Tecnologias Utilizadas

- **Frontend:** React, Tailwind CSS, React Router DOM
- **Backend:** Node.js, Express, (opcional: JSON Server para prototipagem)

---

## Estrutura do Projeto

```
to-do-list/
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── DayComponents/
│   │   │   │   ├── ContainerTasks.jsx
│   │   │   │   ├── TaskInput.jsx
│   │   │   │   └── TaskList.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Pages/
│   │   │   ├── Day.jsx
│   │   │   └── Month.jsx
│   │   ├── App.jsx
│   │   └── Style/
│   │       └── scrollbar.css
│   └── ...
├── backend/
│   ├── server.js
│   └── ...
└── README.md
```

---

## Instalação e Execução

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/to-do-list.git
cd to-do-list
```

### 2. Instale as dependências do frontend

```
cd frontend
npm install
```

### 3. Instale as dependências do backend

```
cd ../backend
npm install
```

### 4. Inicie o backend

```
node server.js
```
> Ou use `json-server --watch db.json --port 3000` se estiver usando JSON Server.

### 5. Inicie o frontend

```
cd ../frontend
npm start
```

---

## Customização da Barra de Rolagem

A barra de rolagem foi estilizada via CSS em `frontend/src/Style/scrollbar.css`.  
Você pode alterar cores e estilos conforme sua preferência.

---

## Contribuição

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha nova feature'`
4. Push para o branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## Licença

Este projeto está sob a licença MIT.

---

## Autor

Desenvolvido por Nicoli Kassa.  
Contato: kassanicoli@gmail.com

---

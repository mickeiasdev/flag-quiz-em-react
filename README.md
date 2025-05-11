# 🏳️‍🌈 Flag Quiz – Fundamentos do React

Este projeto é um exercício prático desenvolvido para a disciplina **Fundamentos do React**, onde o objetivo é buscar países a partir da API pública [RestCountries](https://restcountries.com/), listar seus nomes em um `<select>` e exibir informações detalhadas ao selecioná-los.

---

## ✅ Competências Desenvolvidas

- Uso de **hooks** como `useState` e `useEffect`.
- Consumo de **API REST externa** com `fetch`.
- Manipulação de **eventos** e **componentes controlados**.
- Organização do código com **módulos separados** (funções em arquivos externos).
- Exibição condicional de conteúdo com base no estado.

---

## 📚 Trilha de Aprendizagem

### ⚛️ React Básico

- [`useState` e controle de estado](https://react.dev/reference/react/useState)
- [`useEffect` e efeitos colaterais](https://react.dev/reference/react/useEffect)
- [Componentes funcionais](https://react.dev/learn/your-first-component)
- [Renderização condicional no React](https://react.dev/learn/conditional-rendering)

---

## 🧪 Tecnologias Utilizadas

- React (com Vite)
- JavaScript moderno (ES6+)
- HTML5 + CSS3
- API pública [restcountries.com](https://restcountries.com/)

---

## 🗂️ Estrutura do Projeto

```
src/
├── App.jsx           # Componente principal
├── App.css           # Estilos
└── infra/
    └── paises.js     # Funções para buscar países
```

---

## 🖥️ Como visualizar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd seu-repo
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode o projeto localmente:
   ```bash
   npm run dev
   ```

---

## 🧠 Aprendizados e Observações

- A função de busca (`listarPaises`) foi separada do componente, facilitando a reutilização e a leitura do código.
- A seleção de um país no `<select>` dispara uma nova requisição à API para trazer os detalhes.
- O uso correto do `useEffect` evita chamadas desnecessárias.
- Adicionados `optional chaining (?)` para prevenir erros ao acessar propriedades de objetos indefinidos.

---

## 👨‍💻 Autor

Este conteúdo faz parte da disciplina **Fundamentos de React**, oferecida no curso de Análise e Desenvolvimento de Sistemas do Instituto Infnet.

# Explicações

Documento explicativo sobre as decisões tomadas em cada parte do desafio.

---

## 1. HTML + CSS

O formulário foi feito com um `<form>` com uma `<div>` para cada campo (Nome, E-mail, Senha), cada um com um `<label>` ligado a um `<input>`.

Sobre a validação, usei atributos nativos do HTML como `required` em todos os campos e `type="email"` no campo de e-mail. É possível fazer isso em JS, especialmente quando se possui regras específicas, porém, para um formulário simples, e como o desafio especificava o uso de HTML + CSS, optei por seguir com a validação do próprio navegador, que já resolve bem, pois possui mensagem de erro, padrão de e-mail e validação de campos obrigatórios.

O CSS ficou num arquivo separado `style.css` para manter o HTML mais limpo e fácil de ler, e na estilização criei algumas classes, como a `.form-group`, por exemplo, para padronizar o estilo dos campos, sem precisar ficar repetindo código.

---

## 2. Vue 3 (Composition API)

O `App.vue` é o componente raiz que concentra o estado da lista e dos filtros atuais, e é como o ponto de entrada para os componentes filhos (`TodoForm`, `TodoItem` e `TodoFilters`). Esses componentes filhos recebem dados via `props` e "avisam" o pai quando alguma ação é feita, via eventos. Optei por não deixar que os filhos alterassem o estado diretamente, preferi centralizar isso no `App.vue`.

Usei `ref` para as tarefas e para o filtro, para controlar o estado de ambos, de forma que, ao adicionar ou remover uma tarefa, o estado seja alterado e o Vue atualize a interface.

Para definir a lista filtrada, usei `computed`, para calcular e retornar as tarefas com o status selecionado no filtro.

O toggle de `isCompleted` ficou direto no checkbox do `TodoItem`, com `v-model`, para comunicar com o estado do componente pai `App.vue`.

---

## 3. TypeScript

Para a função principal, tipei o array de entrada e defini o retorno como `string[]`, pois é o nome dos usuários que será retornado pela função. A função utiliza o método `filter` para encontrar quais são os usuários com o atributo `age` maior que 23, e por fim usei um `map` para pegar o `name` de cada um desses usuários.

Já na função genérica, criei um tipo auxiliar para encontrar os campos numéricos em determinado objeto e retorná-los, descartando o resto.

Esse tipo foi usado para tipar o parâmetro `field` da função genérica, por isso não é possível filtrar por um campo que não seja numérico. Por fim, a lógica do `filter` e do `map` é a mesma da função `getUserNamesOlderThan23`, porém com campo e valor variável.

---

## 4. SQL

Escrevi um `CREATE TABLE` e um `INSERT` para ter uma tabela igual à do desafio para trabalhar no SQL. A primeira query simplesmente seleciona todas as colunas da tabela `users` e as ordena em ordem decrescente pela coluna `created_at`, ou seja, do mais recente para o mais antigo.

Já a segunda usa a função `DATE_FORMAT` para transformar a coluna `created_at` no formato mês (por exemplo, `2024-02`), para que datas diferentes do mesmo mês caiam no mesmo grupo, e também seleciona a contagem de usuários. Por fim, usei um `GROUP BY` para que todos os usuários criados no mesmo mês ficassem agrupados na mesma linha, permitindo analisar a quantidade de usuários criados por mês.

---

## 5. Backend (NestJS)

Organizei o módulo de usuários separando por responsabilidade:

- `controller`: cuida da rota HTTP (recebe a requisição, devolve a resposta)
- `service`: é onde ficam todas as regras de negócio e guarda os dados (em memória)
- `dtos`: definem o formato de entrada e saída da API
- `model`: modelo de usuário utilizado pela aplicação 
- `mapper`: converte entre DTO e model

Sei que era possível fazer o desafio sem usar mapper e DTO, mas quis mostrar como eu organizaria algo que pode vir a crescer em algum momento.

---

## 6. Git

Ao longo do desenvolvimento, fui separando os commits por etapa em vez de subir tudo de uma vez: primeiro a inicialização/estrutura de cada projeto `chore`, depois cada funcionalidade foi entrando aos poucos em commits ao longo da implementação, usando `feat`, e a estilização em commits de `style`.

---

## 7. Organização de Projeto

Se eu fosse começar um projeto fullstack do zero, no **frontend (Vue 3)** eu separaria assim:

```
src/
├── assets/          -> imagens, ícones, fontes
├── components/      -> componentes da aplicação
├── views/           -> páginas da aplicação
├── router/          -> configurações de rotas da aplicação
├── stores/          -> estados globais
├── services/        -> integração com APIs
├── composables/     -> lógicas reutilizáveis
└── types/           -> tipos e interfaces TS
```

Eu separaria os componentes em `components/` e as páginas em `views/`. As chamadas HTTP para APIs ficariam em `services/`. Lógicas reutilizáveis, como um `useUsers`, por exemplo, ficariam em `composables/`. Os tipos e interfaces TypeScript ficariam em `types/`, os estados globais ficariam em `stores/`, as rotas da aplicação ficariam organizadas em `router/`, e as imagens, ícones, fontes, gifs e estilizações globais ficariam em `assets/`.

Já no **backend (NestJS)** eu organizaria assim:

```
src/
├── modules/
│   └── users/
│       ├── controllers/
│       ├── services/
│       ├── dtos/
│       ├── mappers/
│       ├── entities/
│       └── users.module.ts
├── app.module.ts
└── main.ts
```

Separaria em módulos, por exemplo: `users`, e `products`, cada um numa pasta tendo seu próprio `controllers/`, `/services` e etc.

---

## 8. Cenário de Problema — login lento

Primeiramente eu abriria o DevTools no navegador e olharia a aba Network, para identificar se o problema está no front ou se realmente a demora está em alguma chamada específica para o backend. Depois eu olharia os logs e o tempo de resposta do backend, para tentar identificar onde está a lentidão. Também checaria a query usada para buscar o usuário no login.

O que eu tentaria para melhorar:

Isso vária a depender de qual foi o problema identificado, mas citando duas possíveis soluções sem saber qual seria o problema seriam:

1. Colocar um índice na coluna usada para autenticar, normalmente é a primeira coisa que eu penso quando preciso otimizar a velocidade de alguma consulta.
2. Verificar se alguma etapa do login está síncrona sem necessidade, por exemplo, envio de e-mail, log de acesso e etc. Eu deixaria essas funções executando de forma assíncrona/background quando possível, e no front, eu evitaria carregar coisas pesadas, como bibliotecas, imagens e vídeos, que a tela de login não precisa.

---

## 9. Uso de Ferramentas de IA

Utilizei o GitHub Copilot em todo o processo de desenvolvimento, com o autocomplete do VS Code.

Também usei o Claude para me ensinar o conceito de tipagem genérica (em um contexto diferente do desafio proposto), antes de aplicar no desafio 3, e para fazer um paralelo entre alguns pontos do Vue e do React (por ser um framework que eu já utilizei mais que o Vue).

Já ouvi falar de MCP, porém nunca utilizei ou estudei a fundo. Entendo que seja um protocolo utilizado para padronizar integrações de alguma IA com alguma ferramenta externa. Já criei alguns agentes de IA em projetos pessoais no n8n, como um agendador de atendimentos para barbearia integrado com whatsapp, gemini, postgresql, e google calendar e um guia turístico integrado com whatsapp e gemini.

Por fim, utilizei o ChatGPT para montar um template de README.md para esse repositório.
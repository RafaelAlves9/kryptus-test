# 🚀 TESTE KRYPTUS - STAR WARS 🚀

## Descrição das Tecnologias
- ReactJs, React-Router-Dom, API Context, Localstorage, consumo de API com Axios, Hooks (useNavigate, useState e useEffect), Styled-components e Material-UI.

## Detalhes da Aplicação
- O acesso a página "Filmes" está restrita aos usuários que fizerem Login, caso contrário serão redirecionados a uma página customizada de erro de acesso.
- A checagem do Login é feita pela observação de um estado global por uma API Context.
- O status de Login é guardado no Localstorage, para não ser "esquecido" se houver reload ou fechamento do navegador.
- Os dados da API também são guardados no Localstorage, assim, uma vez consultada a api, os dados serão reutilizados sem a necessidade de novas requisições.
- O site está 100% responsivo.
- Separei o projeto por pastas estratégicas, agrupando componentes de valor semelhante em cada uma.

## Acesso de Login
- Usuário: "admin"
- Senha: "admin123!"

## Rodando o projeto
- Antes de tudo, instale as dependências do projeto (npm install) para poder rodar-lo (npm start).

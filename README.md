# NYTTOP
O projeto consiste em mostrar as principais noticías dos setores Ciência & Tecnologia, Saúde, Política e Mundo do New York Times. Ao clicar em cada menu, será mostrado as principais noticias de cada setor.

## Requisitos mínimos
- [Docker - v18.06.1-ce](https://www.docker.com/)

## Tecnologia utilizada
- [Docker](https://www.docker.com/)
- [React - 16.7.0-alpha.2](https://reactjs.org/)
    - Test
        - [Jest](https://jestjs.io/)
        - [enzyme](https://airbnb.io/enzyme/)
        - [nock](https://github.com/nock/nock)
        - [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
    - Linter
        - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
    - Style
        - [styled-components](https://www.styled-components.com/)

## Inicialização
```
make run
```

## Observações
- Utilização da de hooks(https://reactjs.org/docs/hooks-intro.html) do react na versão 16.7.0-alpha.2. Não foi utilizada a criação de classes nesse projeto. Apenas "functions as first-class objects" foram utilizadas. Essa versão ainda está na RFC(https://github.com/reactjs/rfcs/pull/68)
- Criação de diversos testes usando jest, jasmine, nock e enzyme. Não fiz TDD por conta da dificuldade escrever testes na nova versão do react.
- A rota foi feita no nginx dentro do container. Poderia ser feita com o react router mas como ele não foi usado na solucão, não iria usar apenas para criar essa rota.
- É preferivel rodar a aplicação com docker pois nela está contida a solução com a rota correta(/nyttop) feita usando o nginx.

## Melhorias
- Processor de build usando webpack para minificação e etc...
- Melhoria no css e no tema
- Adicionar imagens que estão em cada notícia, na página. Usar o react suspense para que o load da imagem apareca de uma forma mais suave para o usuário.(https://www.youtube.com/watch?v=SCQgE4mTnjU)
- Testes com nightwatch(selenium)
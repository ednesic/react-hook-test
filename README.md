- Utilização da de hooks(https://reactjs.org/docs/hooks-intro.html) do react na versão 16.7.0-alpha.2. Essa versão ainda está na RFC(https://github.com/reactjs/rfcs/pull/68)
- Criação de diversos testes usando jest, jasmine, nock e enzyme. Não fiz TDD por conta da dificuldade escrever testes na nova versão do react.
- A rota foi feita no nginx dentro do container. Poderia ser feita com o react router mas como ele não foi usado na solucão, não iria usar apenas para criar essa rota.
- É preferivel rodar a aplicação com docker pois nela está contida a solução com a rota correta(/nyttop) feita usando o nginx.
- Para rodar a aplicação basta rodar make run

Falta:
- Processor de build usando webpack para minificação e etc...
- css e melhora no tema
- revisar nome de testes
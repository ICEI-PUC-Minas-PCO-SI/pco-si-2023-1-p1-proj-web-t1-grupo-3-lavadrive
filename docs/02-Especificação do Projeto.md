# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1. André Veríssimo tem 32 anos, é casado,tem filhos e trabalha como uber já faz 5 anos, dessa forma ele precisa sustentá-los e procura uma forma de deixar o carro limpo gastando o mínimo de tempo possível que poderia estar ganhando dinheiro para sua família.
Seus filhos são pequenos e a mulher precisa cuidar deles, então André não tem ajuda para levar o carro no lava-jato, ultimamente necessitando de uma maneira rápida para agendar uma lavagem de maneira virtual e bancar tudo que precisa dentro de casa, no qual pudesse colocar um horário pré-definido para levar o carro e buscar rapidamente e em qual dia quisesse.

2. Danilo Ramos tem 24 anos, é solteiro e trabalha como atendente do McDonalds de manhã e como bartender nas noites, pra ganhar dinheiro o suficiente pra se sustentar,porém como ocorreu a falência de seus pais quando era pequeno, Danilo nunca aprendeu como lavar o carro pela parte de dentro de forma adequeada, sempre ficando alguma parte suja após a limpeza, e sujando de novo rapidamente após comer dentro do carro na volta de seu longo período trabalhando, obrigando-o a contratar alguém para fazer tal serviço, porém após ir na LavaDrive, Danilo ficou impressionado com as diversas opções de serviço que possuiam, como a lavagem completa por dentro, a verificação da qualidade dos vidros do carro e o chaveiro de brinde.

3. Gabriel Silva da Costa tem 35 anos, é um milionário de sucesso e trabalha com marketing digital. É bem inteligente e conquistou tudo que queria em sua vida, após passar anos sofridos sem conseguir avançar com seu negócio, até que explodiu no comércio e ficou rico. Porém, como é solteiro, precisa sempre levar seu carro, sua moto, e sua caminhonete para lavar um de cada vez, e em dias diferentes,para limpar após muito tempo sem mexer nisso, e Gabriel ficou maravilhado com a divisão de filas por categoria do automóvel e a rapidez do serviço da LavaDrive.


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Funcionário         | Acessar a agenda                   | Desmarcar ou marcar horários           |
|Cliente             | Marcar o horário                   | Evitar ficar esperando em longas filas |
|Cliente             | Avaliar o serviço                  | Deixar a sua opinião                   |
|Cliente             | Pagamento adiantado                | Tornar o processo ainda mais dinâmico  |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Agendamento da limpeza por horário e data | ALTA | 
|RF-002| Divisão de filas por categoria do automóvel | ALTA |
|RF-003| Pagamento via dinheiro, pix ou cartão (débito/crédito) | ALTA |
|RF-004| Várais opções no serviço de limpeza do veículo | MÉDIA |
|RF-005| Avaliação do usuário após o serviço | MÉDIA |
|RF-006| Observações feitas pelo usuário antes da lavagem | MÉDIA |
|RF-007| Gerencimento de cadastros de usuários | MÉDIA |
|RF-008| Gerencimento de cadastros de carros (placa, modelo, etc.) | MÉDIA |
|RF-009| Pagamento pode ser adiantado pelo usuário | MÉDIA |
|RF-010| Notificação quando o carro estiver pronto | MÉDIA |
|RF-011| Estimativa do tempo de conclusão da limpeza | MÉDIA |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Verificação em duas etapas diante de um acesso não autorizado | ALTO | 
|RNF-002| Notificar ao término da limpeza | MÉDIA | 
|RNF-003| O site deve estar online 24 horas |  BAIXA | 
|RNF-004| Compatível com todos os sistemas operacionais |  BAIXA | 


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


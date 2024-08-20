# Executando o Projeto Cypress

Este guia fornece instruções para configurar e executar o projeto Cypress criado por Tiago Ortencio pra o processo seletivo de QA na Embarca.

## Passos para Executar os Testes

1. **Clone o Repositório SSH:**
    ```bash
    git@github.com:ortencioqa/embarcaqa.git
    ```   

2. **Instale as Dependências:**

   ```bash
   Abrir o projeto no VsCode.
   Abrir um novo terminal na pasta do projeto e instalar o Node:

   npm i
   ```

3. **Para rodar os testes em modo headless (sem interface gráfica):**

   ```bash
   
   npm run test

   Obs: O teste end2endEmbarca.cy.js só vai passar caso o usuário ainda não tenha uma viagem aguardando pagamento.
   Caso o usuário não tenha uma viagem aguardando pagamento não vai passar o teste OutraViagem.cy.js pois os fluxos são diferentes.
   ```

4. **Para abrir o Cypress Test Runner e visualizar os testes:**

   ```bash
   Digitar o código abaixo no Terminal.

   npx cypress open
   ```

Seus testes Cypress estão configurados e prontos para serem executados.


# Sugestão de automação Mobile 

Maestro: Um framework de automação mobile para Android e iOS.

## Casos de Teste e Cenários de Automação
1. **Teste de Login:**

Objetivo: Verificar se o usuário consegue realizar login no aplicativo.

Passos:<br>
Abrir o aplicativo.<br>
Inserir e-mail.<br>
Inserir senha.<br>
Clicar no botão de login.<br>
Validar redirecionamento para a página inicial ou tela de viagens.<br>
### Código Maestro:

```bash
yaml
- step: launch
  app: com.embarcaai
- step: tap
  locator: id=email
- step: type
  locator: id=email
  value: testeqa@embarca.ai
- step: tap
  locator: id=password
- step: type
  locator: id=password
  value: Arca123
- step: tap
  locator: id=btn-login
- step: wait
  duration: 5000
- step: assert
  locator: id=home-screen
  condition: exists
```

2. **Teste de Busca de Passagens:** <br>

Objetivo: Verificar se o usuário consegue buscar passagens com sucesso.

Passos:<br>
Clicar em "Nova Viagem".<br>
Inserir origem e destino.<br>
Selecionar datas de ida e volta.<br>
Clicar em "Buscar".<br>
Validar a exibição dos resultados.<br>
### Código Maestro:

```bash
yaml
- step: tap
  locator: id=new-trip
- step: tap
  locator: id=origin
- step: type
  locator: id=origin
  value: CURITIBA
- step: tap
  locator: xpath=//li[contains(text(), 'CURITIBA - PR')]
- step: tap
  locator: id=destination
- step: type
  locator: id=destination
  value: CAIOBA
- step: tap
  locator: xpath=//li[contains(text(), 'CAIOBA - PR')]
- step: tap
  locator: id=departure-date
- step: tap
  locator: xpath=//date[@value='desired-date']
- step: tap
  locator: id=return-date
- step: tap
  locator: xpath=//date[@value='desired-date']
- step: tap
  locator: id=search-button
- step: wait
  duration: 5000
- step: assert
  locator: id=search-results
  condition: exists
```

3. **Teste de Reserva de Poltrona**

Objetivo: Verificar se o usuário consegue reservar uma poltrona.

Passos: <br>
Selecionar poltrona de ida.<br>
Confirmar reserva de ida.<br>
Selecionar poltrona de volta.<br>
Confirmar reserva de volta.<br>
Preencher dados do passageiro.<br>
### Código Maestro:

```bash
yaml
- step: tap
  locator: id=seat-selection
- step: tap
  locator: xpath=//seat[@number='3']
- step: tap
  locator: id=confirm-seat
- step: tap
  locator: id=return-seat-selection
- step: tap
  locator: xpath=//seat[@number='3']
- step: tap
  locator: id=confirm-return-seat
- step: type
  locator: id=passenger-name
  value: Tiago QA
- step: type
  locator: id=passenger-birthdate
  value: 24/12/1988
- step: type
  locator: id=passenger-doc
  value: 83628308
- step: type
  locator: id=return-passenger-name
  value: Tiago QA
- step: type
  locator: id=return-passenger-birthdate
  value: 24/12/1988
- step: type
  locator: id=return-passenger-doc
  value: 83628308
- step: tap
  locator: id=generate-pix
- step: wait
  duration: 5000
- step: assert
  locator: id=pix-qrcode
  condition: visible
```
  
## Observações<br>
Foram utilizados ids, xpaths, e informações fictícias sendo necessário inspecionar os elementos corretos para que os steps sejam executados como o esperado, acima foi apenas um exemplo de como automatizar os fluxos dentro do app. <br>
Esse fluxo automatizados com Maestro ajuda a garantir que o processo de compra no aplicativo Embarca.ai funcione conforme o esperado em diferentes cenários.

### Agradeço a oportunidade de realizar o desafio, espero ter atendido as necessidades para pleitear a vaga, disponibilidade para início imediato.
### Segue abaixo meu Perfil no LinkedIn. <br>
## [Tiago Ortencio](https://www.linkedin.com/in/ortencioqa/)

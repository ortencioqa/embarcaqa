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
Seus testes Cypress estão configurados e prontos para serem executados.

3. **Para abrir o Cypress Test Runner e visualizar os testes:**

   ```bash
   Digitar o código abaixo no Terminal.

   npx cypress open

   Obs: O teste end2endEmbarca.cy.js só vai passar caso o usuário ainda não tenha uma viagem aguardando pagamento.
   Caso o usuário não tenha uma viagem aguardando pagamento não vai passar o teste OutraViagem.cy.js pois os fluxos são diferentes.
   ```

4. **Para executar o teste sem modo gráfico:**

   ```bash
   Digitar o código abaixo no Terminal.

    npx cypress run --spec "cypress/e2e/embarca/OutraViagem.cy.js" 

   Obs: Foi criado dois cenários, um que o cliente não possúi uma viagem aguardando pagamento (end2endEmbarca.cy.js) e outro que o cliente possúi uma viagem aguardando pagamento e deseja realizar o     
   fluxo novamente para uma nova viagem (OutraViagem.cy.js) ambos estão na mesma pasta "cypress/e2e/embarca/" antes de executar os testes verificar a situação do cliente para verificar qual cenário     
   deverá ser executado para que o resultado seja **Passed**.
    ```

![image](https://github.com/user-attachments/assets/b65c815e-5df6-4130-9560-89ed66a696cb)



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
# login.yaml

appId: com.embacaaistage.exemplo

steps:
  - launchApp
  - tapOn: "Entrar"
  - inputText:
      text: "testeqa@embarca.ai"
      selector: "input_email" 
  - inputText:
      text: "Arca123"
      selector: "input_password" 
  - tapOn: "Entrar" 
  - waitForElement:
      timeout: 5000
      selector: "TelaInicial"

```
Para executar o teste com o Maestro, você pode usar o comando:

```bash
maestro test login.yaml
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

# busca_passagem.yaml

appId: com.embacaaistage.exemplo

steps:
  - runFlow: "login_flow.yaml"
  
  - tapOn: "Nova Viagem"
  - inputText:
      text: "Curitiba"
      selector: "input_origem"
  - inputText:
      text: "São Paulo"
      selector: "input_destino"
  - tapOn: "Selecionar Data"
  - inputDate:
      date: "2024-09-15"
      selector: "input_data_ida"
  - inputDate:
      date: "2024-09-20"
      selector: "input_data_volta"
  - tapOn: "Buscar"
  - waitForElement:
      selector: "ResultadoBusca"

```
Para executar o teste com o Maestro, você pode usar o comando:

```bash
maestro test busca_passagem.yaml
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
#reserva_poltrona.yaml

appId: com.embacaaistage.exemplo

steps:
  - runFlow: "login_flow.yaml"
  - runFlow: "busca_passagens.yaml"

  - tapOn: "seat-selection"
  - tapOn:
      selector: "xpath=//seat[@number='3']"
  - tapOn: "confirm-seat"
  - tapOn: "return-seat-selection"
  - tapOn:
      selector: "xpath=//seat[@number='3']"
  - tapOn: "confirm-return-seat"
  - inputText:
      text: "Tiago QA"
      selector: "passenger-name"
  - inputText:
      text: "24/12/1988"
      selector: "passenger-birthdate"
  - inputText:
      text: "83628308"
      selector: "passenger-doc"
  - inputText:
      text: "Tiago QA"
      selector: "return-passenger-name"
  - inputText:
      text: "24/12/1988"
      selector: "return-passenger-birthdate"
  - inputText:
      text: "83628308"
      selector: "return-passenger-doc"
  - tapOn: "generate-pix"
  - waitFor:
      timeout: 5000
  - assertElementVisible: "pix-qrcode"


```
Para executar o teste com o Maestro, você pode usar o comando:

```bash
maestro test reserva_poltrona.yaml
```

## Observações<br>
Foram utilizados ids, xpaths, e informações fictícias sendo necessário inspecionar os elementos corretos para que os steps sejam executados como o esperado, acima foi apenas um exemplo de como automatizar os fluxos dentro do app. <br>
Esse fluxo automatizados com Maestro ajuda a garantir que o processo de compra no aplicativo Embarca.ai funcione conforme o esperado em diferentes dispositivos e sistemas operacionais.

### Agradeço a oportunidade de realizar o desafio, espero ter atendido as necessidades para pleitear a vaga, disponibilidade para início imediato.
### Segue abaixo meu Perfil no LinkedIn. <br>
## [Tiago Ortencio](https://www.linkedin.com/in/ortencioqa/)

/// <reference types="cypress" />

describe("Fluxo de Busca de Passagens", () => {
  it("Deve realizar a busca com sucesso e reservar a poltrona", () => {
    // Visitar o site
    cy.visit("https://www.embarca-staging.com.br/sessions/new");

    // Insere e-mail
    cy.get("#email").type("testeqa@embarca.ai");

    // Insere Senha
    cy.get("#pass_log_id").type("Arca123");
    // Aguarda carregar informações
    cy.window().then((win) => {
      win.Turbolinks.clearCache = () => {
        console.log("clear");
      };
      win.Turbolinks.visit = () => {
        console.log("visit");
      };
    });
    // Clica no botão Entrar
    cy.get(".btn-primary").click();
    cy.wait(3000);
    cy.visit("https://www.embarca-staging.com.br/customer/travel");

    //Clica em nova viagem
    cy.get(
      "#next-travel > .card-footer-customer > :nth-child(1) > .seats > .btn"
    ).click();
    // Inserir a origem
    cy.get('input[name="route[origin_text]"]').type("CURITIBA");
    cy.get("li.autoComplete_result").contains("CURITIBA - PR").click();

    // Inserir o destino
    cy.get('input[name="route[destination_text]"]').type("CAIOBA");
    cy.get("li.autoComplete_result").contains("CAIOBA - PR").click();

    // Selecionar a data de ida
    cy.get('input[name="route[departure_at]"]').click();
    cy.get('[data-date="1725494400000"]').click();

    // Selecionar a data de volta
    cy.get("#return").click();
    cy.get('[data-date="1725494400000"]').click();

    // Realiza a busca
    cy.contains("span.color-primary-contrast", "Buscar").click();

    // Espera os resultados serem carregados
    cy.wait(3000);

    // Clica em reservar poltrona
    cy.get('button[name="button"]').contains("Reservar poltrona").click();
    cy.wait(3000); // Espera a página de reserva ser carregada

    // Reserva a poltrona IDA
    cy.get(
      ':nth-child(2) > .mb-4 > .bus-container > .first-floor-map > .fade-wrapper > .seats > :nth-child(4) > [data-number="3"]'
    ).click();

    // Espera a seleção da poltrona ser processada
    cy.wait(3000);

    // Clica em avançar
    cy.get("a#next-button").contains("Avançar").click();

    // Espera os resultados serem carregados
    cy.wait(3000);

    //Clica em reservar poltrona
    cy.get("button.btn-reservation").contains("Reservar poltrona").click();

    //Seleciona a poltrona Volta
    cy.get(
      ':nth-child(2) > .mb-4 > .bus-container > .first-floor-map > .fade-wrapper > .seats > :nth-child(4) > [data-number="3"]'
    ).click();

    //Aguarda carregamento dos elementos
    cy.wait(3000);

    // Clica em avançar
    cy.get("a#next-button").contains("Avançar").click();

    //Digita o Nome do passageiro de IDA
    cy.get("#order_reservations_attributes_0_seats_attributes_0_name").type(
      "Tiago QA"
    );

    //Informa data de nascimento IDA
    cy.get(
      "#order_reservations_attributes_0_seats_attributes_0_birthdate"
    ).type("24/12/1988");

    //Informa o documento IDA
    cy.get("#order_reservations_attributes_0_seats_attributes_0_rg").type(
      "83628308"
    );

    //Informa o nome passageiro da Volta
    cy.get("#order_reservations_attributes_1_seats_attributes_0_name").type(
      "Tiago QA"
    );

    //Informa data de nascimento Volta
    cy.get(
      "#order_reservations_attributes_1_seats_attributes_0_birthdate"
    ).type("24/12/1988");

    //Informa o documento Volta
    cy.get("#order_reservations_attributes_1_seats_attributes_0_rg").type(
      "83628308"
    );
    // //Clica em gerar PIX
    // cy.get("#generate-pix").click();

    // //Aguardar gerar QRCode
    // cy.wait(5000);

    // //Valida QRCode
    // cy.get("#pix-qrcode").should("be.visible");
  });
});

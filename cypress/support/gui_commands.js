Cypress.Commands.add('loginAlura', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('loginGithub', (nome, senha) => {
  cy.get('input#login_field').type(nome);
  cy.get('input[name="password"]').type(senha, {log: false});
  cy.get('input[data-signin-label="Sign in"]').click();
})

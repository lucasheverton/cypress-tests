describe('Cadastro de usuarios alura pic', () => {

  beforeEach(() => {
      cy.visit('/')
  })

  it('verifica mensagem de validacao', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
  })

  it('verifica mensagem de email invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="email"]').type('lucas');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
  })

  it('verifica mensagem de senha com menos de 8 digitos', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="password"]').type(1234567);
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
  })

  it('verifica mensagem de username com lowercase', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="userName"]').type('LUCASZ');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
  })

  const users = require('../../fixtures/usuarios.json');
  users.forEach((user) => {
    it(`Registra o novo usuário ${user.userName}`, () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="email"]').type(user.email);
      cy.get('input[formcontrolname="fullName"]').type(user.fullName);
      cy.get('input[formcontrolname="userName"]').type(user.userName);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.contains('button', 'Register').click();

    })
  });

})

describe('Login de usuarios alura pic', () => {

  beforeEach(() => {
    cy.visit('/')

    // Simulando resposta de usuário inválido
    // cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
    //   statusCode: 400
    // }).as('stubPost')
  })

  //it.only significa que só vai executar ele de teste.
  it('fazer login de usuário válido', () => {
    cy.loginAlura(Cypress.env('userName'), Cypress.env('password'))
    // cy.wait('@stubPost')
    cy.contains('a', '(Logout)').should('be.visible');
  })

  it('fazer login de usuário inválido', () => {
    cy.loginAlura('lucas', 'a1b2c3')
    cy.on('window:alert', (srt) => {
      expect(srt).to.equal('Invalid user name or password')
    })
  })

})
